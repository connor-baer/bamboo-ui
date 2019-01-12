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
      siteUrl={text('Site URL', 'https://bamboo.connor.li')}
      links={[{ url: '/about', label: 'About' }]}
    >
      <Anchor href="https://bamboo.connor.li/disclaimer">Disclaimer</Anchor>
    </Navigation>
  ))
);
