import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import { Textarea } from './Textarea';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
};

export const Base = () => (
  <Textarea
    label={text('Label', 'What is your name?')}
    placeholder={text('Placeholder', 'Panda')}
    onChange={action('Textarea changed')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    hasWarning={boolean('Has warning', false)}
    showValid={boolean('Show valid', false)}
  />
);
