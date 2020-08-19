import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { AutocompleteInput } from './AutocompleteInput';
import { AutocompleteMultiSelect } from './AutocompleteMultiSelect';

export default {
  title: 'Forms/Autocomplete',
  component: AutocompleteInput,
  subcomponents: { AutocompleteMultiSelect },
};

const items = [
  'Apple',
  'Banana',
  'Kiwi',
  'Mango',
  'Pineapple',
  'Strawberry',
  'Tomato',
  'Watermelon',
];

export const Input = () => (
  <AutocompleteInput
    label={text('Label', 'What is your favourite fruit?')}
    placeholder={text('Placeholder', 'Mango')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    hasWarning={boolean('Has warning', false)}
    showValid={boolean('Show valid', false)}
    items={items}
    initialSelectedItems={['Apple']}
    onChange={action('Changed selected item')}
  />
);

export const MultiSelect = () => (
  <AutocompleteMultiSelect
    label={text('Label', 'Select your favourite fruits')}
    placeholder={text('Placeholder', 'Type...')}
    disabled={boolean('Disabled', false)}
    invalid={boolean('Invalid', false)}
    hasWarning={boolean('Has warning', false)}
    showValid={boolean('Show valid', false)}
    items={items}
    initialSelectedItems={['Apple']}
    onChange={action('Changed selected items')}
    onInputValueChange={action('Changed input value')}
  />
);
