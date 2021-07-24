import React from 'react';

import { Align, AlignProps } from './Align';

export default {
  title: 'Layout/Align',
  component: Align,
};

export const Base = (args: AlignProps) => (
  <div style={{ width: '90vw', maxWidth: '50rem' }}>
    <p>
      Panda brown growl ursa major ursa minor bees, growl ursa minor claws coat.
      Cub brown ursa major claws, bees grizzly koala black brown bear. Bees coat
      bear claws brown, growl coat koala claws ursa minor coat.
    </p>
    <Align {...args}>
      Growl black roar black koala grizzly, brown bees growl ursa minor cub
      ursus. Roar bees roar grizzly bear panda ursus black, bear brown coat
      brown growl. Koala ursa major honey koala, bear coat bees cub bear cub
      brown roar ursus koala.
    </Align>
    <p>
      Cub claws grizzly ursa major, koala cub panda roar panda black. Ursa major
      ursa major roar growl, panda bear koala claws koala koala. Brown roar
      black honey cub ursa minor ursus ursus ursa minor.
    </p>
  </div>
);
