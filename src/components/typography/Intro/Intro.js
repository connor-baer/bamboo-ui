import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType } from '../../../util/shared-prop-types';
import Paragraph from '../Paragraph';

const baseStyles = ({ theme }) => css`
  margin-bottom: ${theme.spacing.l};
`;

const StyledParagraph = styled(Paragraph)(baseStyles);

function Intro(props) {
  return <StyledParagraph size="l" weight="light" lineHeight="m" {...props} />;
}

Intro.propTypes = textPropType;

/**
 * @component
 */
export default Intro;
