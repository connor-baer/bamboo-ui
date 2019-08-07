import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';

import { GROUPS } from '../../../.storybook/groups';

import LoadingBar from '.';

storiesOf(`${GROUPS.COMPONENTS}|LoadingBar`, module).add('LoadingBar', () => (
  <LoadingBar
    isLoading={boolean('Is loading?', true)}
    startDelay={number('Start delay', 500)}
  />
));
