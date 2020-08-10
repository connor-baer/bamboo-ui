import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';

import { Label } from './Label';

export default {
  title: 'Forms/Label',
  component: Label,
};

export const Base = () => (
  <Label
    label={text('Label', 'What is your name?')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    hasWarning={boolean('Has warning', false)}
    showValid={boolean('Show valid', false)}
  />
);
