import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { useComponents } from '../../../../hooks/use-components';
import { childrenPropType } from '../../../../util/prop-types';

const anchorStyles = () => css`
  position: relative;
  z-index: 2;
`;

const A = styled('a')(anchorStyles);

const siteLogoBaseStyles = ({ theme }) => css`
  display: inline-block;
  height: ${theme.spacing.xxl};
  width: auto;
  vertical-align: middle;
  font-size: 36px;
  line-height: 1.33;

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
  margin-left: ${theme.spacing.s};
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
      <Link href={href} prefetch={!isHomepage}>
        <A>{children}</A>
      </Link>
    );
  }

  return (
    <Link href={href} prefetch={!isHomepage}>
      <A>
        <SiteLogo>{siteLogo}</SiteLogo>
        <SiteName>{siteName}</SiteName>
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
