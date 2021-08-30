import React, { Fragment } from 'react';

import { Blobs } from '../src';

import '../src/styles/theme.css';
import '../src/styles/base.css';

export const parameters = {
  layout: 'centered',
};

const withBlobs = (Story) => (
  <Fragment>
    <Blobs />
    <Story />
  </Fragment>
);

export const decorators = [withBlobs];
