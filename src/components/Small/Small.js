import styled, { css } from 'react-emotion';
import { Text } from '@sumup/circuit-ui';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.n700};
  letter-spacing: 0.2px;
  display: inline-block;

  &::after {
    content: '·';
    display: inline-block;
    font-weight: ${theme.fontWeight.bold};
    padding-right: ${theme.spacings.kilo};
    padding-left: ${theme.spacings.kilo};
  }

  &:last-child::after {
    display: none;
    content: '';
  }
`;

const Small = styled(Text)(baseStyles);

Small.defaultProps = {
  element: 'small',
  size: Text.KILO,
  noMargin: true
};

/**
 * @component
 */
export default Small;
