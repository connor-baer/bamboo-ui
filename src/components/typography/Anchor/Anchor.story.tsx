import React from 'react';
import { action } from '@storybook/addon-actions';

import { Anchor, AnchorProps } from './Anchor';

export default {
  title: 'Typography/Anchor',
  component: Anchor,
};

export const Base = (args: AnchorProps) => <Anchor {...args} />;

Base.args = {
  href: 'https://github.com/connor-baer/bamboo-ui',
  target: '_blank',
  children: 'Bamboo UI',
};

export const AsButton = (args: AnchorProps) => <Anchor {...args} />;

AsButton.args = {
  onClick: action('Clicked'),
  children: 'Bamboo UI',
};

export const NoAction = (args: AnchorProps) => <Anchor {...args} />;

NoAction.args = {
  children: 'Panda',
};
