import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/hierarchySeparators';

import Anchor from '../Anchor';
import Navigation from '.';

storiesOf(`${GROUPS.COMPONENTS}|Navigation`, module).add(
  'Navigation',
  withInfo()(() => (
    <Navigation
      siteName={text('Site name', 'Bamboo UI')}
      siteUrl={text('Site URL', 'https://bamboo.madebyconnor.co')}
      links={[{ url: '/about', label: 'About' }]}
    >
      <Anchor href="https://bamboo.madebyconnor.co/disclaimer">Disclaimer</Anchor>
    </Navigation>
  ))
);
