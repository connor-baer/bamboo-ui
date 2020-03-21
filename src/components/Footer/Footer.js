import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { childrenPropType } from '../../util/shared-prop-types';
import { fullWidth } from '../../styles/shared';
import Anchor from '../typography/Anchor';
import Small from '../typography/Small';

const HEIGHT_NAVIGATION = '4rem';

const wrapperStyles = ({ theme }) => css`
  border-topa: 1px solid ${theme.colors.n300};
  background-color: ${theme.colors.n100};
  padding: ${theme.spacings.mega} ${theme.spacings.kilo}
    calc(${theme.spacings.mega} + ${HEIGHT_NAVIGATION});

  ${theme.mq.mega} {
    padding-top: ${theme.spacings.mega};
    padding-bottom: ${theme.spacings.mega};
  }
`;

const Wrapper = styled('footer')(wrapperStyles);

const contentStyles = ({ theme }) => css`
  text-align: center;

  small,
  a {
    color: ${theme.colors.n600};
    font-weight: ${theme.fontWeight.regular};
  }
`;

const Content = styled('div')(fullWidth, contentStyles);

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
  siteTwitter: PropTypes.string,
  children: childrenPropType
};

export default Footer;
