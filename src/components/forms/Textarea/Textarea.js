import React from 'react';
import { css } from '@emotion/core';

import { Input } from '../Input';

const textAreaStyles = css`
  label: text-area;
  overflow: auto;
  resize: vertical;
`;

export function Textarea(props) {
  return <Input css={textAreaStyles} as="textarea" {...props} />;
}

Textarea.propTypes = Input.propTypes;
