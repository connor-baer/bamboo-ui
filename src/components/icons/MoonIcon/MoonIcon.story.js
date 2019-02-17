import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, number, color } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/groups';

import MoonIcon from './MoonIcon';

storiesOf(`${GROUPS.ICONS}|MoonIcon`, module).add(
  'MoonIcon',
  withInfo()(() => (
    <MoonIcon
      full={boolean('Full', false)}
      width={number('Size', 48)}
      height={number('Size', 48)}
      style={{ fill: color('Fill', 'black') }}
    />
  ))
);
