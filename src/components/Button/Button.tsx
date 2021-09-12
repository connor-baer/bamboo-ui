import { forwardRef, Ref } from 'react';
import cx from 'classnames';
import { Icon as IconType } from 'react-feather';

import { AnchorOrButton, AnchorOrButtonProps } from '../AnchorOrButton';
import shared from '../../styles/shared.module.css';

import styles from './Button.module.css';

export type ButtonProps = AnchorOrButtonProps & {
  variant?: 'primary' | 'secondary';
  size?: 's' | 'm';
  icon?: IconType;
  destructive?: boolean;
  iconOnly?: boolean;
};

export const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'm',
      icon: Icon,
      iconOnly,
      destructive,
      children,
      ...props
    }: ButtonProps,
    ref: Ref<any>,
  ): JSX.Element => {
    const className = cx(
      styles.base,
      styles[variant],
      styles[size],
      props.disabled && styles.disabled,
      destructive && styles.destructive,
      iconOnly && styles.iconOnly,
      props.className,
    );

    return (
      <AnchorOrButton {...props} ref={ref} className={className}>
        {Icon && <Icon size={18} strokeWidth={3} />}
        <span className={cx(iconOnly && shared.hideVisually)}>{children}</span>
      </AnchorOrButton>
    );
  },
);

Button.displayName = 'Button';
