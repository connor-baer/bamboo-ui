import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { Hamburger } from './Hamburger';

export default {
  title: 'Components/Hamburger',
  component: Hamburger,
};

export const Base = () => {
  const [active, setActive] = useState(false);
  return (
    <Hamburger
      isActive={active}
      onClick={(e) => {
        action('Hamburger clicked')(e);
        setActive((prev) => !prev);
      }}
      labelActive={text('Label active', 'Close menu')}
      labelInActive={text('Label inactive', 'Open menu')}
    />
  );
};
