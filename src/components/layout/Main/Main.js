import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const SIDEBAR = 'sidebar';
const SPLIT = 'split';

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

const sidebarStyles = ({ theme, variant }) =>
  variant === SIDEBAR &&
  css`
    width: 100vw;

    ${theme.mq.mega} {
      width: calc(100vw - 20rem);
    }
  `;

const splitStyles = ({ theme, variant }) =>
  variant === SPLIT &&
  css`
    width: 100vw;

    ${theme.mq.mega} {
      width: 50vw;
    }
  `;

const Main = styled('main')(baseStyles, sidebarStyles, splitStyles);

Main.propTypes = {
  variant: PropTypes.oneOf([SIDEBAR, SPLIT]),
};

Main.SIDEBAR = SIDEBAR;
Main.SPLIT = SPLIT;

export default Main;
