import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { GROUPS } from '../../../../../.storybook/groups';

import Wrapper from './Wrapper';

// eslint-disable-next-line react/prop-types
function VisualizeSpacing({ children }) {
  return (
    <Fragment>
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
    </Fragment>
  );
}

storiesOf(`${GROUPS.COMPONENTS}|Header`, module).add(
  'Header.Wrapper',
  withInfo()(() => (
    <VisualizeSpacing>
      <Wrapper>Wrapper</Wrapper>
    </VisualizeSpacing>
  ))
);
