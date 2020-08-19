import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType, captionPropType } from '../../../util/prop-types';
import { Paragraph } from '../../typography/Paragraph';

const baseStyles = ({ theme }) => css`
  display: block;
  margin-top: ${theme.spacing.l};
  margin-bottom: 0;
  letter-spacing: 0.2px;
  color: ${theme.color.neutral[700]};
`;

export const Caption = styled(Paragraph)(baseStyles);

Caption.propTypes = {
  ...textPropType,
  children: captionPropType,
};

Caption.defaultProps = {
  as: 'figcaption',
  size: 's',
  lineHeight: 'm',
};
