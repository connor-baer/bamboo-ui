import React from 'react';

import { LoadingIcon, LoadingIconProps } from './LoadingIcon';

export default {
  title: 'Icons/LoadingIcon',
  component: LoadingIcon,
};

export const Base = (args: LoadingIconProps) => <LoadingIcon {...args} />;
