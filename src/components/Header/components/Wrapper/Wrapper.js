import styled from '@emotion/styled';
import { css } from '@emotion/core';

const wrapperStyles = () => css`
  margin-top: 9vh;
  margin-bottom: 9vh;

  @supports (margin: min(calc(12vh - 1rem), 6rem)) {
    margin-top: min(calc(12vh - 1rem), 6rem);
    margin-bottom: min(calc(12vh - 1rem), 6rem);
  }
`;

export const Wrapper = styled('header')(wrapperStyles);
