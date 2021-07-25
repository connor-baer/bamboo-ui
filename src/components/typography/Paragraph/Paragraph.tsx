import React, { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { Element, ElementProps } from '../../Element';

import styles from './Paragraph.module.css';

export interface ParagraphProps extends Omit<Partial<ElementProps>, 'size'> {
  size?: 's' | 'm' | 'l';
  bold?: boolean;
}

export const Paragraph = forwardRef(
  (
    { as, size = 'm', bold, className, ...props }: ParagraphProps,
    ref: Ref<HTMLElement>,
  ) => (
    <Element
      {...props}
      as={bold ? 'strong' : 'p'}
      ref={ref}
      className={cx(
        styles.base,
        styles[`size-${size}`],
        { [styles.bold]: bold },
        className,
      )}
    />
  ),
);

Paragraph.displayName = 'Paragraph';
