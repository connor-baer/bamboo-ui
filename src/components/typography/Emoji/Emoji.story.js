import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Emoji } from './Emoji';

export default {
  title: 'Typography/Emoji',
  component: Emoji,
};

export const Base = () => (
  <Emoji label={text('Label', 'Bamboo')}>{text('Emoji', '🎋')}</Emoji>
);
