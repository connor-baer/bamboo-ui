module.exports = {
  stories: ['../src/**/*.story.@(tsx|ts|js)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    './addons/auto-theme-switcher/preset.js.',
  ],
  core: {
    builder: 'webpack5',
  },
  /**
   * Configure Webpack for CSS modules. Taken from:
   * https://github.com/Negan1911/storybook-css-modules-preset/issues/14
   */
  webpackFinal: async (config) => {
    // Get the index of CSS rule
    const ruleCssIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === '/\\.css$/',
    );

    // Map over the 'use' array of the CSS rule and set the 'module' options
    config.module.rules[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes('/css-loader/')) {
        item.options.modules = {
          auto: true,
          exportLocalsConvention: 'asIs',
          localIdentName: '[name]__[local]__[hash:base64:5]',
        };
      }
      return item;
    });

    return config;
  },
};
