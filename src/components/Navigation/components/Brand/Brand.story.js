import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import Brand from '.';

export default {
  title: 'Components/Navigation/Brand',
  component: Brand,
};

export const Base = () => (
  <Brand
    siteName={text('Site name', 'Bamboo UI')}
    siteLogo={text('Site logo', '🎋')}
  />
);
