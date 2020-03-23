import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import Story from './Story';

import themes from '../src/styles/themes';
import Theme from '../src/components/Theme';

const withTheme = storyFn => <Theme themes={themes}>{storyFn()}</Theme>;

const withStoryStyles = storyFn => {
  return <Story>{storyFn()}</Story>;
};

addParameters({
  options: {
    showRoots: true
  }
});

addDecorator(withKnobs);
addDecorator(withStoryStyles);
addDecorator(centered);
addDecorator(withTheme);
