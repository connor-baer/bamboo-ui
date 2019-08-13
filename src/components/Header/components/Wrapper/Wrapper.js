import styled from '@emotion/styled';
import { css } from '@emotion/core';

const wrapperStyles = ({ theme }) => css`
  margin-top: ${theme.spacings.tera};
  margin-bottom: ${theme.spacings.tera};

  ${theme.mq.kilo} {
    margin-top: ${theme.spacings.exa};
    margin-bottom: ${theme.spacings.exa};
  }

  ${theme.mq.mega} {
    margin-top: ${theme.spacings.yotta};
    margin-bottom: ${theme.spacings.yotta};
  }
`;

const Wrapper = styled('header')(wrapperStyles);

/**
 * @component
 */
export default Wrapper;
