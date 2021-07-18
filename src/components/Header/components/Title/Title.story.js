import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Title } from './Title';

export default {
  title: 'Components/Header/Header.Title',
  component: Title,
};

export const Base = () => (
  <Title hasSubtitle={boolean('Has subtitle?', false)}>
    {text('Title', 'Bamboo UI')}
  </Title>
);
