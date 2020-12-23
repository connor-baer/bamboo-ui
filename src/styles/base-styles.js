import React from 'react';
import { Global, css } from '@emotion/core';

export const createBaseStyles = (theme) => css`
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
    font-size: 100%;

    [type='button'] {
      appearance: none;
    }

    ${theme.mq.wall} {
      font-size: 112.5%;
    }
  }

  body {
    color: ${theme.color.bodyColor};
    background-color: ${theme.color.bodyBg};
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
    font-family: ${theme.fontStack.fallback};
    letter-spacing: ${theme.letterSpacing.fallback};
    font-size: 100%;
    font-weight: ${theme.fontWeight.regular};
    line-height: ${theme.lineHeight.m};
    text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
    font-feature-settings: 'kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    .fonts-loaded & {
      font-family: ${theme.fontStack.default};
      letter-spacing: 0px;
    }
  }

  *::selection {
    background-color: ${theme.color.selectionBg};
    color: ${theme.color.selectionColor};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all ${theme.animation.micro};

    &:hover,
    &:focus {
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

export function BaseStyles() {
  return <Global styles={createBaseStyles} />;
}
