import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import styles from './Columns.module.css';

export interface ColumnsProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  columns: 2 | 3 | 4;
}

/**
 * Display content in multiple columns on wide viewports.
 */
export const Columns = forwardRef(
  (
    { columns = 2, className, ...props }: ColumnsProps,
    ref: Ref<HTMLDivElement>,
  ) => (
    <div
      {...props}
      ref={ref}
      className={cx(styles.base, styles[`columns-${columns}`], className)}
    />
  ),
);

Columns.displayName = 'Columns';
