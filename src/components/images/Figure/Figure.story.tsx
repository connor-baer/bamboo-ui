import React from 'react';

import { Figure, FigureProps } from './Figure';

export default {
  title: 'Images/Figure',
  component: Figure,
};

export const Base = (args: FigureProps) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    <Figure {...args} />
  </div>
);

Base.args = {
  src: 'https://source.unsplash.com/600x400/',
  srcSet: [
    'https://source.unsplash.com/600x400/ 600w',
    'https://source.unsplash.com/1200x800/ 1200w',
  ].join(', '),
  alt: 'A random photo from Unsplash',
  caption: 'This is just a random photo from Unsplash',
  aspectRatio: 3 / 2,
};
