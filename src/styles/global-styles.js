import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { isFunction, isArray } from 'lodash/fp';

import { focusOutline } from './shared';

export const createGlobalStyles = ({ theme }) => css`
  /* http://meyerweb.com/eric/tools/css/reset/
   * v2.0 | 20110126
   * License: none (public domain)
   */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Our globals */
  /**
   * Best practice from http://callmenick.com/post/the-new-box-sizing-reset
   * TLDR: It’s easier to override and a slight performance boost.
   */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    line-height: ${theme.lineHeights.kilo};
    font-size: 16px;

    ${theme.mq.mega} {
      font-size: 18px;
    }

    [type='button'] {
      appearance: none;
    }
  }

  body {
    color: ${theme.colors.bodyColor};
    background-color: ${theme.colors.bodyBg};
  }

  /**
   * Form elements don't inherit font settings.
   * https://stackoverflow.com/questions/26140050/why-is-font-family-not-inherited-in-button-tags-automatically
   */
  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: ${theme.fontWeight.regular};
    text-decoration-skip: ink;
    font-feature-settings: 'kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;

    .fonts-loaded & {
      font-family: ${theme.fontStack.default};
    }
  }

  *::selection {
    background-color: ${theme.colors.selectionBg};
    color: ${theme.colors.selectionColor};
  }

  a {
    ${focusOutline({ theme })};
    text-decoration: none;
    color: inherit;
    transition: all ${theme.animations.micro};

    &:hover,
    &:focus {
      color: ${theme.colors.p500};
      cursor: pointer;
    }
  }

  pre,
  code {
    font-family: ${theme.fontStack.mono};
  }

  style {
    display: none !important;
  }
`;

export default function GlobalStyles({ styles }) {
  return (
    <Global
      styles={theme => {
        const allStyles = [];
        const defaultStyles = createGlobalStyles({ theme });

        allStyles.push(defaultStyles);

        if (isFunction(styles)) {
          allStyles.push(styles({ theme }));
        } else if (isArray(styles)) {
          allStyles.push(...styles);
        } else if (styles) {
          allStyles.push(styles);
        }

        return allStyles;
      }}
    />
  );
}

GlobalStyles.propTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.array
  ])
};
