import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import useComponents from '../../hooks/use-components';
import useTheme from '../../hooks/use-theme';
import Heading from '../typography/Heading';
import Anchor from '../typography/Anchor';

const wrapperStyles = ({ theme }) => css`
  background-color: ${theme.colors.n100};
  text-align: center;
  padding: ${theme.spacings.zetta} ${theme.spacings.kilo};

  ${theme.mq.mega} {
    padding: ${theme.spacings.zetta} ${theme.spacings.giga};
  }
`;

const Wrapper = styled('aside')(wrapperStyles);

const contentStyles = ({ theme }) => css`
  text-align: center;
  color: ${theme.colors.n900};
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`;

const Content = styled(Heading)(contentStyles);

const anchorStyles = ({ theme }) => css`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.p500};
`;

const StyledAnchor = styled(Anchor)(anchorStyles);

function Prefooter({ text, linkLabel, linkUrl }) {
  const theme = useTheme();
  const { Link } = useComponents();

  /* eslint-disable no-irregular-whitespace */
  return (
    <Wrapper>
      <Content as="p" size="tera" weight="light">
        {text && `${text} `}
        {linkLabel && (
          <Link href={linkUrl}>
            <StyledAnchor backgroundColor={theme.colors.n100}>
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
  linkUrl: PropTypes.string
};

/**
 * @component
 */
export default Prefooter;
