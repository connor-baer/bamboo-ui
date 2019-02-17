const path = require('path');
const webpack = require('@storybook/react/node_modules/webpack');

module.exports = ({ config, mode }) => {
  const isProduction = mode === 'PRODUCTION';

  config.externals = {
    ...config.externals,
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  };

  config.module.rules.push({
    test: /\.story\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            parser: 'babel'
          }
        }
      }
    ],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: 'react-svg-loader',
        options: {
          es5: true
        }
      }
    ]
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      STORYBOOK: JSON.stringify(true),
      PRODUCTION: JSON.stringify(isProduction)
    })
  );

  if (isProduction) {
    config.module.rules.push({
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname)
    });
  }

  return config;
};
