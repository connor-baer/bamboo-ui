import React from 'react';

import { Footer, FooterProps } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Base = (args: FooterProps) => <Footer {...args} />;

Base.args = {
  siteName: 'Bamboo UI',
  links: [
    { label: '@connor-baer', href: 'https://twitter.com/connor-baer' },
    { label: 'Disclaimer', href: 'https://bamboo.madebyconnor.co/disclaimer' },
  ],
};
