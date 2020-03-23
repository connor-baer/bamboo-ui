import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs/react';
import { css } from '@emotion/core';

import Heading from './Heading';

storiesOf('Typography/Heading', module).add('Heading', () => {
  const heading = text(
    'Text',
    'Bacon ipsum dolor amet beef ham hock pig  cow tail meatloaf',
  );
  const type = select('Type', ['sans', 'serif', 'mono'], 'sans');
  const size = select('Size', ['mega', 'giga', 'tera', 'peta', 'exa'], 'tera');
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
});
