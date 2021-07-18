import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { Input } from './Input';

export default {
  title: 'Forms/Input',
  component: Input,
};

export const Base = () => (
  <Input
    label={text('Label', 'What is your name?')}
    placeholder={text('Placeholder', 'Panda')}
    onChange={action('Input changed')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    hasWarning={boolean('Has warning', false)}
    showValid={boolean('Show valid', false)}
    validationHint={text('Validation hint', '')}
  />
);
