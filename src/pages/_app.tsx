import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';
import I18n from '../lib/i18n';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <I18n>
          <Component {...pageProps} />
        </I18n>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
