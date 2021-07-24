import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import styles from './Paragraph.module.css';

export interface ParagraphProps
  extends Omit<HTMLProps<HTMLParagraphElement>, 'ref' | 'size'> {
  as?: 'p' | 'blockquote' | 'article' | 'section' | 'strong' | 'em';
  size?: 's' | 'm' | 'l';
  bold?: boolean;
}

export const Paragraph = forwardRef(
  (
    { as, size = 'm', bold, className, ...props }: ParagraphProps,
    ref: Ref<HTMLParagraphElement>,
  ) => {
    const Component = bold ? 'strong' : 'p';
    return (
      <Component
        {...props}
        ref={ref}
        className={cx(className, styles.base, styles[`size-${size}`], {
          [styles.bold]: bold,
        })}
      />
    );
  },
);

Paragraph.displayName = 'Paragraph';
