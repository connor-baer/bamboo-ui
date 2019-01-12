import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../.storybook/hierarchySeparators';

import Caption from './Caption';

storiesOf(`${GROUPS.IMAGES}|Caption`, module).add(
  'Caption',
  withInfo()(() => (
    <Caption>{text('Caption', 'Where is my beautiful image?')}</Caption>
  ))
);
