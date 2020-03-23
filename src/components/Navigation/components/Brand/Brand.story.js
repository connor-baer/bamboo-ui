import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Brand from '.';

storiesOf('Components/Navigation/Brand', module).add('Brand', () => (
  <Brand
    siteName={text('Site name', 'Bamboo UI')}
    siteLogo={text('Site logo', '🎋')}
  />
));
