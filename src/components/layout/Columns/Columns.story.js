import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Text } from '@sumup/circuit-ui';

import { GROUPS } from '../../../../.storybook/groups';

import Columns from './Columns';

storiesOf(`${GROUPS.LAYOUT}|Columns`, module).add(
  'Columns',
  withInfo()(() => (
    <div style={{ width: '80vw' }}>
      <Columns>
        <Text>
          Growl black roar black koala grizzly, brown bees growl ursa minor cub
          ursus. Roar bees roar grizzly bear panda ursus black, bear brown coat
          brown growl. Koala ursa major honey koala, bear coat bees cub bear cub
          brown roar ursus koala.
        </Text>
        <Text>
          Panda brown growl ursa major ursa minor bees, growl ursa minor claws
          coat. Cub brown ursa major claws, bees grizzly koala black brown bear.
          Bees coat bear claws brown, growl coat koala claws ursa minor coat.
        </Text>
        <Text>
          Cub claws grizzly ursa major, koala cub panda roar panda black. Ursa
          major ursa major roar growl, panda bear koala claws koala koala. Brown
          roar black honey cub ursa minor ursus ursus ursa minor.
        </Text>
        <Text>
          Ursa minor roar ursa minor panda honey honey growl koala coat. Roar
          koala bear, ursa major brown honey coat ursa minor brown brown koala
          honey grizzly ursa minor. Cub growl cub growl ursus brown ursus bear
          ursus.
        </Text>
      </Columns>
    </div>
  ))
);
