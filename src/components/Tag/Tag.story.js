import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Base = () => (
  <Tag onClose={action('Tag closed')} disabled={boolean('Disabled', false)}>
    {text('Label', 'You are it!')}
  </Tag>
);
