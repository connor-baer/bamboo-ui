import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/groups';
import Button from './Button';

const variants = [Button.PRIMARY, Button.SECONDARY, Button.DESTRUCTIVE];

storiesOf(`${GROUPS.COMPONENTS}|Button`, module)
  .add('Button', () => (
    <Button
      variant={select('Variant', variants, variants[0])}
      disabled={boolean('Disabled', false)}
      onClick={action('Button clicked')}
    >
      {text('Label', 'Click me')}
    </Button>
  ))
  .add('Button Link', () => (
    <Button
      variant={select('Variant', variants, variants[0])}
      disabled={boolean('Disabled', false)}
      href={text('Link', 'https://github.com/connor-baer/bamboo-ui')}
    >
      {text('Label', 'Do not press')}
    </Button>
  ));
