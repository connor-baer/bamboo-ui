import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/hierarchySeparators';

import Image from './Image';

storiesOf(`${GROUPS.IMAGES}|Image`, module).add(
  'Image',
  withInfo()(() => (
    <div style={{ width: '50vw' }}>
      <Image
        src={'https://source.unsplash.com/600x400/'}
        srcSet={[
          'https://source.unsplash.com/600x400/ 600w',
          'https://source.unsplash.com/1200x800/ 1200w'
        ].join(', ')}
        alt={text('Alt text', 'A random image')}
      />
    </div>
  ))
);
