import { forwardRef } from 'react';
import cx from 'classnames';

import { AlignProp } from '../../../types/props';
import { Element, ElementProps } from '../../Element';

import styles from './Align.module.css';

export interface AlignProps extends Partial<ElementProps> {
  align?: AlignProp;
}

export const Align = forwardRef(
  (
    { as = 'div', align = 'center', className, ...props }: AlignProps,
    ref: ElementProps['ref'],
  ) => (
    <Element
      {...props}
      as={as}
      ref={ref}
      className={cx(
        className,
        styles.base,
        align !== 'center' && styles[align],
      )}
    />
  ),
);

Align.displayName = 'Align';
