import React from 'react';
import { storiesOf } from '@storybook/react';

import Wrapper from './Wrapper';

// eslint-disable-next-line react/prop-types
function VisualizeSpacing({ children }) {
  return (
    <>
      <div
        style={{
          borderBottom: '1px solid lightgrey',
          textAlign: 'center',
          color: 'grey',
          fontSize: '12px'
        }}
      >
        top margin
      </div>
      <div style={{ background: 'lightgrey' }}>{children}</div>
      <div
        style={{
          borderTop: '1px solid lightgrey',
          textAlign: 'center',
          color: 'grey',
          fontSize: '12px'
        }}
      >
        bottom margin
      </div>
    </>
  );
}

storiesOf('Components/Header', module).add('Header.Wrapper', () => (
  <VisualizeSpacing>
    <Wrapper>Wrapper</Wrapper>
  </VisualizeSpacing>
));
