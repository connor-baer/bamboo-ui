import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { number } from '@storybook/addon-knobs';

import { GROUPS } from '../../../.storybook/groups';

import NProgress from '.';

storiesOf(`${GROUPS.COMPONENTS}|NProgress`, module).add(
  'NProgress',
  withInfo()(() => <NProgress delay={number('Delay', 500)} />)
);
