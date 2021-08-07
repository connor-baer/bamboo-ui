import { action } from '@storybook/addon-actions';

import { Input, InputProps } from './Input';

export default {
  title: 'Forms/Input',
  component: Input,
};

export const Base = (args: InputProps) => <Input {...args} />;

Base.args = {
  label: 'What is your name?',
  placeholder: 'Panda',
  onChange: action('Input changed'),
};
