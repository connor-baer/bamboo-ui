import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { Checkbox } from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
};

export const Base = () => (
  <Checkbox
    onChange={action('Checkbox clicked')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
  >
    {text('Label', 'Check me, mate')}
  </Checkbox>
);
