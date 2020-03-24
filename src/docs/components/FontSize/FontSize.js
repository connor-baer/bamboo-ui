import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { themePropType } from '../../../util/shared-prop-types';

const nameStyles = ({ theme, fontSizeName }) => css`
  font-size: ${theme.fontSize[fontSizeName]};
  line-height: 1.5;
`;

const Name = styled('span')(nameStyles);

const sizeStyles = ({ theme }) => css`
  margin-left: ${theme.spacing.s};
  color: ${theme.color.neutral[600]};
  font-size: ${theme.fontSize.s};
`;

const Size = styled('span')(sizeStyles);

export default function FontSize({ theme, fontSizeName }) {
  return (
    <p>
      <Name fontSizeName={fontSizeName}>{fontSizeName}</Name>
      <Size>{theme.fontSize[fontSizeName]}</Size>
    </p>
  );
}

FontSize.propTypes = {
  theme: themePropType.isRequired,
  fontSizeName: PropTypes.string.isRequired,
};
