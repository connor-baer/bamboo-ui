import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, select, number } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/hierarchySeparators';

import Gallery from '.';

function generateImages(amount) {
  return Array(amount)
    .fill()
    .map((_, index) => {
      const n = index * 10;
      return {
        src: `https://source.unsplash.com/${500 + n}x${400 + n}/`,
        srcSet: [
          `https://source.unsplash.com/${500 + n}x${400 + n}/ ${500 + n}w`,
          `https://source.unsplash.com/${1000 + n}x${800 + n}/ ${1000 + n}w`
        ].join(', '),
        alt: 'A random image'
      };
    });
}

storiesOf(`${GROUPS.IMAGES}|Gallery`, module).add(
  'Gallery',
  withInfo()(() => (
    <div style={{ width: '50vw' }}>
      <Gallery
        images={generateImages(Math.round(number('Number of images', 4)))}
        caption={text('Caption', 'Random photos from Unsplash')}
        align={select('Alignment', [
          Gallery.CENTER,
          Gallery.FULL,
          Gallery.RIGHT,
          Gallery.LEFT
        ])}
      />
    </div>
  ))
);
