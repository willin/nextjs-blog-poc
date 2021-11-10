import { useRouter } from 'next/router';
import { createContext, useState, useRef } from 'react';
import rosetta from 'rosetta';
import localeMessages from '../../i18n';

const i18n = rosetta();
i18n.locale('en');
export const I18nContext = createContext();

export default function I18n({ children }) {
  const { locale, defaultLocale } = useRouter();
  const activeLocaleRef = useRef<string>(locale || defaultLocale);
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  const i18nWrapper = {
    activeLocale: activeLocaleRef.current,
    t: (...args: Record<string, unknown>) => i18n.t(...args),
    locale: (l: string) => {
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
