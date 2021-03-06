import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import { ParallaxImage } from '.';

export default {
  title: 'Images/ParallaxImage',
  component: ParallaxImage,
};

export const Base = () => (
  <div style={{ width: '100vw' }}>
    <ParallaxImage
      src={'https://source.unsplash.com/600x400/'}
      srcSet={[
        'https://source.unsplash.com/600x400/ 600w',
        'https://source.unsplash.com/1200x800/ 1200w',
      ].join(', ')}
      alt={text('Alt text', 'A random image')}
      speed={number('Speed', 75)}
    />
  </div>
);
