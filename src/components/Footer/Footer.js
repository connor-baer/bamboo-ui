import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../util/shared-prop-types';
import useTheme from '../../hooks/use-theme';
import Anchor from '../Anchor';
import Small from '../Small';

const wrapperStyles = ({ theme }) => css`
  border-top: 1px solid ${theme.colors.n300};
  background-color: ${theme.colors.n100};
  padding: ${theme.spacings.mega} ${theme.spacings.kilo};

  ${theme.mq.mega} {
    padding: ${theme.spacings.mega} ${theme.spacings.giga};
  }
`;

const Wrapper = styled('footer')(wrapperStyles);

const contentStyles = ({ theme }) => css`
  display: block;
  text-align: center;
  max-width: ${theme.maxWidth};
  margin: 0 auto;

  small,
  a {
    color: ${theme.colors.n500};
    font-weight: ${theme.fontWeight.regular};
  }
`;

const Content = styled('div')(contentStyles);

function Footer({ siteName, siteTwitter, children }) {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <Wrapper>
      <Content>
        {siteName && (
          <Small>{`© ${currentYear} ${siteName}. All rights reserved.`}</Small>
        )}
        {siteTwitter && (
          <Small>
            <Anchor
              backgroundColor={theme.colors.n100}
              href={`https://twitter.com/${siteTwitter}`}
              title={`Visit @${siteTwitter} profile on Twitter`}
            >
              @{siteTwitter}
            </Anchor>
          </Small>
        )}
        {children && <Small>{children}</Small>}
      </Content>
    </Wrapper>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}

Footer.propTypes = {
  siteName: PropTypes.string.isRequired,
  siteTwitter: PropTypes.string.isRequired,
  children: childrenPropType
};

export default Footer;
