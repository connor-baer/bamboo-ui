import React from 'react';

import { Anchor } from '../typography/Anchor';

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
  siteTwitter: 'connor-baer',
  children: (
    <Anchor href="https://bamboo.madebyconnor.co/disclaimer">Disclaimer</Anchor>
  ),
};
