import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { getAll } from 'es-cookie';

import '../__mocks__/nextRouter';

import themes from '../src/styles/themes';
import injectGlobalStyles from '../src/styles/global-styles';
import Theme from '../src/components/Theme';

import Story from './Story';
import { OPTIONS } from './hierarchySeparators';

injectGlobalStyles({ theme: themes.standard() });

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

const withTheme = storyFn => (
  <Theme
    themes={themes}
    cookies={getAll()}
    assetPrefix="https://static.connorbaer.co/fonts"
  >
    {storyFn()}
  </Theme>
);

const withStoryStyles = storyFn => {
  return <Story>{storyFn()}</Story>;
};

const loadStories = () => {
  addDecorator(withKnobs);
  addDecorator(withStoryStyles);
  addDecorator(withTheme);
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
