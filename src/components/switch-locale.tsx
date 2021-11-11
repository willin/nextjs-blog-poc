import { useRouter } from 'next/router';
import Link from 'next/link';
import useI18n from '../hooks/use-i18n';
import { Locales } from '../../i18n';

export default function SwitchLocale() {
  const { activeLocale } = useI18n();
  const { asPath } = useRouter();

  return (
    <nav>
      {Locales.map(([locale, label] = ['', '']) => (
        <Link key={locale} href={asPath} locale={locale}>
          <a className={locale === activeLocale ? 'current' : ''}>{label}</a>
        </Link>
      ))}
    </nav>
  );
}
