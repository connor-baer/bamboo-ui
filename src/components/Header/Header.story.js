import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/groups';

import Header from './Header';
import Small from '../Small';

storiesOf(`${GROUPS.COMPONENTS}|Header`, module).add('Header', () => (
  <Header
    title={text('Title', 'Bamboo UI')}
    subtitle={text('Subtitle', 'A React component libary')}
  >
    <div>
      <Small>{text('Children', 'Made by Connor')}</Small>
    </div>
  </Header>
));
