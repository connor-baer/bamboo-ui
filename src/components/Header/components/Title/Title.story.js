import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../../.storybook/groups';

import Title from './Title';

storiesOf(`${GROUPS.COMPONENTS}|Header`, module).add('Header.Title', () => (
  <Title>{text('Title', 'Bamboo UI')}</Title>
));
