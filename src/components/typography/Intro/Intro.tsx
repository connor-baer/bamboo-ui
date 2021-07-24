import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import styles from './Intro.module.css';

export type IntroProps = Omit<HTMLProps<HTMLParagraphElement>, 'ref'>;

export const Intro = forwardRef(
  ({ className, ...props }: IntroProps, ref: Ref<HTMLParagraphElement>) => (
    <p {...props} ref={ref} className={cx(className, styles.base)} />
  ),
);

Intro.displayName = 'Intro';
