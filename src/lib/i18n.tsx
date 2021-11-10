import { useRouter } from 'next/router';
import { createContext, useState, useRef, ReactNode } from 'react';
import rosetta from 'rosetta';
import localeMessages from '../../i18n';

interface iI18nContext {
  activeLocale: Languages;
  // eslint-disable-next-line no-unused-vars
  t: (key: string, ...args: any[]) => string;
}

type Languages = keyof typeof localeMessages;

const i18n = rosetta();
i18n.locale('en');
export const I18nContext = createContext<iI18nContext>({} as iI18nContext);

export default function I18n({ children }: { children: ReactNode }) {
  const { locale, defaultLocale } = useRouter();
  const activeLocaleRef = useRef<Languages>((locale as Languages) || (defaultLocale as Languages) || 'en');
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  const i18nWrapper = {
    activeLocale: activeLocaleRef.current,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    t: (key: string, ...args: any[]) => i18n.t(key, ...args),
    locale: (l: Languages) => {
      i18n.locale(l);

      i18n.set(l, localeMessages[l]);
      // force rerender to update view
      setTick((tick) => tick + 1);
    }
  };

  // for initial SSR render
  if (firstRender.current === true) {
    firstRender.current = false;
    i18nWrapper.locale(activeLocaleRef.current);
  }

  return <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>;
}
