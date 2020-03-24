import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { themePropType } from '../../../util/shared-prop-types';

const wrapperStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.l};
`;

const Wrapper = styled('div')(wrapperStyles);

const boxStyles = ({ theme, spacingName }) => css`
  width: ${theme.spacing[spacingName]};
  height: ${theme.spacing[spacingName]};
  background-color: ${theme.color.neutral[700]};
  margin-right: ${theme.spacing.m};
`;

const Box = styled('div')(boxStyles);

const sizeStyles = ({ theme }) => css`
  margin-left: ${theme.spacing.s};
  color: ${theme.color.neutral[600]};
  font-size: ${theme.fontSize.s};
`;

const Size = styled('span')(sizeStyles);

export default function Spacing({ theme, spacingName }) {
  return (
    <Wrapper>
      <Box spacingName={spacingName} />
      <span>{spacingName}</span>
      <Size>{theme.spacing[spacingName]}</Size>
    </Wrapper>
  );
}

Spacing.propTypes = {
  theme: themePropType.isRequired,
  spacingName: PropTypes.string.isRequired,
};
