import { action } from '@storybook/addon-actions';

import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
};

export const Base = (args: TextareaProps) => <Textarea {...args} />;

Base.args = {
  label: 'What is your name?',
  placeholder: 'Panda',
  onChange: action('Textarea changed'),
};
