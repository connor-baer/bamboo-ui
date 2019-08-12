import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType } from '../../util/shared-prop-types';

import Text from '../Text';

const baseStyles = ({ theme }) => css`
  margin-bottom: ${theme.spacings.mega};
`;

const Paragraph = styled(Text)(baseStyles);

Paragraph.propTypes = {
  as: PropTypes.string,
  ...textPropType
};

Paragraph.defaultProps = {
  as: 'p',
  size: 'kilo',
  weight: 'regular',
  slope: 'normal',
  lineHeight: 'mega'
};

/**
 * @component
 */
export default Paragraph;
