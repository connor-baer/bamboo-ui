import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Heading from '../../../Heading';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.n700};

  ${theme.mq.untilKilo} {
    font-size: ${theme.fontSizes.giga};
    margin-top: ${theme.spacings.kilo};
  }

  ${theme.mq.kilo} {
    display: inline;
    margin-top: 0;
  }
`;

const Subtitle = styled(Heading)(baseStyles);

Subtitle.defaultProps = {
  as: 'h2',
  size: 'peta',
  weight: 'light'
};

/**
 * @component
 */
export default Subtitle;
