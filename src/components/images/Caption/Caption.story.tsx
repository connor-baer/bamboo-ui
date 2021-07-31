import React from 'react';

import { Caption, CaptionProps } from './Caption';

export default {
  title: 'Images/Caption',
  component: Caption,
};

export const Base = (args: CaptionProps) => <Caption {...args} />;

Base.args = {
  children: 'Where is my beautiful image?',
};
