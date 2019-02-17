import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { GROUPS } from '../../../../.storybook/groups';

import Collage from '.';

const images = [
  {
    src: 'https://source.unsplash.com/500x400/',
    srcSet: [
      'https://source.unsplash.com/500x400/ 500w',
      'https://source.unsplash.com/1000x800/ 1000w'
    ].join(', '),
    alt: 'A random image'
  },
  {
    src: 'https://source.unsplash.com/800x300/',
    srcSet: [
      'https://source.unsplash.com/800x500/ 800w',
      'https://source.unsplash.com/1600x1000/ 1600w'
    ].join(', '),
    alt: 'A random image'
  },
  {
    src: 'https://source.unsplash.com/400x500/',
    srcSet: [
      'https://source.unsplash.com/400x500/ 400w',
      'https://source.unsplash.com/800x1000/ 800w'
    ].join(', '),
    alt: 'A random image'
  }
];

storiesOf(`${GROUPS.IMAGES}|Collage`, module).add(
  'Collage',
  withInfo()(() => (
    <div style={{ width: '80vw' }}>
      <Collage images={images} />
    </div>
  ))
);
