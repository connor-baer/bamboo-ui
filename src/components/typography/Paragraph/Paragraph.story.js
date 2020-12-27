import React from 'react';
import { text, select } from '@storybook/addon-knobs/react';
import { css } from '@emotion/core';

import { Paragraph } from './Paragraph';

const children =
  'Bacon ipsum dolor amet beef ham hock pig cow tail meatloaf. Shoulder sausage porchetta landjaeger. Ground round kevin tongue venison brisket burgdoggen pork belly landjaeger. Chuck jerky frankfurter kevin, beef ribs meatball leberkas pork chop tenderloin beef. Flank tail chuck meatloaf turducken. Meatball kielbasa shoulder, biltong pig tenderloin prosciutto. Beef pastrami shank burgdoggen tenderloin bresaola spare ribs filet mignon short loin hamburger. Venison pork loin prosciutto salami. Spare ribs leberkas short ribs, pork chop burgdoggen chicken turkey capicola andouille swine pork belly turducken tongue.';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
};

export const Base = () => {
  const paragraph = text('Text', children);
  const type = select('Type', ['sans', 'serif', 'mono'], 'sans');
  const size = select('Size', ['s', 'm', 'l', 'xl', 'xxl'], 'm');
  const weight = select('Weight', ['regular', 'bold'], 'regular');
  const slope = select('Slope', ['normal', 'italic'], 'normal');
  return (
    <div
      css={css`
        width: 90vw;
        max-width: 50rem;
      `}
    >
      <Paragraph type={type} size={size} weight={weight} slope={slope}>
        {paragraph}
      </Paragraph>
      <Paragraph type={type} size={size} weight={weight} slope={slope}>
        {paragraph}
      </Paragraph>
    </div>
  );
};
