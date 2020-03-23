import React from 'react';
import { storiesOf } from '@storybook/react';

import Links from '.';

storiesOf('Components/Navigation/Links', module).add('Links', () => (
  <Links links={[{ url: '/about', label: 'About' }]} />
));
