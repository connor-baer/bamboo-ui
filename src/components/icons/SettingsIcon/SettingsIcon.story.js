import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, color } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/groups';

import SettingsIcon from './SettingsIcon';

storiesOf(`${GROUPS.ICONS}|SettingsIcon`, module).add('SettingsIcon', () => (
  <SettingsIcon
    width={number('Size', 48)}
    height={number('Size', 48)}
    style={{ fill: color('Fill', 'black') }}
  />
));
