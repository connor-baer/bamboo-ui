import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { withContexts } from '@storybook/addon-contexts/react';
import centered from '@storybook/addon-centered/react';
import { getAll } from 'es-cookie';

// import { contexts } from './configs/contexts';
import Story from './Story';

import '../__mocks__/nextRouter';

import themes from '../src/styles/themes';
import Theme from '../src/components/Theme';

// Sets the info addon's options.
setDefaults({
  header: false
});

setOptions({
  brandName: 'Bamboo UI',
  brandUrl: 'https://github.com/connor-baer/bamboo-ui'
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
  addDecorator(centered);
  addDecorator(withTheme);
  // addDecorator(withContexts(contexts));
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
