import React from 'react';
import { text } from '@storybook/addon-knobs';
import { css } from '@emotion/core';

import { Intro } from './Intro';

export default {
  title: 'Typography/Intro',
  component: Intro,
};

export const Base = () => (
  <div
    css={css`
      width: 90vw;
      max-width: 40rem;
    `}
  >
    <Intro>
      {text(
        'Intro',
        'Bamboos include some of the fastest-growing plants in the world, due to a unique rhizome-dependent system. Certain species of bamboo can grow 91 cm (36 in) within a 24-hour period, at a rate of almost 4 cm (1.6 in) an hour.',
      )}
    </Intro>
  </div>
);
