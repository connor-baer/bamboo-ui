import React from 'react';

import { Label, LabelProps } from './Label';

export default {
  title: 'Forms/Label',
  component: Label,
};

export const Base = (args: LabelProps) => <Label {...args} />;

Base.args = {
  label: 'What is your name?',
  disabled: false,
  invalid: false,
  hasWarning: false,
  showValid: false,
};
