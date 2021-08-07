import { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { AnchorOrButton, AnchorOrButtonProps } from '../AnchorOrButton';

import styles from './Button.module.css';

export type ButtonProps = AnchorOrButtonProps & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 's' | 'm';
};

export const Button = forwardRef(
  (
    { variant = 'primary', size = 'm', ...props }: ButtonProps,
    ref: Ref<any>,
  ): JSX.Element => {
    const className = cx(
      props.className,
      styles.base,
      styles[variant],
      styles[size],
      props.disabled && styles.disabled,
    );

    return <AnchorOrButton {...props} ref={ref} className={className} />;
  },
);

Button.displayName = 'Button';
