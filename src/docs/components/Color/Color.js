import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import useTheme from '../../../hooks/use-theme';

const wrapperStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  margin: ${theme.spacings.kilo} 0;
`;

const Wrapper = styled('div')(wrapperStyles);

const colorStyles = ({ theme, colorName }) => css`
  display: inline-block;
  width: ${theme.spacings.giga};
  height: ${theme.spacings.giga};
  background: ${theme.colors[colorName]};
`;

const ColorBox = styled('span')(colorStyles);

const nameStyles = ({ theme }) => css`
  margin-left: ${theme.spacings.kilo};
  color: ${theme.colors.n600};
  font-size: ${theme.fontSizes.byte};
`;

const Name = styled('span')(nameStyles);

export default function Color({ colorName }) {
  const theme = useTheme();
  return (
    <Wrapper>
      <ColorBox colorName={colorName} />
      <Name>
        {colorName}: {theme.colors[colorName]}
      </Name>
    </Wrapper>
  );
}

Color.propTypes = {
  colorName: PropTypes.string.isRequired
};
