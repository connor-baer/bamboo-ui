import { forwardRef, Ref, HTMLAttributes } from 'react';
import cx from 'classnames';
import { Icon as IconType } from 'react-feather';

import shared from '../../styles/shared.module.css';

import styles from './ButtonToggle.module.css';

export interface ButtonToggleProps extends HTMLAttributes<HTMLButtonElement> {
  active: boolean;
  size?: 's' | 'm';
  icon?: IconType;
  iconOnly?: boolean;
  disabled?: boolean;
}

export const ButtonToggle = forwardRef(
  (
    {
      size = 'm',
      active,
      icon: Icon,
      iconOnly,
      children,
      ...props
    }: ButtonToggleProps,
    ref: Ref<HTMLButtonElement>,
  ): JSX.Element => {
    const className = cx(
      styles.base,
      styles[size],
      props.disabled && styles.disabled,
      iconOnly && styles.iconOnly,
      props.className,
    );

    return (
      <button
        {...props}
        ref={ref}
        className={className}
        type="button"
        aria-pressed={active ? 'true' : 'false'}
      >
        {Icon && <Icon size={18} strokeWidth={3} />}
        <span className={cx(iconOnly && shared.hideVisually)}>{children}</span>
      </button>
    );
  },
);

ButtonToggle.displayName = 'ButtonToggle';
