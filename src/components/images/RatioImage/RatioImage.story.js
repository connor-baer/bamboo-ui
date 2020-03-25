import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import RatioImage from './RatioImage';

export default {
  title: 'Images/RatioImage',
  component: RatioImage,
};

export const Base = () => (
  <div style={{ width: '50vw' }}>
    <RatioImage
      src={'https://source.unsplash.com/600x400/'}
      srcSet={[
        'https://source.unsplash.com/600x400/ 600w',
        'https://source.unsplash.com/1200x800/ 1200w',
      ].join(', ')}
      alt={text('Alt text', 'A random image')}
      aspectRatio={number('Aspect ratio', 3 / 2)}
    />
  </div>
);
