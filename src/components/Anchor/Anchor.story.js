import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, select } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/hierarchySeparators';

import Anchor from './Anchor';

storiesOf(`${GROUPS.TYPOGRAPHY}|Anchor`, module)
  .add(
    'Anchor',
    withInfo()(() => (
      <Anchor
        href={text('Link', 'https://bamboo.connor.li')}
        id={text('Id', 'red-panda')}
        target={select('Target', ['_blank', '_self'])}
        title={text('Title', 'Red panda')}
      >
        {text('Label', 'Red panda')}
      </Anchor>
    ))
  )
  .add(
    'Anchor without link',
    withInfo()(() => (
      <Anchor
        id={text('Id', 'no-panda')}
        target={select('Target', ['_blank', '_self'])}
        title={text('Title', 'No panda')}
      >
        {text('Label', 'No panda')}
      </Anchor>
    ))
  );
