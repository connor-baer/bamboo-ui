import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { GROUPS } from '../../../../.storybook/hierarchySeparators';

import LoadingIcon from './LoadingIcon';

storiesOf(`${GROUPS.ICONS}|LoadingIcon`, module).add(
  'LoadingIcon',
  withInfo()(() => <LoadingIcon />)
);
