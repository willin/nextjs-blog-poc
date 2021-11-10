/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

module.exports = withYaml({
  swcMinify: true,
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: false
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
});
