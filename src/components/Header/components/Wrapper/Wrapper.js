import styled from '@emotion/styled';
import { css } from '@emotion/core';

const wrapperStyles = ({ theme }) => css`
  margin-top: ${theme.spacings.exa};
  margin-bottom: ${theme.spacings.exa};

  ${theme.mq.kilo} {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

const Wrapper = styled('header')(wrapperStyles);

/**
 * @component
 */
export default Wrapper;
