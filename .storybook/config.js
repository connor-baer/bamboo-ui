import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

import '../__mocks__/nextRouter';

import { standard } from '../src/themes';
import { injectGlobalStyles } from '../src/styles';
import ThemeProvider from '../src/components/ThemeProvider';

import Story from './Story';
import { OPTIONS } from './hierarchySeparators';

// Dynamically decide wich styles to load.
if (PRODUCTION) {
  require('./bamboo-ui-global.css');
}

if (!PRODUCTION) {
  injectGlobalStyles({ theme: standard() });
}

// Sets the info addon's options.
setDefaults({
  header: false
});

setOptions({
  ...OPTIONS,
  name: 'Bamboo UI',
  url: 'https://github.com/connor-baer/bamboo-ui'
});

const req = require.context('../src/components', true, /\.story\.js$/);

const withThemeProvider = storyFn => (
  <ThemeProvider theme={standard}>{storyFn()}</ThemeProvider>
);

const withStoryStyles = storyFn => {
  return <Story>{storyFn()}</Story>;
};

const loadStories = () => {
  addDecorator(withKnobs);
  addDecorator(withStoryStyles);
  addDecorator(withThemeProvider);
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
