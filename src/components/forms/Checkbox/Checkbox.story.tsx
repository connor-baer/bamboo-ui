import { action } from '@storybook/addon-actions';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
};

export const Base = (args: CheckboxProps) => <Checkbox {...args} />;

Base.args = {
  onChange: action('Checkbox clicked'),
  disabled: false,
  invalid: false,
  children: 'Check me, mate',
};
