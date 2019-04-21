import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, color } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/groups';

import MotionIcon from './MotionIcon';

storiesOf(`${GROUPS.ICONS}|MotionIcon`, module).add('MotionIcon', () => (
  <MotionIcon
    full={boolean('Full', false)}
    width={number('Size', 48)}
    height={number('Size', 48)}
    style={{ fill: color('Fill', 'black') }}
  />
));
