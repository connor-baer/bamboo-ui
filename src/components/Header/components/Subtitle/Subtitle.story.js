import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../../.storybook/groups';

import Subtitle from './Subtitle';

storiesOf(`${GROUPS.COMPONENTS}|Header`, module).add('Header.Subtitle', () => (
  <Subtitle>{text('Subtitle', 'A React component libary')}</Subtitle>
));
