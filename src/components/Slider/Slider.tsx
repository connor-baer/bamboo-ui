import React, {
  Children,
  cloneElement,
  forwardRef,
  HTMLProps,
  ReactElement,
  Ref,
} from 'react';
import cx from 'classnames';

import styles from './Slider.module.css';

export interface SliderProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  children: ReactElement[];
}

export const Slider = forwardRef(
  (
    { className, children, ...props }: SliderProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const count = Children.count(children);
    const width = `${(100 / count).toFixed(2)}%`;
    return (
      <div {...props} ref={ref} className={cx(styles.container, className)}>
        {Children.map(children, (child) =>
          cloneElement(child, { className: styles.slide, style: { width } }),
        )}
      </div>
    );
  },
);

Slider.displayName = 'Slider';
