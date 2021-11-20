import { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { isEmpty } from '../../../util/fp';
import { AnchorOrButton, AnchorOrButtonProps } from '../../AnchorOrButton';

import styles from './Anchor.module.css';

export type AnchorProps = AnchorOrButtonProps;

export const Anchor = forwardRef(
  ({ children, ...props }: AnchorProps, ref: Ref<any>): JSX.Element => {
    // @ts-expect-error Only the AnchorProps contain the `href` prop
    if (isEmpty(props.href) && !props.onClick) {
      return <span {...props}>{children}</span>;
    }

    const className = cx(styles.base, props.className);

    return (
      <AnchorOrButton {...props} ref={ref} className={className}>
        {children}
      </AnchorOrButton>
    );
  },
);

Anchor.displayName = 'Anchor';
