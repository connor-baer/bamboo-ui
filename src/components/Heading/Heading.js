import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType } from '../../util/shared-prop-types';

import Text from '../Text';

const baseStyles = ({ theme }) => css`
  margin-top: ${theme.spacings.peta};
  margin-bottom: ${theme.spacings.mega};

  ${theme.mq.untilKilo} {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`;

const sizeStyles = ({ theme, size }) => {
  if (size === 'peta') {
    return css`
      ${theme.mq.untilKilo} {
        font-size: ${theme.fontSizes.tera};
      }
    `;
  }

  if (size === 'exa') {
    return css`
      ${theme.mq.untilKilo} {
        font-size: ${theme.fontSizes.peta};
      }
    `;
  }

  return null;
};

const Heading = styled(Text)(baseStyles, sizeStyles);

Heading.propTypes = {
  as: PropTypes.string,
  ...textPropType
};

Heading.defaultProps = {
  as: 'h2',
  size: 'tera',
  weight: 'bold',
  slope: 'normal',
  lineHeight: 'bit'
};

/**
 * @component
 */
export default Heading;
