const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  const isProduction = mode === 'PRODUCTION';

  config.plugins.push(
    new webpack.DefinePlugin({
      STORYBOOK: JSON.stringify(true),
      __PRODUCTION__: JSON.stringify(isProduction),
      __TEST__: JSON.stringify(false),
      // Show deprecation warnings in Storybook
      __DEV__: JSON.stringify(true),
    }),
  );

  return config;
};
