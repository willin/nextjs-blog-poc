/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
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

    // insert js-yaml-loader
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader'
    });

    return config;
  }
};
