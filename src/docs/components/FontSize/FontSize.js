import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const nameStyles = ({ theme, fontSizeName }) => css`
  font-size: ${theme.fontSizes[fontSizeName]};
  line-height: 1.5;
`;

const Name = styled('span')(nameStyles);

const sizeStyles = ({ theme }) => css`
  margin-left: ${theme.spacings.kilo};
  color: ${theme.colors.n600};
  font-size: ${theme.fontSizes.byte};
`;

const Size = styled('span')(sizeStyles);

export default function FontSize({ fontSizeName }) {
  const theme = useTheme();
  return (
    <p>
      <Name fontSizeName={fontSizeName}>{fontSizeName}</Name>
      <Size>{theme.fontSizes[fontSizeName]}</Size>
    </p>
  );
}

FontSize.propTypes = {
  fontSizeName: PropTypes.string.isRequired
};
