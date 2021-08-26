import { useState } from 'react';
import { Bell, BellOff } from 'react-feather';

import { ButtonToggle, ButtonToggleProps } from './ButtonToggle';

export default {
  title: 'Components/ButtonToggle',
  component: ButtonToggle,
};
export const Base = (args: ButtonToggleProps) => {
  const [active, setActive] = useState(args.active);
  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return <ButtonToggle {...args} active={active} onClick={handleClick} />;
};

Base.args = {
  children: 'Click me',
};

const sizes = ['s', 'm'] as const;

export const Sizes = (args: ButtonToggleProps) => {
  const [active, setActive] = useState(args.active);
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return sizes.map((size) => (
    <ButtonToggle
      {...args}
      key={size}
      size={size}
      active={active}
      onClick={handleClick}
    >
      size {size}
    </ButtonToggle>
  ));
};

export const WithIcon = (args: ButtonToggleProps) => {
  const [active, setActive] = useState(args.active);
  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <ButtonToggle
      {...args}
      active={active}
      onClick={handleClick}
      icon={active ? Bell : BellOff}
    >
      {active ? 'Turn notifications off' : 'Turn notifications on'}
    </ButtonToggle>
  );
};

WithIcon.args = {
  iconOnly: true,
};
