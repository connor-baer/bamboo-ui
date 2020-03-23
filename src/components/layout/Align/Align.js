import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { alignPropType } from '../../../util/shared-prop-types';
import { RIGHT, LEFT, CENTER, FULL } from '../../../constants/align';

const baseStyles = ({ theme }) => css`
  width: 100%;
  margin-top: ${theme.spacings.tera};
  margin-bottom: ${theme.spacings.tera};
`;

const rightStyles = ({ theme, align = CENTER }) =>
  align === RIGHT &&
  css`
    ${theme.mq.kilo} {
      float: right;
      margin-top: ${theme.spacings.mega};
      margin-bottom: ${theme.spacings.giga};
      padding-left: ${theme.spacings.peta};
      width: calc(50% + ${theme.spacings.peta} / 2);
    }
  `;

const leftStyles = ({ theme, align = CENTER }) =>
  align === LEFT &&
  css`
    ${theme.mq.kilo} {
      float: left;
      margin-top: ${theme.spacings.mega};
      margin-bottom: ${theme.spacings.giga};
      padding-right: ${theme.spacings.peta};
      width: calc(50% + ${theme.spacings.peta} / 2);
    }
  `;

const fullStyles = ({ theme, align = CENTER }) =>
  align === FULL &&
  css`
    text-align: center;

    ${theme.mq.kilo} {
      margin-top: ${theme.spacings.peta};
      margin-bottom: ${theme.spacings.peta};
    }

    ${theme.mq.mega} {
      margin-top: ${theme.spacings.exa};
      margin-bottom: ${theme.spacings.exa};
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
