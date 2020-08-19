import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Align } from './Align';

export default {
  title: 'Layout/Align',
  component: Align,
};

export const Base = () => (
  <div style={{ width: '50vw' }}>
    <Align
      align={select('Alignment', [
        Align.CENTER,
        Align.FULL,
        Align.RIGHT,
        Align.LEFT,
      ])}
    >
      Growl black roar black koala grizzly, brown bees growl ursa minor cub
      ursus. Roar bees roar grizzly bear panda ursus black, bear brown coat
      brown growl. Koala ursa major honey koala, bear coat bees cub bear cub
      brown roar ursus koala.
    </Align>
  </div>
);
