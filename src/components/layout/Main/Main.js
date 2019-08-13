import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const HEIGHT_NAVIGATION = '5.5rem';
const HEIGHT_FOOTER = '10.5rem + 3rem';

const baseStyles = ({ theme }) => css`
  overflow: hidden;
  padding-bottom: ${theme.spacings.zetta};
  color: ${theme.colors.bodyColor};
  background-color: ${theme.colors.bodyBg};

  ${theme.mq.mega} {
    min-height: calc(100vh - (${HEIGHT_FOOTER}));
    padding-top: ${HEIGHT_NAVIGATION};
  }
`;

const sidebarStyles = ({ theme, hasSidebar = false }) =>
  hasSidebar &&
  css`
    width: 100vw;

    ${theme.mq.mega} {
      width: calc(100vw - 20rem);
    }
  `;

const Main = styled('main')(baseStyles, sidebarStyles);

Main.propTypes = {
  hasSidebar: PropTypes.bool
};

export default Main;
