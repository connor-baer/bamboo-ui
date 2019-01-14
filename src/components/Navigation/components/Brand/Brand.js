import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { styleHelpers, sharedPropTypes } from '@sumup/circuit-ui';

import Link from '../../../Link';

const anchorStyles = () => css`
  position: relative;
  z-index: 2;
`;

const A = styled('a')(anchorStyles);

const siteLogoBaseStyles = ({ theme }) => css`
  display: inline-block;
  height: ${theme.spacings.peta};
  width: auto;
  vertical-align: middle;
  font-size: 36px;
  line-height: 1.33;

  img {
    height: ${theme.spacings.peta};
  }
`;

const siteLogoHoverStyles = ({ theme }) =>
  !theme.reducedMotion &&
  css`
    transition: transform ${theme.animations.micro};

    a:hover > &,
    a:focus > & {
      transform: scale(1.1);
    }
  `;

const SiteLogo = styled('span')(siteLogoBaseStyles, siteLogoHoverStyles);

const siteNameStyles = ({ theme }) => css`
  ${styleHelpers.headingTera({ theme })};
  display: inline-block;
  transition: color ${theme.animations.micro};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1;
  color: ${theme.colors.n900};
  margin-top: 3px;
  margin-left: ${theme.spacings.kilo};
  vertical-align: middle;

  a:hover > &,
  a:focus > & {
    color: ${theme.colors.p500};
  }
`;

const SiteName = styled('div')(siteNameStyles);

const Brand = ({ siteLogo, siteName, siteUrl, children, router }) => {
  const isHome = router.asPath === siteUrl;
  const href = isHome ? '#' : '/';

  /* eslint-disable jsx-a11y/anchor-is-valid */
  if (children) {
    return (
      <Link href={href} prefetch={!isHome}>
        <A>{children}</A>
      </Link>
    );
  }

  return (
    <Link href={href} prefetch={!isHome}>
      <A>
        <SiteLogo>{siteLogo}</SiteLogo>
        <SiteName>{siteName}</SiteName>
      </A>
    </Link>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
};

Brand.propTypes = {
  siteLogo: PropTypes.element,
  siteUrl: PropTypes.string,
  siteName: PropTypes.string,
  children: sharedPropTypes.childrenPropType,
  router: PropTypes.shape({
    asPath: PropTypes.string
  })
};

Brand.defaultProps = {
  siteUrl: '/',
  router: {}
};

/**
 * @component
 */
export default Brand;
