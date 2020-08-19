import React from 'react';
import { boolean, number, color } from '@storybook/addon-knobs';

import { MoonIcon } from './MoonIcon';

export default {
  title: 'Icons/MoonIcon',
  component: MoonIcon,
};

export const Base = () => (
  <MoonIcon
    full={boolean('Full', false)}
    width={number('Size', 48)}
    height={number('Size', 48)}
    style={{ fill: color('Fill', 'black') }}
  />
);
