import styled from '@emotion/styled';
import { css } from '@emotion/core';

const wrapperStyles = ({ theme }) => css`
  margin-top: ${theme.spacing.xxxl};
  margin-bottom: ${theme.spacing.xxxl};

  ${theme.mq.hand} {
    margin-top: ${theme.spacing.xxxxl};
    margin-bottom: ${theme.spacing.xxxxl};
  }

  ${theme.mq.lap} {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

export const Wrapper = styled('header')(wrapperStyles);
