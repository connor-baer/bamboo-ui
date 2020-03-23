import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType, captionPropType } from '../../../util/shared-prop-types';
import Paragraph from '../../typography/Paragraph';

const baseStyles = ({ theme }) => css`
  display: block;
  margin-top: ${theme.spacings.giga};
  margin-bottom: 0;
  letter-spacing: 0.2px;
  color: ${theme.colors.n700};
`;

const Caption = styled(Paragraph)(baseStyles);

Caption.propTypes = {
  ...textPropType,
  children: captionPropType,
};

Caption.defaultProps = {
  as: 'figcaption',
  size: 'byte',
};

/**
 * @component
 */
export default Caption;
