import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { getAll } from 'es-cookie';

import Story from './Story';

import '../__mocks__/nextRouter';

import themes from '../src/styles/themes';
import Theme from '../src/components/Theme';

// Sets the info addon's options.
setDefaults({
  header: false
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
  addParameters({
    options: {
      name: '🎋 Bamboo UI',
      url: 'https://github.com/connor-baer/bamboo-ui'
    }
  });
  addDecorator(withKnobs);
  addDecorator(withStoryStyles);
  addDecorator(centered);
  addDecorator(withTheme);
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
