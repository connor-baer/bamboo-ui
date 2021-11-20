import { forwardRef, HTMLAttributes, Ref } from 'react';
import cx from 'classnames';

import styles from './Intro.module.css';

export type IntroProps = HTMLAttributes<HTMLParagraphElement>;

export const Intro = forwardRef(
  ({ className, ...props }: IntroProps, ref: Ref<HTMLParagraphElement>) => (
    <p {...props} ref={ref} className={cx(styles.base, className)} />
  ),
);

Intro.displayName = 'Intro';
