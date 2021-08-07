import {
  forwardRef,
  HTMLProps,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  Ref,
} from 'react';
import cx from 'classnames';

import { ReactComponent as Cross } from '../../icons/cross.svg';
import { Element } from '../Element';

import styles from './Tag.module.css';

interface TagDivProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  onRemove?: (event: MouseEvent | KeyboardEvent) => void;
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: never;
}

interface TagButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'ref'> {
  onClick: (event: MouseEvent | KeyboardEvent) => void;
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onRemove?: never;
}

export type TagProps = TagDivProps | TagButtonProps;

export const Tag = forwardRef(
  (
    {
      children,
      onClick,
      onRemove,
      active,
      disabled,
      className,
      ...props
    }: TagProps,
    ref: Ref<any>,
  ) => (
    <Element
      {...props}
      as={onClick ? 'button' : 'div'}
      ref={ref}
      className={cx(
        styles.tag,
        active && styles.active,
        disabled && styles.disabled,
        className,
      )}
      onClick={onClick}
      aria-disabled={disabled}
    >
      <span className={styles.content}>{children}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove"
          title="Remove"
          type="button"
          className={cx(styles.closeButton, active && styles.active)}
        >
          <Cross />
        </button>
      )}
    </Element>
  ),
);

Tag.displayName = 'Tag';
