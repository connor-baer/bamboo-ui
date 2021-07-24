import React, { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { Element, ElementProps } from '../../Element';

import styles from './Caption.module.css';

export type CaptionProps = Partial<ElementProps>;

export const Caption = forwardRef(
  (
    { className, as = 'figcaption', ...props }: CaptionProps,
    ref: Ref<HTMLElement>,
  ) => (
    <Element
      as={as}
      {...props}
      ref={ref}
      className={cx(className, styles.base)}
    />
  ),
);

Caption.displayName = 'Caption';
