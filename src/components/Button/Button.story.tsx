import { Search } from 'react-feather';

import { Link } from '../typography/Link';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const variants = ['primary', 'secondary'] as const;

export const Base = (args: ButtonProps) =>
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

export const Destructive = (args: ButtonProps) =>
  variants.map((variant) => (
    <Button {...args} key={variant} variant={variant} destructive>
      {variant}
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

export const IconOnly = (args: ButtonProps) => <Button {...args} />;

IconOnly.args = {
  children: 'Search',
  icon: Search,
  variant: 'secondary',
  iconOnly: true,
};
