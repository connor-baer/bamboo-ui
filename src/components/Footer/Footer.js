import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { childrenPropType } from '../../util/prop-types';
import { fullWidth } from '../../styles/shared';
import { Anchor } from '../typography/Anchor';
import { Small } from '../typography/Small';

const HEIGHT_NAVIGATION = '4rem';

const wrapperStyles = ({ theme }) => css`
  border-top: 1px solid ${theme.color.neutral[300]};
  background-color: ${theme.color.neutral[100]};
  padding: ${theme.spacing.m} ${theme.spacing.s}
    calc(${theme.spacing.m} + ${HEIGHT_NAVIGATION});

  ${theme.mq.lap} {
    padding-top: ${theme.spacing.m};
    padding-bottom: ${theme.spacing.m};
  }
`;

const Wrapper = styled('footer')(wrapperStyles);

const contentStyles = ({ theme }) => css`
  text-align: center;

  small,
  a {
    color: ${theme.color.neutral[500]};
    font-weight: ${theme.fontWeight.regular};
  }
`;

const Content = styled('div')(fullWidth, contentStyles);

export function Footer({ siteName, siteTwitter, children, ...rest }) {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <Wrapper {...rest}>
      <Content>
        {siteName && (
          <Small>{`© ${currentYear} ${siteName}. All rights reserved.`}</Small>
        )}
        {siteTwitter && (
          <Small>
            <Anchor
              backgroundColor={theme.color.neutral[100]}
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
  children: childrenPropType,
};
