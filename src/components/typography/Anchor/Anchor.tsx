import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import { isEmpty } from '../../../util/fp';
import { useComponents } from '../../../hooks/useComponents';

import styles from './Anchor.module.css';

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type' | 'ref'>;

export interface AnchorProps
  extends Omit<HTMLProps<HTMLAnchorElement>, 'type' | 'ref'> {
  replace?: boolean;
  shallow?: boolean;
  scroll?: boolean;
}

function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
  return Boolean(props.href);
}

export const Anchor = forwardRef(
  (
    { children, ...props }: ButtonProps | AnchorProps,
    ref: Ref<any>,
  ): JSX.Element => {
    const { Link } = useComponents();

    if (props.disabled) {
      // eslint-disable-next-line no-param-reassign
      props['aria-disabled'] = props.disabled;
    }

    if (isEmpty(props.href) && !props.onClick) {
      return <span {...props}>{children}</span>;
    }

    const className = cx(props.className, styles.base);

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

Anchor.displayName = 'Anchor';
