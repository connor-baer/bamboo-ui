import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import { GROUPS } from '../../../.storybook/groups';

import NProgress from '.';

storiesOf(`${GROUPS.COMPONENTS}|NProgress`, module).add('NProgress', () => (
  <NProgress delay={number('Delay', 500)} />
));
