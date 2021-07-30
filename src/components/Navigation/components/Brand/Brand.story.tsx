import React from 'react';

import { Brand, BrandProps } from './Brand';

export default {
  title: 'Components/Navigation/Brand',
  component: Brand,
};

export const Base = (args: BrandProps) => <Brand {...args} />;

Base.args = {
  siteName: 'Bamboo UI',
  siteLogo: '🎋',
};
