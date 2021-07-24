import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import styles from './Headline.module.css';

export interface HeadlineProps
  extends Omit<HTMLProps<HTMLHeadingElement>, 'size' | 'ref'> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'l' | 'xl' | 'xxl';
}

export const Headline = forwardRef(
  (
    { as: Tag = 'h2', size = 'xl', className, ...props }: HeadlineProps,
    ref: Ref<HTMLHeadingElement>,
  ) => (
    <Tag
      ref={ref}
      className={cx(className, styles.base, styles[`size-${size}`])}
      {...props}
    />
  ),
);

Headline.displayName = 'Headline';
