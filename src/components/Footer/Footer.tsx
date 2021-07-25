import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import { LinkProp } from '../../types/props';
import { Anchor } from '../typography/Anchor';

import styles from './Footer.module.css';

export interface FooterProps extends Omit<HTMLProps<HTMLElement>, 'ref'> {
  siteName: string;
  links?: LinkProp[];
}

export const Footer = forwardRef(
  (
    { siteName, links, className, ...props }: FooterProps,
    ref: Ref<HTMLElement>,
  ) => {
    const currentYear = new Date().getFullYear();
    return (
      <footer {...props} ref={ref} className={cx(styles.footer, className)}>
        <div className={styles.content}>
          {siteName && (
            <span>{`© ${currentYear} ${siteName}. All rights reserved.`}</span>
          )}
          {links &&
            links.map((link) => (
              <Anchor key={link.href} href={link.href}>
                {link.label}
              </Anchor>
            ))}
        </div>
      </footer>
    );
  },
);

Footer.displayName = 'Footer';
