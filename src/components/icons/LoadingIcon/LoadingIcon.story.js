import React from 'react';
import { storiesOf } from '@storybook/react';

import { GROUPS } from '../../../../.storybook/groups';

import LoadingIcon from './LoadingIcon';

storiesOf(`${GROUPS.ICONS}|LoadingIcon`, module).add('LoadingIcon', () => (
  <LoadingIcon />
));
