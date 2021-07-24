import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import styles from './Small.module.css';

export type SmallProps = Omit<HTMLProps<HTMLElement>, 'ref'>;

export const Small = forwardRef(
  ({ className, ...props }: SmallProps, ref: Ref<HTMLElement>) => (
    <small ref={ref} className={cx(className, styles.base)} {...props} />
  ),
);

Small.displayName = 'Small';
