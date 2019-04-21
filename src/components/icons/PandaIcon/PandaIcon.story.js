import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/groups';

import PandaIcon from './PandaIcon';

storiesOf(`${GROUPS.ICONS}|PandaIcon`, module).add('PandaIcon', () => (
  <PandaIcon alt={text('Alt text', 'A panda emoji')} />
));
