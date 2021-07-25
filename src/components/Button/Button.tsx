import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import { useComponents } from '../../hooks/useComponents';

import styles from './Button.module.css';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 's' | 'm';
}

export interface ButtonProps
  extends BaseProps,
    Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'type' | 'size'> {}

export interface AnchorProps
  extends BaseProps,
    Omit<HTMLProps<HTMLAnchorElement>, 'ref' | 'type' | 'size'> {
  replace?: boolean;
  shallow?: boolean;
  scroll?: boolean;
}

function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
  return Boolean(props.href);
}

export const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'm',
      children,
      ...props
    }: ButtonProps | AnchorProps,
    ref: Ref<any>,
  ): JSX.Element => {
    const { Link } = useComponents();

    if (props.disabled) {
      // eslint-disable-next-line no-param-reassign
      props['aria-disabled'] = props.disabled;
    }

    const className = cx(
      props.className,
      styles.base,
      styles[variant],
      styles[size],
      props.disabled && styles.disabled,
    );

    if (isAnchor(props)) {
      const { href, replace, shallow, scroll, ...rest } = props;
      return (
        <Link
          href={href}
          replace={replace}
          shallow={shallow}
          scroll={scroll}
          passHref={true}
        >
          <a {...rest} ref={ref} className={className}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      // @ts-expect-error The type-guard above ensures that only ButtonProps
      // are passed to the button.
      <button {...props} ref={ref} className={className}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
