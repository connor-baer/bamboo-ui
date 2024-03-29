import { forwardRef, HTMLAttributes, Ref } from 'react';
import cx from 'classnames';

import styles from './Main.module.css';

export interface MainProps extends HTMLAttributes<HTMLElement> {
  variant?: 'sidebar' | 'split';
}

export const Main = forwardRef(
  ({ variant, className, ...props }: MainProps, ref: Ref<HTMLElement>) => (
    <main
      {...props}
      ref={ref}
      className={cx(styles.base, variant && styles[variant], className)}
    />
  ),
);

Main.displayName = 'Main';
