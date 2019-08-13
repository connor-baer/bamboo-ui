import React from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/groups';

import Anchor from '../typography/Anchor';
import Footer from './Footer';

storiesOf(`${GROUPS.COMPONENTS}|Footer`, module).add('Footer', () => (
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
));
