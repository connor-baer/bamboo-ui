import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, select } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/groups';

import Figure from '.';

storiesOf(`${GROUPS.IMAGES}|Figure`, module).add(
  'Figure',
  withInfo()(() => (
    <div style={{ width: '50vw' }}>
      <Figure
        image={{
          src: 'https://source.unsplash.com/600x400/',
          srcSet: [
            'https://source.unsplash.com/600x400/ 600w',
            'https://source.unsplash.com/1200x800/ 1200w'
          ].join(', '),
          alt: text('Alt text', 'A random photo from Unsplash')
        }}
        caption={text('Caption', 'This is just a random photo from Unsplash')}
        align={select('Alignment', [
          Figure.CENTER,
          Figure.FULL,
          Figure.RIGHT,
          Figure.LEFT
        ])}
      />
    </div>
  ))
);
