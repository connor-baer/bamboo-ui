import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { css } from '@emotion/core';

import { Text } from './Text';

const children =
  'Bacon ipsum dolor amet beef ham hock pig cow tail meatloaf. Shoulder sausage porchetta landjaeger. Ground round kevin tongue venison brisket burgdoggen pork belly landjaeger. Chuck jerky frankfurter kevin, beef ribs meatball leberkas pork chop tenderloin beef. Flank tail chuck meatloaf turducken. Meatball kielbasa shoulder, biltong pig tenderloin prosciutto. Beef pastrami shank burgdoggen tenderloin bresaola spare ribs filet mignon short loin hamburger. Venison pork loin prosciutto salami. Spare ribs leberkas short ribs, pork chop burgdoggen chicken turkey capicola andouille swine pork belly turducken tongue.';

export default {
  title: 'Typography/Text',
  component: Text,
};

export const Base = () => {
  const type = select('Type', ['sans', 'serif', 'mono'], 'sans');
  const size = select('Size', ['s', 'm', 'l', 'xl', 'xxl'], 'm');
  const weight = select('Weight', ['light', 'regular', 'bold'], 'regular');
  const slope = select('Slope', ['normal', 'italic'], 'normal');
  const lineHeight = select('Line height', ['s', 'm', 'l'], 'm');
  return (
    <div
      css={css`
        width: 90vw;
        max-width: 40rem;
      `}
    >
      <Text
        type={type}
        size={size}
        weight={weight}
        slope={slope}
        lineHeight={lineHeight}
      >
        {text('Text', children)}
      </Text>
    </div>
  );
};
