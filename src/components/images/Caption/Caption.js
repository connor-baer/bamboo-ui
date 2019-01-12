import styled, { css } from 'react-emotion';
import { Text } from '@sumup/circuit-ui';

import { captionPropType } from '../../../util/shared-prop-types';

const baseStyles = ({ theme }) => css`
  display: block;
  margin-top: ${theme.spacings.giga};
  letter-spacing: 0.2px;
  color: ${theme.colors.n700};
`;

const Caption = styled(Text)(baseStyles);

Caption.propTypes = {
  children: captionPropType
};

Caption.defaultProps = {
  element: 'figcaption',
  size: Text.KILO,
  noMargin: true
};

/**
 * @component
 */
export default Caption;
