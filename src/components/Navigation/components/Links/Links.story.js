import React from 'react';
import { storiesOf } from '@storybook/react';

import { GROUPS } from '../../../../../.storybook/groups';
import Links from '.';

storiesOf(`${GROUPS.COMPONENTS}|Navigation/Links`, module).add('Links', () => (
  <Links links={[{ url: '/about', label: 'About' }]} />
));
