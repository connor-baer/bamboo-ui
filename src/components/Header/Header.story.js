import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { css } from '@emotion/core';

import { spacing } from '../../styles/shared';
import { Header } from './Header';
import { Small } from '../typography/Small';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Base = () => (
  <div
    css={css`
      width: 90vw;
      max-width: 40rem;
    `}
  >
    <Header
      title={text('Title', 'Bamboo UI')}
      subtitle={text('Subtitle', 'A React component library')}
      size={select('Size', ['xl', 'xxl'], 'xxl')}
    >
      <div css={spacing({ top: 's' })}>
        <Small>{text('Children', 'Made by Connor')}</Small>
      </div>
    </Header>
  </div>
);
