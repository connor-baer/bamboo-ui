import React from 'react';
import { action } from '@storybook/addon-actions';

import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Base = (args: TagProps) => <Tag {...args} />;

Base.args = {
  children: 'You are it!',
};

export const Clickable = (args: TagProps) => <Tag {...args} />;

Clickable.args = {
  children: 'I am interactive',
  onClick: action('Tag clicked'),
};

export const Removable = (args: TagProps) => <Tag {...args} />;

Removable.args = {
  children: 'I am impermanent',
  onRemove: action('Tag removed'),
};
