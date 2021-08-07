import { action } from '@storybook/addon-actions';

import { AutocompleteInput, AutocompleteInputProps } from './AutocompleteInput';
import {
  AutocompleteMultiSelect,
  AutocompleteMultiSelectProps,
} from './AutocompleteMultiSelect';

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

export const Input = (args: AutocompleteInputProps) => (
  <AutocompleteInput {...args} />
);

Input.args = {
  label: 'What is your favourite fruit?',
  placeholder: 'Mango',
  items,
  onChange: action('Changed selected item'),
};

export const MultiSelect = (args: AutocompleteMultiSelectProps) => (
  <AutocompleteMultiSelect {...args} />
);

MultiSelect.args = {
  label: 'Select your favourite fruits',
  placeholder: 'Type...',
  items,
  onChange: action('Changed selected items'),
  onInputValueChange: action('Changed input value'),
};
