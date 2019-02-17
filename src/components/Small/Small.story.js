import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/groups';

import Small from './Small';

storiesOf(`${GROUPS.TYPOGRAPHY}|Small`, module).add(
  'Small',
  withInfo()(() => (
    <Fragment>
      <Small>{text('First', '🐼 Panda')}</Small>
      <Small>{text('Second', '🐻 Grizzly')}</Small>
      <Small>{text('Third', '🐨 Koala')}</Small>
    </Fragment>
  ))
);
