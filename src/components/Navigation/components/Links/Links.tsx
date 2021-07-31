/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { HTMLProps, ReactNode } from 'react';
import cx from 'classnames';

import { isEmpty } from '../../../../util/fp';
import { useComponents } from '../../../../hooks/useComponents';

import styles from './Links.module.css';

export interface LinksProps extends HTMLProps<HTMLElement> {
  links: {
    children: ReactNode;
    href: string;
    icon: ReactNode;
    active?: boolean;
    className?: string;
  }[];
  isInvisible: boolean;
}

export function Links({
  links,
  isInvisible,
  className,
}: LinksProps): JSX.Element | null {
  const { Link } = useComponents();

  if (isEmpty(links)) {
    return null;
  }

  return (
    <nav
      className={cx(styles.nav, isInvisible && styles.navInvisible, className)}
    >
      <div className={styles.wrapper}>
        {links.map(({ href, children, icon, active }, i) => (
          <Link key={i} href={href}>
            <a
              className={cx(
                styles.anchor,
                active && styles.anchorActive,
                className,
              )}
            >
              <span role="presentation" className={styles.icon}>
                {icon}
              </span>
              <span className={styles.label}>{children}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
