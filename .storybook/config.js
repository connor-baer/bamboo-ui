import React from 'react';
import { RouterContext } from 'next-server/dist/lib/router-context';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { getAll } from 'es-cookie';

import Story from './Story';
import storybookTheme from './theme';

import '../__mocks__/nextRouter';

import themes from '../src/styles/themes';
import Theme from '../src/components/Theme';

const stories = require.context('../src/components', true, /\.story\.js$/);
const docs = require.context('../src/docs', true, /\.story\.js$/);

const router = { pathname: '/', route: '/', query: {}, asPath: '/' };

const withRouter = storyFn => (
  <RouterContext.Provider value={router}>{storyFn()}</RouterContext.Provider>
);

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
  addParameters({ options: { theme: storybookTheme } });
  addDecorator(withKnobs);
  addDecorator(withStoryStyles);
  addDecorator(centered);
  addDecorator(withRouter);
  addDecorator(withTheme);
  stories.keys().forEach(filename => stories(filename));
  docs.keys().forEach(filename => docs(filename));
};

configure(loadStories, module);
