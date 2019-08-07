import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/groups';

import CoverImage from './CoverImage';

storiesOf(`${GROUPS.IMAGES}|CoverImage`, module)
  .add('CoverImage', () => (
    <div style={{ width: '50vw' }}>
      <CoverImage
        src={'https://source.unsplash.com/600x400/'}
        srcSet={[
          'https://source.unsplash.com/600x400/ 600w',
          'https://source.unsplash.com/1200x800/ 1200w'
        ].join(', ')}
        alt={text('Alt text', 'A random image')}
        aspectRatio={number('Aspet ratio', 3 / 2)}
      />
    </div>
  ))
  .add('CoverImage with link', () => (
    <a
      style={{ width: '50vw', display: 'block' }}
      href={text('Link', 'https://bamboo.madebyconnor.co')}
    >
      <CoverImage
        src={'https://source.unsplash.com/600x400/'}
        srcSet={[
          'https://source.unsplash.com/600x400/ 600w',
          'https://source.unsplash.com/1200x800/ 1200w'
        ].join(', ')}
        alt={text('Alt text', 'A random image')}
        aspectRatio={number('Aspet ratio', 3 / 2)}
      />
    </a>
  ));
