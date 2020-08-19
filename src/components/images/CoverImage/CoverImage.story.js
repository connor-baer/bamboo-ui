import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import { CoverImage } from './CoverImage';

export default {
  title: 'Images/CoverImage',
  component: CoverImage,
};

export const Base = () => (
  <div style={{ width: '50vw' }}>
    <CoverImage
      src={'https://source.unsplash.com/600x400/'}
      srcSet={[
        'https://source.unsplash.com/600x400/ 600w',
        'https://source.unsplash.com/1200x800/ 1200w',
      ].join(', ')}
      alt={text('Alt text', 'A random image')}
      aspectRatio={number('Aspet ratio', 3 / 2)}
    />
  </div>
);

export const WithLink = () => (
  <a
    style={{ width: '50vw', display: 'block' }}
    href={text('Link', 'https://bamboo.madebyconnor.co')}
  >
    <CoverImage
      src={'https://source.unsplash.com/600x400/'}
      srcSet={[
        'https://source.unsplash.com/600x400/ 600w',
        'https://source.unsplash.com/1200x800/ 1200w',
      ].join(', ')}
      alt={text('Alt text', 'A random image')}
      aspectRatio={number('Aspet ratio', 3 / 2)}
    />
  </a>
);
