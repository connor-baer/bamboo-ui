import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/groups';

import Small from './Small';

storiesOf(`${GROUPS.TYPOGRAPHY}|Small`, module).add('Small', () => (
  <>
    <Small>{text('First', '🐼 Panda')}</Small>
    <Small>{text('Second', '🐻 Grizzly')}</Small>
    <Small>{text('Third', '🐨 Koala')}</Small>
  </>
));
