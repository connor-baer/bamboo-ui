import React from 'react';
import { text, select } from '@storybook/addon-knobs/react';
import { css } from '@emotion/core';

import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
};

export const Base = () => {
  const heading = text(
    'Text',
    'Bacon ipsum dolor amet beef ham hock pig  cow tail meatloaf',
  );
  const type = select('Type', ['sans', 'serif', 'mono'], 'sans');
  const size = select('Size', ['m', 'l', 'xl', 'xxl'], 'xl');
  const weight = select('Weight', ['light', 'bold'], 'bold');
  const slope = select('Slope', ['normal', 'italic'], 'normal');
  return (
    <div
      css={css`
        width: 90vw;
        max-width: 40rem;
      `}
    >
      <Heading type={type} size={size} weight={weight} slope={slope}>
        {heading}
      </Heading>
    </div>
  );
};
