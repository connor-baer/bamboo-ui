const {
  react: baseConfig,
  overwritePresets
} = require('@sumup/foundry/eslint');

const customConfig = {
  rules: {
    'notice/notice': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.jsx']
          }
        }
      }
    }
  }
};

module.exports = overwritePresets(baseConfig, customConfig);
