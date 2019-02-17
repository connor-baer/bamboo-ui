import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, select } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/groups';

import Anchor from './Anchor';

storiesOf(`${GROUPS.TYPOGRAPHY}|Anchor`, module)
  .add(
    'Anchor',
    withInfo()(() => (
      <Anchor
        href={text('Link', 'https://github.com/connor-baer/bamboo-ui')}
        id={text('Id', 'bamboo-ui')}
        target={select('Target', ['_blank', '_self'])}
        title={text('Title', 'Bamboo UI')}
      >
        {text('Label', '🎋 Bamboo UI')}
      </Anchor>
    ))
  )
  .add(
    'Anchor without link',
    withInfo()(() => (
      <Anchor
        id={text('Id', 'panda')}
        target={select('Target', ['_blank', '_self'])}
        title={text('Title', 'Panda')}
      >
        {text('Label', '🐼 Panda')}
      </Anchor>
    ))
  );
