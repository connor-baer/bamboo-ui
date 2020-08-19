import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType } from '../../../util/prop-types';

import { Text } from '../Text';

const baseStyles = ({ theme }) => css`
  margin-bottom: ${theme.spacing.m};
`;

const StyledText = styled(Text)(baseStyles);

export function Paragraph(props) {
  return (
    <StyledText
      as="p"
      size="m"
      weight="regular"
      slope="normal"
      lineHeight="l"
      {...props}
    />
  );
}

Paragraph.propTypes = textPropType;
