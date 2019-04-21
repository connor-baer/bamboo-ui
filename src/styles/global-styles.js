import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles as GlobalStylesCircuitUi } from '@sumup/circuit-ui';
import { ThemeContext } from '@emotion/core';

export const createGlobalStyles = ({ theme, custom = '' }) => `
  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
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

  #nprogress {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: ${theme.colors.white};
    height: 3px;
    pointer-events: none;
    z-index: 1001;

    .bar {
      background: ${theme.colors.p500};
      height: 100%;
      width: 100%;
    }

    .peg {
      box-shadow: 0 0 10px ${theme.colors.p500}, 0 0 5px ${theme.colors.p500};
      display: block;
      height: 100%;
      opacity: 1;
      position: absolute;
      right: 0;
      transform: rotate(3deg) translate(0, -4px);
      width: 100px;
    }
  }

  /**
   * Allow custom styles to override the default styles
   */
  ${custom}
`;

export default function GlobalStyles({ custom, ...rest }) {
  const theme = useContext(ThemeContext);
  const mergedCustomStyles = createGlobalStyles({ theme, custom });
  return <GlobalStylesCircuitUi custom={mergedCustomStyles} {...rest} />;
}

GlobalStyles.propTypes = {
  custom: PropTypes.string
};
