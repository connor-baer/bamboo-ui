import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { pageWidthStyles } from '../../../../styles/shared';

const wrapperStyles = ({ theme }) => css`
  margin-top: ${theme.spacings.exa};
  margin-bottom: ${theme.spacings.exa};

  ${theme.mq.kilo} {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

const Wrapper = styled('header')(pageWidthStyles, wrapperStyles);

/**
 * @component
 */
export default Wrapper;
