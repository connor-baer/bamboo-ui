import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../.storybook/groups';

import Caption from './Caption';

storiesOf(`${GROUPS.IMAGES}|Caption`, module).add('Caption', () => (
  <Caption>{text('Caption', 'Where is my beautiful image?')}</Caption>
));
