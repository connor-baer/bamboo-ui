import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = ({ theme }) => css`
  background-color: ${theme.colors.bodyBg};
  color: ${theme.colors.bodyColor};
  overflow: hidden;
  padding-bottom: ${theme.spacings.zetta};

  ${theme.mq.mega} {
    /* Height of the footer */
    min-height: calc(100vh - (168px + 65px));
    /* Height of the top navigation */
    padding-top: 88px;
  }
`;

const sidebarStyles = ({ theme, hasSidebar = false }) =>
  hasSidebar &&
  css`
    width: 100vw;

    ${theme.mq.mega} {
      width: calc(100vw - 320px);
    }
  `;

const Main = styled('main')(baseStyles, sidebarStyles);

Main.propTypes = {
  hasSidebar: PropTypes.bool
};

export default Main;
