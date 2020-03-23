import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import PandaIcon from './PandaIcon';

storiesOf('Icons/PandaIcon', module).add('PandaIcon', () => (
  <PandaIcon alt={text('Alt text', 'A panda emoji')} />
));
