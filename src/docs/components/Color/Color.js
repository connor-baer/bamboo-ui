import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isObject, get } from 'lodash/fp';

import { themePropType } from '../../../util/prop-types';

const groupStyles = ({ theme }) => css`
  margin: ${theme.spacing.l} 0;
`;

const Group = styled('div')(groupStyles);

const wrapperStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  margin: ${theme.spacing.s} 0;
`;

const Wrapper = styled('div')(wrapperStyles);

const colorStyles = ({ theme, colorPath }) => css`
  display: inline-block;
  width: ${theme.spacing.l};
  height: ${theme.spacing.l};
  background: ${get(colorPath, theme.color)};
`;

const ColorBox = styled('span')(colorStyles);

const nameStyles = ({ theme }) => css`
  margin-left: ${theme.spacing.s};
  color: ${theme.color.neutral[500]};
  font-size: ${theme.fontSize.s};
`;

const Name = styled('span')(nameStyles);

export default function Color({ theme, color }) {
  const [colorName, colorValue] = color;

  if (isObject(colorValue)) {
    return (
      <Group>
        <h3>{colorName}</h3>
        {Object.keys(colorValue).map((colorIndex) => (
          <Wrapper key={colorIndex}>
            <ColorBox colorPath={[colorName, colorIndex]} />
            <Name>
              {colorIndex}: {theme.color[colorName][colorIndex]}
            </Name>
          </Wrapper>
        ))}
      </Group>
    );
  }
  return (
    <Wrapper>
      <ColorBox colorPath={colorName} />
      <Name>
        {colorName}: {theme.color[colorName]}
      </Name>
    </Wrapper>
  );
}

Color.propTypes = {
  theme: themePropType.isRequired,
  color: PropTypes.array,
};
