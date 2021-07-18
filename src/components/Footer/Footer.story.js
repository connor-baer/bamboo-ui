import React from 'react';
import { css } from '@emotion/core';
import { text } from '@storybook/addon-knobs';

import { Anchor } from '../typography/Anchor';

import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

export const Base = () => (
  <div
    css={css`
      width: 100vw;
    `}
  >
    <Footer
      siteName={text('Site name', 'Bamboo UI')}
      siteTwitter={text('Site twitter', 'connor-baer')}
    >
      <Anchor href="https://bamboo.madebyconnor.co/disclaimer">
        Disclaimer
      </Anchor>
    </Footer>
  </div>
);
