import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import { Select } from './Select';

export default {
  title: 'Forms/Select',
  component: Select,
};

export const Base = () => (
  <Select
    label={text('Label', 'What is your name?')}
    placeholder={text('Placeholder', 'Panda')}
    onChange={action('Select changed')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    hasWarning={boolean('Has warning', false)}
    showValid={boolean('Show valid', false)}
    options={[
      { label: 'Jane', value: 'jane' },
      { label: 'John', value: 'john' },
    ]}
    validationHint={text('Validation hint', '')}
  />
);
