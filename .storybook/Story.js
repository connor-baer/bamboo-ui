import React from 'react';
import styled, { css } from 'react-emotion';
import { withTheme } from 'emotion-theming';

const containerStyles = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${theme.colors.bodyColor};
  background: ${theme.colors.bodyBg};
`;

const Container = styled('div')(containerStyles);

const optionStyles = ({ theme }) => css`
  position: fixed;
  right: 0;
  bottom: 0;
  background: rgb(34, 136, 204);
  border-radius: 5px 0 0 0;
  font-size: 12px;
  line-height: 2;
  padding: 0 6px 2px;
`;

const Options = styled('div')(optionStyles);

const buttonStyles = ({ theme }) => css`
  border: none;
  margin: 0;
  padding: 0 6px;
  width: auto;
  overflow: visible;
  color: white;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled('button')(buttonStyles);

const Darkmode = ({ theme }) => (
  <Button onClick={theme.toggleDarkmode}>Dark</Button>
);

const ReducedMotion = ({ theme }) => (
  <Button onClick={theme.toggleReducedMotion}>Motion</Button>
);

function Story({ theme, children }) {
  return (
    <Container>
      {children}
      <Options>
        <Darkmode theme={theme} />
        <ReducedMotion theme={theme} />
      </Options>
    </Container>
  );
}

export default withTheme(Story);
