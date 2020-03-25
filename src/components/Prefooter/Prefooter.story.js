import React from 'react';
import { css } from '@emotion/core';
import { text } from '@storybook/addon-knobs/react';

import Prefooter from './Prefooter';

export default {
  title: 'Components/Prefooter',
  component: Prefooter,
};

export const Base = () => (
  <div
    css={css`
      width: 100vw;
    `}
  >
    <Prefooter
      text={text('Text', 'Bamboo UI is open-source')}
      linkLabel={text('Link label', 'Fork on GitHub')}
      linkUrl={text('Link URL', 'https://github.com/connor-baer/bamboo-ui/')}
    />
  </div>
);
