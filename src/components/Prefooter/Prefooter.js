import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { useComponents } from '../../hooks/use-components';
import Heading from '../typography/Heading';
import Anchor from '../typography/Anchor';

const wrapperStyles = ({ theme }) => css`
  background-color: ${theme.color.neutral[100]};
  text-align: center;
  padding: ${theme.spacing.xxxxl} ${theme.spacing.s};

  ${theme.mq.lap} {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.l};
  }
`;

const Wrapper = styled('aside')(wrapperStyles);

const contentStyles = ({ theme }) => css`
  text-align: center;
  color: ${theme.color.neutral[900]};
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`;

const Content = styled(Heading)(contentStyles);

const anchorStyles = ({ theme }) => css`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.primary[500]};
`;

const StyledAnchor = styled(Anchor)(anchorStyles);

function Prefooter({ text, linkLabel, linkUrl }) {
  const theme = useTheme();
  const { Link } = useComponents();

  /* eslint-disable no-irregular-whitespace */
  return (
    <Wrapper>
      <Content as="p" size="xl" weight="light">
        {text && `${text} `}
        {linkLabel && (
          <Link href={linkUrl}>
            <StyledAnchor backgroundColor={theme.color.neutral[100]}>
              {linkLabel}
            </StyledAnchor>
          </Link>
        )}
      </Content>
    </Wrapper>
  );
  /* eslint-enable no-irregular-whitespace */
}

Prefooter.propTypes = {
  text: PropTypes.string,
  linkLabel: PropTypes.string,
  linkUrl: PropTypes.string,
};

/**
 * @component
 */
export default Prefooter;
