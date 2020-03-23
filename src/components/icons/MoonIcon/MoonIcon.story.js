import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, color } from '@storybook/addon-knobs';

import MoonIcon from './MoonIcon';

storiesOf('Icons/MoonIcon', module).add('MoonIcon', () => (
  <MoonIcon
    full={boolean('Full', false)}
    width={number('Size', 48)}
    height={number('Size', 48)}
    style={{ fill: color('Fill', 'black') }}
  />
));
