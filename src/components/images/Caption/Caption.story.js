import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import { Caption } from './Caption';

export default {
  title: 'Images/Caption',
  component: Caption,
};

export const Base = () => (
  <Caption>{text('Caption', 'Where is my beautiful image?')}</Caption>
);
