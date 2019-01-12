import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, number, color } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/hierarchySeparators';

import MotionIcon from './MotionIcon';

storiesOf(`${GROUPS.ICONS}|MotionIcon`, module).add(
  'MotionIcon',
  withInfo()(() => (
    <MotionIcon
      full={boolean('Full', false)}
      width={number('Size', 48)}
      height={number('Size', 48)}
      style={{ fill: color('Fill', 'black') }}
    />
  ))
);
