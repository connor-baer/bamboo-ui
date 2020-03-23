import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import useComponents from '../../../../hooks/use-components';
import { childrenPropType } from '../../../../util/shared-prop-types';

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
  font-size: ${theme.fontSizes.giga};
  line-height: ${theme.lineHeights.kilo};
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
    color: ${theme.colors.p600};
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
