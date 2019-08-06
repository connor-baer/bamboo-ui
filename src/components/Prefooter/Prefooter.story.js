import React from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/groups';

import Prefooter from './Prefooter';

storiesOf(`${GROUPS.COMPONENTS}|Prefooter`, module).add('Prefooter', () => (
  <div
    css={css`
      width: 100vw;
    `}
  >
    <Prefooter
      text={text('Text', 'Bamboo UI is open-source')}
      linkLabel={text('Link label', 'Fork on GitHub')}
      linkUrl={text('Link URL', `https://github.com/connor-baer/bamboo-ui/`)}
    />
  </div>
));
