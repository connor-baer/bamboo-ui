import React from 'react';

import { Links, LinksProps } from './Links';

export default {
  title: 'Components/Navigation/Links',
  component: Links,
};

export const Base = (args: LinksProps) => <Links {...args} />;

Base.args = {
  links: [{ href: '/about', children: 'About' }],
};
