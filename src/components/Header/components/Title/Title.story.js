import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../../.storybook/groups';

import Title from './Title';

storiesOf(`${GROUPS.COMPONENTS}|Header`, module).add('Header.Title', () => (
  <Title hasSubtitle={boolean('Has subtitle?', false)}>
    {text('Title', 'Bamboo UI')}
  </Title>
));
