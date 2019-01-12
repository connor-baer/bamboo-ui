import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/hierarchySeparators';

import Intro from './Intro';

storiesOf(`${GROUPS.TYPOGRAPHY}|Intro`, module).add(
  'Intro',
  withInfo()(() => (
    <div style={{ width: '50vw' }}>
      <Intro>
        {text(
          'Intro',
          'Bamboos include some of the fastest-growing plants in the world, due to a unique rhizome-dependent system. Certain species of bamboo can grow 91 cm (36 in) within a 24-hour period, at a rate of almost 4 cm (1.6 in) an hour.'
        )}
      </Intro>
    </div>
  ))
);
