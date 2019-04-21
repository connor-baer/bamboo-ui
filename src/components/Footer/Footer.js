import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Grid, sharedPropTypes } from '@sumup/circuit-ui';

import Anchor from '../Anchor';
import Small from '../Small';

const wrapperStyles = ({ theme }) => css`
  border-top: 1px solid ${theme.colors.n300};
  background-color: ${theme.colors.n100};
  padding-top: ${theme.spacings.mega};
  padding-bottom: ${theme.spacings.mega};
`;

const Wrapper = styled('footer')(wrapperStyles);

const gridStyles = ({ theme }) => css`
  display: block;
  text-align: center;

  small,
  a {
    color: ${theme.colors.n500};
    font-weight: ${theme.fontWeight.regular};
  }
`;

const StyledGrid = styled(Grid)(gridStyles);

function Footer({ siteName, siteTwitter, children }) {
  const currentYear = new Date().getFullYear();
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <Wrapper>
      <StyledGrid>
        {siteName && (
          <Small>{`© ${currentYear} ${siteName}. All rights reserved.`}</Small>
        )}
        {siteTwitter && (
          <Small>
            <Anchor
              href={`https://twitter.com/${siteTwitter}`}
              title={`Visit @${siteTwitter} profile on Twitter`}
            >
              @{siteTwitter}
            </Anchor>
          </Small>
        )}
        {children && <Small>{children}</Small>}
      </StyledGrid>
    </Wrapper>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}

Footer.propTypes = {
  siteName: PropTypes.string.isRequired,
  siteTwitter: PropTypes.string.isRequired,
  children: sharedPropTypes.childrenPropType
};

export default Footer;
