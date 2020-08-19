import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Story from './Story';

import { standard } from '../src/styles/theme';
import { Theme } from '../src/components/Theme';

const withTheme = (storyFn) => <Theme theme={standard}>{storyFn()}</Theme>;

const withStoryStyles = (storyFn) => {
  return <Story>{storyFn()}</Story>;
};

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator(withKnobs);
addDecorator(withStoryStyles);
addDecorator(withTheme);
