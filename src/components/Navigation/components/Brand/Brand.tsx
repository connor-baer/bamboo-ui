/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode } from 'react';
import cx from 'classnames';

import { useComponents } from '../../../../hooks/useComponents';

import styles from './Brand.module.css';

export interface BrandProps {
  siteLogo?: ReactNode;
  siteUrl?: string;
  siteName?: string;
  isHomepage?: boolean;
  isTransparent?: boolean;
}

export function Brand({
  siteLogo,
  siteName,
  siteUrl = '/',
  isHomepage,
  isTransparent,
}: BrandProps): JSX.Element {
  const { Link } = useComponents();

  const href = isHomepage ? '#' : siteUrl;

  return (
    <Link href={href} passHref>
      <a className={cx(styles.logo, isTransparent && styles.anchorTransparent)}>
        {siteLogo && <span className={styles.logo}>{siteLogo}</span>}
        {siteName && <div className={styles.name}>{siteName}</div>}
      </a>
    </Link>
  );
}
