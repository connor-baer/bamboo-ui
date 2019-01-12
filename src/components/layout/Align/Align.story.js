import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/hierarchySeparators';

import Align from './Align';

storiesOf(`${GROUPS.LAYOUT}|Align`, module).add(
  'Align',
  withInfo()(() => (
    <div style={{ width: '50vw' }}>
      <Align
        align={select('Alignment', [
          Align.CENTER,
          Align.FULL,
          Align.RIGHT,
          Align.LEFT
        ])}
      >
        Growl black roar black koala grizzly, brown bees growl ursa minor cub
        ursus. Roar bees roar grizzly bear panda ursus black, bear brown coat
        brown growl. Koala ursa major honey koala, bear coat bees cub bear cub
        brown roar ursus koala.
      </Align>
    </div>
  ))
);
