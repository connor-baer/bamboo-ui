import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/hierarchySeparators';

import PandaIcon from './PandaIcon';

storiesOf(`${GROUPS.ICONS}|PandaIcon`, module).add(
  'PandaIcon',
  withInfo()(() => <PandaIcon alt={text('Alt text', 'A panda emoji')} />)
);
