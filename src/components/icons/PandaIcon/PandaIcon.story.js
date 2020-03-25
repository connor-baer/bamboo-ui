import React from 'react';
import { text } from '@storybook/addon-knobs';

import PandaIcon from './PandaIcon';

export default {
  title: 'Icons/PandaIcon',
  component: PandaIcon,
};

export const Base = () => <PandaIcon alt={text('Alt text', 'A panda emoji')} />;
