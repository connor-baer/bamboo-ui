import React, { forwardRef, HTMLProps, ReactNode, Ref } from 'react';
import cx from 'classnames';

import { Anchor } from '../typography/Anchor';
import { Small } from '../typography/Small';

import styles from './Footer.module.css';

export interface FooterProps extends Omit<HTMLProps<HTMLElement>, 'ref'> {
  siteName: string;
  siteTwitter?: string;
  children?: ReactNode;
}

export const Footer = forwardRef(
  (
    { siteName, siteTwitter, children, className, ...props }: FooterProps,
    ref: Ref<HTMLElement>,
  ) => {
    const currentYear = new Date().getFullYear();
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
      <footer {...props} ref={ref} className={cx(styles.footer, className)}>
        <div className={styles.content}>
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
        </div>
      </footer>
    );
    /* eslint-enable jsx-a11y/anchor-is-valid */
  },
);

Footer.displayName = 'Footer';
