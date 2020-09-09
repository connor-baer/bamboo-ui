import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const SIDEBAR = 'sidebar';
const SPLIT = 'split';

const HEIGHT_NAVIGATION = {
  HAND: '4rem',
  LAP: '5rem',
};
const HEIGHT_FOOTER = '10.5rem + 3rem';

const baseStyles = ({ theme }) => css`
  overflow: hidden;
  padding-bottom: ${theme.spacing.xxxxl};
  color: ${theme.color.bodyColor};
  background-color: ${theme.color.bodyBg};
  padding-top: ${HEIGHT_NAVIGATION.HAND};

  ${theme.mq.lap} {
    min-height: calc(100vh - (${HEIGHT_FOOTER}));
    padding-top: ${HEIGHT_NAVIGATION.LAP};
  }
`;

const sidebarStyles = ({ theme, variant }) =>
  variant === SIDEBAR &&
  css`
    width: 100vw;

    ${theme.mq.lap} {
      width: calc(100vw - 20rem);
    }
  `;

const splitStyles = ({ theme, variant }) =>
  variant === SPLIT &&
  css`
    width: 100vw;

    ${theme.mq.lap} {
      width: 50vw;
    }
  `;

export const Main = styled('main')(baseStyles, sidebarStyles, splitStyles);

Main.propTypes = {
  variant: PropTypes.oneOf([SIDEBAR, SPLIT]),
};

Main.SIDEBAR = SIDEBAR;
Main.SPLIT = SPLIT;
