import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import * as knobs from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../../.storybook/hierarchySeparators';
import Links from '.';

storiesOf(`${GROUPS.COMPONENTS}|Navigation/Links`, module).add(
  'Links',
  withInfo()(() => <Links links={[{ url: '/about', label: 'About' }]} />)
);
