import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Base = () => (
  <Tag onRemove={action('Tag removed')} disabled={boolean('Disabled', false)}>
    {text('Label', 'You are it!')}
  </Tag>
);
