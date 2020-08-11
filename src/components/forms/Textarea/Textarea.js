import React from 'react';
import { css } from '@emotion/core';

import { Input } from '../Input';

const textAreaStyles = css`
  overflow: auto;
  resize: vertical;
  min-height: 48px;
`;

export function Textarea(props) {
  return <Input inputStyles={textAreaStyles} as="textarea" {...props} />;
}

Textarea.propTypes = Input.propTypes;
