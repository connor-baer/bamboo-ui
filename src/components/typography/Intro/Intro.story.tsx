import React from 'react';

import { Intro, IntroProps } from './Intro';

export default {
  title: 'Typography/Intro',
  component: Intro,
};

export const Base = (args: IntroProps) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    <Intro {...args} />
  </div>
);

Base.args = {
  children:
    'Bamboos include some of the fastest-growing plants in the world, due to a unique rhizome-dependent system. Certain species of bamboo can grow 91 cm (36 in) within a 24-hour period, at a rate of almost 4 cm (1.6 in) an hour.',
};
