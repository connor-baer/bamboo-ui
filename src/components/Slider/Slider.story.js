import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs/react';
import { css } from '@emotion/core';

import { GROUPS } from '../../../.storybook/groups';

import CoverImage from '../images/CoverImage';
import Slider from './Slider';

function generateSlides(amount) {
  return Array(amount)
    .fill()
    .map((_, index) => {
      const n = index * 10;
      return (
        <div key={index}>
          <CoverImage
            src={`https://source.unsplash.com/${500 + n}x${400 + n}/`}
            srcSet={[
              `https://source.unsplash.com/${500 + n}x${400 + n}/ ${500 + n}w`,
              `https://source.unsplash.com/${1000 + n}x${800 + n}/ ${1000 + n}w`
            ].join(', ')}
            aspectRatio={3 / 5}
            alt="A random image"
          />
        </div>
      );
    });
}

storiesOf(`${GROUPS.COMPONENTS}|Slider`, module).add('Slider', () => (
  <div
    css={css`
      width: 100vw;
      max-width: 72rem;
    `}
  >
    <Slider>{generateSlides(number('Number of slides', 4))}</Slider>
  </div>
));
