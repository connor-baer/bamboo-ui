import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType } from '../../../util/prop-types';

import Text from '../Text';

const baseStyles = ({ theme }) => css`
  margin-top: ${theme.spacing.xxl};
  margin-bottom: ${theme.spacing.l};
  overflow-wrap: break-word;
  hyphens: auto;

  ${theme.mq.hand} {
    overflow-wrap: normal;
    hyphens: none;
  }
`;

const StyledText = styled(Text)(baseStyles);

function Heading(props) {
  return (
    <StyledText
      as="h2"
      size="xl"
      weight="bold"
      slope="normal"
      lineHeight="s"
      {...props}
    />
  );
}

Heading.propTypes = textPropType;

/**
 * @component
 */
export default Heading;
