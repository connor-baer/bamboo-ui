import { action } from '@storybook/addon-actions';
import { useState } from 'react';

import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Base = (args: TagProps) => <Tag {...args} />;

Base.args = {
  children: 'You are it!',
};

export const Clickable = (args: TagProps) => {
  const [active, setActive] = useState(args.active);

  const onClick = () => {
    setActive((prev) => !prev);
  };

  // @ts-expect-error FIXME: Need to improve the Tag's conditional props.
  return <Tag {...args} active={active} onClick={onClick} />;
};

Clickable.args = {
  children: 'I am interactive',
  onClick: action('Tag clicked'),
};

export const Removable = (args: TagProps) => <Tag {...args} />;

Removable.args = {
  children: 'I am impermanent',
  onRemove: action('Tag removed'),
};
