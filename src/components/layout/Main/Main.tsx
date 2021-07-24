import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import styles from './Main.module.css';

export interface MainProps extends Omit<HTMLProps<HTMLElement>, 'ref'> {
  variant: 'sidebar' | 'split';
}

export const Main = forwardRef(
  ({ variant, className, ...props }: MainProps, ref: Ref<HTMLElement>) => (
    <main
      {...props}
      ref={ref}
      className={cx(className, styles.base, styles[variant])}
    />
  ),
);

Main.displayName = 'Main';
