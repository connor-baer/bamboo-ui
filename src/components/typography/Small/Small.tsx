import { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { Element, ElementProps } from '../../Element';

import styles from './Small.module.css';

export type SmallProps = Partial<ElementProps>;

export const Small = forwardRef(
  (
    { as = 'small', className, ...props }: SmallProps,
    ref: Ref<HTMLElement>,
  ) => (
    <Element
      as={as}
      ref={ref}
      className={cx(styles.base, className)}
      {...props}
    />
  ),
);

Small.displayName = 'Small';
