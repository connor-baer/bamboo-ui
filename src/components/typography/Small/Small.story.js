import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import Small from './Small';

export default {
  title: 'Typography/Small',
  component: Small,
};

export const Base = () => (
  <>
    <Small>{text('First', '🐼 Panda')}</Small>
    <Small>{text('Second', '🐻 Grizzly')}</Small>
    <Small>{text('Third', '🐨 Koala')}</Small>
  </>
);
