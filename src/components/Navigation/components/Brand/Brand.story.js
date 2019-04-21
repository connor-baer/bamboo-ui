import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../../.storybook/groups';
import Brand from '.';

storiesOf(`${GROUPS.COMPONENTS}|Navigation/Brand`, module).add('Brand', () => (
  <Brand
    siteName={text('Site name', 'Bamboo UI')}
    siteLogo={text('Site logo', '🎋')}
  />
));
