import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';

export const createGlobalStyles = ({ theme }) => css`
  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
    font-weight: ${theme.fontWeight.regular};
    text-decoration-skip: edges;
  }

  .fonts-loaded {
    body,
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: ${theme.fontStack.default};
    }
  }

  *::selection {
    background-color: ${theme.colors.selectionBg};
    color: ${theme.colors.selectionColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    ${theme.mq.untilKilo} {
      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all ${theme.animations.micro};

    &:hover,
    &:focus {
      color: ${theme.colors.p500};
      cursor: pointer;
    }
  }
`;

export default function GlobalStyles({ styles }) {
  return (
    <Global
      styles={theme => [createGlobalStyles({ theme }), styles({ theme })]}
    />
  );
}

GlobalStyles.propTypes = {
  styles: PropTypes.func
};
