import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType } from '../../../util/prop-types';
import { Paragraph } from '../Paragraph';

const baseStyles = ({ theme }) => css`
  margin-bottom: ${theme.spacing.l};
`;

const StyledParagraph = styled(Paragraph)(baseStyles);

export function Intro(props) {
  return <StyledParagraph size="l" weight="light" lineHeight="m" {...props} />;
}

Intro.propTypes = textPropType;
