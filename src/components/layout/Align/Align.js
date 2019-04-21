import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { RIGHT, LEFT, CENTER, FULL } from '../../../constants/align';

const baseStyles = ({ theme }) => css`
  margin-top: ${theme.spacings.tera};
  margin-bottom: ${theme.spacings.tera};
`;

const rightStyles = ({ theme, align }) =>
  align === RIGHT &&
  css`
    ${theme.mq.kilo} {
      float: right;
      margin-top: ${theme.spacings.kilo};
      margin-bottom: ${theme.spacings.giga};
      padding-left: ${theme.spacings.peta};
      width: calc(50% + ${theme.spacings.peta} / 2);
    }

    ${theme.mq.mega} {
      margin-right: -10.5%;
    }

    ${theme.mq.tera} {
      margin-right: -26.66%;
    }
  `;

const leftStyles = ({ theme, align }) =>
  align === LEFT &&
  css`
    ${theme.mq.kilo} {
      float: left;
      margin-top: ${theme.spacings.kilo};
      margin-bottom: ${theme.spacings.giga};
      padding-right: ${theme.spacings.peta};
      width: calc(50% + ${theme.spacings.peta} / 2);
    }

    ${theme.mq.mega} {
      margin-left: -10.5%;
    }

    ${theme.mq.tera} {
      margin-left: -26.66%;
    }
  `;

const fullStyles = ({ theme, align }) =>
  align === FULL &&
  css`
    text-align: center;

    ${theme.mq.mega} {
      margin: ${theme.spacings.peta} -10.5%;
      width: calc(100% + 10.5% * 2);
    }

    ${theme.mq.tera} {
      margin: ${theme.spacings.exa} -26.66%;
      width: calc(100% + 26.66% * 2);
    }
  `;

const Align = styled('div')(baseStyles, rightStyles, leftStyles, fullStyles);

Align.RIGHT = RIGHT;
Align.LEFT = LEFT;
Align.CENTER = CENTER;
Align.FULL = FULL;

Align.propTypes = {
  align: PropTypes.oneOf([RIGHT, LEFT, CENTER, FULL])
};

Align.defaultProps = {
  align: CENTER
};

/**
 * @component
 */
export default Align;
