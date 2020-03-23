const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  const isProduction = mode === 'PRODUCTION';

  config.plugins.push(
    new webpack.DefinePlugin({
      STORYBOOK: JSON.stringify(true),
      PRODUCTION: JSON.stringify(isProduction)
    })
  );

  return config;
};
