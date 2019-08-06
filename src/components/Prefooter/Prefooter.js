import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Grid } from '@sumup/circuit-ui';

import Link from '../Link';

const wrapperStyles = ({ theme }) => css`
  background-color: ${theme.colors.n100};
  padding-top: ${theme.spacings.zetta};
  padding-bottom: ${theme.spacings.zetta};
  text-align: center;
`;

const Wrapper = styled('footer')(wrapperStyles);

const contentStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes.tera};
  line-height: ${theme.lineHeights.kilo};
  font-weight: ${theme.fontWeight.light};
  text-align: center;
  color: ${theme.colors.n900};
`;

const Content = styled('p')(contentStyles);

const anchorStyles = ({ theme }) => css`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.p500};

  &:hover,
  &:focus {
    box-shadow: inset 0 -0.08em 0 0 ${theme.colors.p500};
  }
`;

const Anchor = styled('a')(anchorStyles);

function Prefooter({ text, linkLabel, linkUrl }) {
  const hasLink = linkLabel && linkUrl;
  /* eslint-disable no-irregular-whitespace */
  return (
    <Wrapper>
      <Grid>
        <Content>
          {text && `${text} `}
          {hasLink && (
            <Link href={linkUrl}>
              <Anchor>{linkLabel}</Anchor>
            </Link>
          )}
        </Content>
      </Grid>
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
