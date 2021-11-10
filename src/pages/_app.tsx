import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import I18n from '../lib/i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <I18n>
        <Component {...pageProps} />
      </I18n>
    </Layout>
  );
}

export default MyApp;
