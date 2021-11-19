/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

export default withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: true
  }
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat'
  //     });
  //   }
  //   return config;
  // }
});
