import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import useTheme from '../../../hooks/use-theme';

const wrapperStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacings.giga};
`;

const Wrapper = styled('div')(wrapperStyles);

const boxStyles = ({ theme, spacingName }) => css`
  width: ${theme.spacings[spacingName]};
  height: ${theme.spacings[spacingName]};
  background-color: ${theme.colors.n700};
  margin-right: ${theme.spacings.mega};
`;

const Box = styled('div')(boxStyles);

const sizeStyles = ({ theme }) => css`
  margin-left: ${theme.spacings.kilo};
  color: ${theme.colors.n600};
  font-size: ${theme.fontSizes.byte};
`;

const Size = styled('span')(sizeStyles);

export default function Spacing({ spacingName }) {
  const theme = useTheme();
  return (
    <Wrapper>
      <Box spacingName={spacingName} />
      <span>{spacingName}</span>
      <Size>{theme.spacings[spacingName]}</Size>
    </Wrapper>
  );
}

Spacing.propTypes = {
  spacingName: PropTypes.string.isRequired
};
