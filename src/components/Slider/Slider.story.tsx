import React from 'react';

import { CoverImage } from '../images/CoverImage';

import { Slider, SliderProps } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Base = ({
  numberOfSlides,
  ...args
}: SliderProps & { numberOfSlides: number }) => (
  <Slider {...args}>{generateSlides(numberOfSlides)}</Slider>
);

Base.args = {
  numberOfSlides: 4,
};

function generateSlides(amount: number) {
  return Array(amount)
    .fill('')
    .map((_, index) => {
      const n = index * 10;
      return (
        <div key={index}>
          <CoverImage
            src={`https://source.unsplash.com/${500 + n}x${400 + n}/`}
            srcSet={[
              `https://source.unsplash.com/${500 + n}x${400 + n}/ ${500 + n}w`,
              `https://source.unsplash.com/${1000 + n}x${800 + n}/ ${
                1000 + n
              }w`,
            ].join(', ')}
            aspectRatio={3 / 5}
            alt="A random image"
          />
        </div>
      );
    });
}
