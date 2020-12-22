import React from 'react';

import { Links } from '.';

export default {
  title: 'Components/Navigation/Links',
  component: Links,
};

export const Base = () => <Links links={[{ url: '/about', label: 'About' }]} />;
