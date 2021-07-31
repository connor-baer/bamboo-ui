import React from 'react';

import { RatioImage, RatioImageProps } from './RatioImage';

export default {
  title: 'Images/RatioImage',
  component: RatioImage,
};

export const Base = (args: RatioImageProps) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    <RatioImage {...args} />
  </div>
);

Base.args = {
  src: 'https://source.unsplash.com/600x400/',
  srcSet: [
    'https://source.unsplash.com/600x400/ 600w',
    'https://source.unsplash.com/1200x800/ 1200w',
  ].join(', '),
  sizes: '50vw',
  alt: 'A random image',
  aspectRatio: 3 / 2,
};
