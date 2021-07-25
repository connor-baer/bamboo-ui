import React, { HTMLProps, ReactNode } from 'react';
import cx from 'classnames';

import { Headline } from '../typography/Headline';

import styles from './Header.module.css';

export interface HeaderProps
  extends Omit<HTMLProps<HTMLElement>, 'ref' | 'size'> {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  size: 'xl' | 'xxl';
}

export function Header({
  title,
  subtitle,
  children,
  size = 'xxl',
  className,
  ...props
}: HeaderProps): JSX.Element {
  return (
    <header {...props} className={cx(styles.header, className)}>
      <div>
        {title && (
          <Headline as="h1" size={size} className={styles.title}>
            {title}
          </Headline>
        )}
        {subtitle && (
          <Headline
            as="h2"
            size={size}
            className={cx(styles.subtitle, {
              [styles.subtitleXl]: size === 'xl',
            })}
          >
            {subtitle}
          </Headline>
        )}
      </div>
      {children}
    </header>
  );
}
