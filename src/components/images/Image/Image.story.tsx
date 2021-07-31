import React from 'react';

import { Image, ImageProps } from './Image';

export default {
  title: 'Images/Image',
  component: Image,
};

export const Base = (args: ImageProps) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    <Image {...args} />
  </div>
);

Base.args = {
  src: 'https://source.unsplash.com/600x400/',
  srcSet: [
    'https://source.unsplash.com/600x400/ 600w',
    'https://source.unsplash.com/1200x800/ 1200w',
  ].join(', '),
  alt: 'A random image',
};
