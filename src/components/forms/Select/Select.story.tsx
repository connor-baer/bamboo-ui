import { action } from '@storybook/addon-actions';

import { Select, SelectProps } from './Select';

export default {
  title: 'Forms/Select',
  component: Select,
};

export const Base = (args: SelectProps) => <Select {...args} />;

Base.args = {
  label: 'What is your name?',
  placeholder: 'Panda',
  onChange: action('Select changed'),
  options: [
    { label: 'Jane', value: 'jane' },
    { label: 'John', value: 'john' },
  ],
};
