import React from 'react';

import { Link } from '../typography/Link';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};
export const Base = (args: ButtonProps) => <Button {...args} />;

Base.args = {
  children: 'Click me',
};

const variants = ['primary', 'secondary', 'destructive'] as const;

export const Variants = (args: ButtonProps) =>
  variants.map((variant) => (
    <Button {...args} key={variant} variant={variant}>
      {variant}
    </Button>
  ));

const sizes = ['s', 'm'] as const;

export const Sizes = (args: ButtonProps) =>
  sizes.map((size) => (
    <Button {...args} key={size} size={size}>
      size {size}
    </Button>
  ));

export const AsLink = (args: ButtonProps) => (
  <Link>
    <Button {...args} />
  </Link>
);

AsLink.args = {
  children: 'Do not press',
  href: 'https://github.com/connor-baer/bamboo-ui',
  target: '_blank',
};
