import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Subtitle } from './Subtitle';

export default {
  title: 'Components/Header/Header.Subtitle',
  component: Subtitle,
};

export const Base = () => (
  <Subtitle>{text('Subtitle', 'A React component library')}</Subtitle>
);
