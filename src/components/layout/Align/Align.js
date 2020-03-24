import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { alignPropType } from '../../../util/prop-types';
import { RIGHT, LEFT, CENTER, FULL } from '../../../constants/align';

const baseStyles = ({ theme }) => css`
  width: 100%;
  margin-top: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
`;

const rightStyles = ({ theme, align = CENTER }) =>
  align === RIGHT &&
  css`
    ${theme.mq.hand} {
      float: right;
      margin-top: ${theme.spacing.m};
      margin-bottom: ${theme.spacing.l};
      padding-left: ${theme.spacing.xxl};
      width: calc(50% + ${theme.spacing.xxl} / 2);
    }
  `;

const leftStyles = ({ theme, align = CENTER }) =>
  align === LEFT &&
  css`
    ${theme.mq.hand} {
      float: left;
      margin-top: ${theme.spacing.m};
      margin-bottom: ${theme.spacing.l};
      padding-right: ${theme.spacing.xxl};
      width: calc(50% + ${theme.spacing.xxl} / 2);
    }
  `;

const fullStyles = ({ theme, align = CENTER }) =>
  align === FULL &&
  css`
    text-align: center;

    ${theme.mq.hand} {
      margin-top: ${theme.spacing.xxl};
      margin-bottom: ${theme.spacing.xxl};
    }

    ${theme.mq.lap} {
      margin-top: ${theme.spacing.xxxl};
      margin-bottom: ${theme.spacing.xxxl};
    }
  `;

const Align = styled('div')(baseStyles, rightStyles, leftStyles, fullStyles);

Align.RIGHT = RIGHT;
Align.LEFT = LEFT;
Align.CENTER = CENTER;
Align.FULL = FULL;

Align.propTypes = {
  align: alignPropType,
};

/**
 * @component
 */
export default Align;
