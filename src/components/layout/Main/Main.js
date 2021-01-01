import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { HEIGHT_NAVIGATION, HEIGHT_FOOTER } from '../../../constants/height';

const SIDEBAR = 'sidebar';
const SPLIT = 'split';

const baseStyles = ({ theme }) => css`
  color: ${theme.color.bodyColor};
  background-color: ${theme.color.bodyBg};
  padding-bottom: ${theme.spacing.xxxxl};

  ${theme.mq.lap} {
    min-height: calc(100vh - (${HEIGHT_FOOTER}));
    padding-top: ${HEIGHT_NAVIGATION};
  }
`;

const sidebarStyles = ({ theme, variant }) =>
  variant === SIDEBAR &&
  css`
    width: 100vw;

    ${theme.mq.lap} {
      width: calc(100vw - 25rem);
      min-width: calc(100vw - 30vw);
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
