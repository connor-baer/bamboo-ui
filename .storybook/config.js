import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'emotion-theming';
import { injectGlobalStyles } from '@sumup/circuit-ui';

import { circuit } from '../src/themes';

// Dynamically decide wich styles to load.
if (PRODUCTION) {
  require('./bamboo-ui-global.css');
}

if (!PRODUCTION) {
  injectGlobalStyles({ theme: circuit });
}

// Sets the info addon's options.
setDefaults({
  header: false
});

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  name: 'Circuit UI',
  url: 'https://github.com/connor-baer/bamboo-ui'
});

const req = require.context('../src/components', true, /\.story\.js$/);

const withThemeProvider = storyFn => (
  <ThemeProvider theme={circuit}>{storyFn()}</ThemeProvider>
);

const withStoryStyles = storyFn => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      {storyFn()}
    </div>
  );
};

const loadStories = () => {
  addDecorator(withKnobs);
  addDecorator(withStoryStyles);
  addDecorator(withThemeProvider);
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
