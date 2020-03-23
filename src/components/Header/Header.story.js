import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { css } from '@emotion/core';

import Header from './Header';
import Small from '../typography/Small';

storiesOf('Components/Header', module).add('Header', () => (
  <div
    css={css`
      width: 90vw;
      max-width: 40rem;
    `}
  >
    <Header
      title={text('Title', 'Bamboo UI')}
      subtitle={text('Subtitle', 'A React component libary')}
    >
      <div
        css={(theme) =>
          css`
            margin-top: ${theme.spacings.kilo};
          `
        }
      >
        <Small>{text('Children', 'Made by Connor')}</Small>
      </div>
    </Header>
  </div>
));
