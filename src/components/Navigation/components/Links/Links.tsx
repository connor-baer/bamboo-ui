/* eslint-disable jsx-a11y/anchor-is-valid */
import { HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import { Icon as IconType } from 'react-feather';

import { isEmpty } from '../../../../util/fp';
import { useComponents } from '../../../../hooks/useComponents';

import styles from './Links.module.css';

export interface LinksProps extends HTMLAttributes<HTMLElement> {
  links: {
    children: ReactNode;
    href: string;
    icon: IconType;
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
        {links.map(({ href, children, icon: Icon, active }, i) => (
          <Link key={i} href={href}>
            <a
              className={cx(
                styles.anchor,
                active && styles.anchorActive,
                className,
              )}
            >
              <Icon
                role="presentation"
                size={24}
                strokeWidth={3}
                className={styles.icon}
              />
              <span className={styles.label}>{children}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
