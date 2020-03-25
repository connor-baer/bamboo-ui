import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';

import LoadingBar from '.';

export default {
  title: 'Components/LoadingBar',
  component: LoadingBar,
};

export const Base = () => (
  <LoadingBar
    isLoading={boolean('Is loading?', true)}
    startDelay={number('Start delay', 500)}
  />
);
