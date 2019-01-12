import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/hierarchySeparators';

import Anchor from '../Anchor';
import Footer from './Footer';

storiesOf(`${GROUPS.COMPONENTS}|Footer`, module).add(
  'Footer',
  withInfo()(() => (
    <Footer
      siteName={text('Site name', 'Bamboo UI')}
      siteTwitter={text('Site twitter', 'connor-baer')}
    >
      <Anchor href="https://bamboo.madebyconnor.co/disclaimer">Disclaimer</Anchor>
    </Footer>
  ))
);
