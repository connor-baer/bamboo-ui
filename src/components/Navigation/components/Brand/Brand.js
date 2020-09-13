import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { useComponents } from '../../../../hooks/use-components';
import { childrenPropType } from '../../../../util/prop-types';

const anchorStyles = ({ theme }) => css`
  position: relative;
  z-index: 2;
  border-radius: ${theme.borderRadius.pill};
  background-color: ${theme.color.bodyBg};
  padding: ${theme.spacing.xxs} ${theme.spacing.s};
  margin-left: calc(-1 * ${theme.spacing.s});
`;

const A = styled('a')(anchorStyles);

const siteLogoBaseStyles = ({ theme }) => css`
  display: inline-block;
  height: ${theme.spacing.xxl};
  width: auto;
  vertical-align: middle;
  font-size: 2rem;
  line-height: 1.33;
  margin-right: ${theme.spacing.s};

  img {
    height: ${theme.spacing.xxl};
  }
`;

const siteLogoHoverStyles = ({ theme }) =>
  !theme.reducedMotion &&
  css`
    transition: transform ${theme.animation.micro};

    a:hover > &,
    a:focus > & {
      transform: scale(1.1);
    }
  `;

const SiteLogo = styled('span')(siteLogoBaseStyles, siteLogoHoverStyles);

const siteNameStyles = ({ theme }) => css`
  font-size: ${theme.fontSize.l};
  line-height: ${theme.lineHeight.m};
  display: inline-block;
  transition: color ${theme.animation.micro};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1;
  color: ${theme.color.neutral[900]};
  margin-top: 3px;
  margin-right: ${theme.spacing.s};
  vertical-align: middle;

  a:hover > &,
  a:focus > & {
    color: ${theme.color.primary[500]};
  }
`;

const SiteName = styled('div')(siteNameStyles);

function Brand({ siteLogo, siteName, siteUrl = '/', isHomepage, children }) {
  const { Link } = useComponents();

  const href = isHomepage ? '#' : siteUrl;

  /* eslint-disable jsx-a11y/anchor-is-valid */
  if (children) {
    return (
      <Link href={href}>
        <A>{children}</A>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <A>
        {siteLogo && <SiteLogo>{siteLogo}</SiteLogo>}
        {siteName && <SiteName>{siteName}</SiteName>}
      </A>
    </Link>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}

Brand.propTypes = {
  siteLogo: PropTypes.element,
  siteUrl: PropTypes.string,
  siteName: PropTypes.string,
  isHomepage: PropTypes.bool,
  children: childrenPropType,
};

/**
 * @component
 */
export default Brand;
