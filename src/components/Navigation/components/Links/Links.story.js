import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { GROUPS } from '../../../../../.storybook/groups';
import Links from '.';

storiesOf(`${GROUPS.COMPONENTS}|Navigation/Links`, module).add(
  'Links',
  withInfo()(() => <Links links={[{ url: '/about', label: 'About' }]} />)
);
