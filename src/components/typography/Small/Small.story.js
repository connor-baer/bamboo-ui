import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Small from './Small';

storiesOf('Typography/Small', module).add('Small', () => (
  <>
    <Small>{text('First', '🐼 Panda')}</Small>
    <Small>{text('Second', '🐻 Grizzly')}</Small>
    <Small>{text('Third', '🐨 Koala')}</Small>
  </>
));
