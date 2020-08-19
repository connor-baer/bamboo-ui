import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs/react';

import { Button } from './Button';

const variants = [Button.PRIMARY, Button.SECONDARY, Button.DESTRUCTIVE];

export default {
  title: 'Components/Button',
  component: Button,
};

export const Base = () => (
  <Button
    variant={select('Variant', variants, variants[0])}
    disabled={boolean('Disabled', false)}
    onClick={action('Button clicked')}
  >
    {text('Label', 'Click me')}
  </Button>
);

export const AsLink = () => (
  <Button
    variant={select('Variant', variants, variants[0])}
    disabled={boolean('Disabled', false)}
    href={text('Link', 'https://github.com/connor-baer/bamboo-ui')}
  >
    {text('Label', 'Do not press')}
  </Button>
);
