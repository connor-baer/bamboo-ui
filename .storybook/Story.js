import React, { useEffect } from 'react';
import addons from '@storybook/addons';
import { addDecorator } from '@storybook/react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import GlobalStyles from '../src/styles/global-styles';

const channel = addons.getChannel();

function ThemeToggle({ theme }) {
  useEffect(() => {
    channel.on('DARK_MODE', theme.toggleDarkmode);
  }, [channel, theme.toggleDarkmode]);
  return null;
}

const styles = () => css`
  html,
  body {
    background: transparent;
  }
`;

const optionStyles = ({ theme }) => css`
  position: fixed;
  right: 0;
  bottom: 0;
  background: rgb(34, 136, 204);
  border-radius: 5px 0 0 0;
  line-height: 1.5;
  padding: 0 6px;
`;

const Options = styled('div')(optionStyles);

const buttonStyles = ({ theme }) => css`
  font-family: sans-serif !important;
  font-size: 12px;
  border: none;
  margin: 0;
  padding: 0 8px;
  width: auto;
  overflow: visible;
  color: white;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled('button')(buttonStyles);

const ReducedMotion = ({ theme }) => (
  <Button onClick={theme.toggleReducedMotion}>Reduce motion</Button>
);

function Story({ theme, children }) {
  return (
    <div>
      {children}
      <ThemeToggle theme={theme} />
      <GlobalStyles styles={styles} />
      <Options>
        <ReducedMotion theme={theme} />
      </Options>
    </div>
  );
}

export default withTheme(Story);
