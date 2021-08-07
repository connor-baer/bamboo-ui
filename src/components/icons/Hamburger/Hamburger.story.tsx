import { useState } from 'react';

import { Hamburger, HamburgerProps } from './Hamburger';

export default {
  title: 'Components/Hamburger',
  component: Hamburger,
};

export const Base = (args: HamburgerProps) => {
  const [active, setActive] = useState(args.isActive);
  return (
    <Hamburger
      {...args}
      isActive={active}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    />
  );
};

Base.args = {
  labelActive: 'Close menu',
  labelInActive: 'Open menu',
};
