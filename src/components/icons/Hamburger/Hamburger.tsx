import { forwardRef, HTMLAttributes, Ref } from 'react';
import cx from 'classnames';

import styles from './Hamburger.module.css';

export interface HamburgerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A consice description of the example prop.
   */
  isActive: boolean;
  /**
   * Label for the 'active' state. Important for accessibility.
   */
  labelActive?: string;
  /**
   * Label for the 'inactive' state. Important for accessibility.
   */
  labelInActive?: string;
}

/**
 * A hamburger button for menus. Morphs into a close icon when active.
 */
export const Hamburger = forwardRef(
  (
    {
      isActive = false,
      labelActive = 'Close menu',
      labelInActive = 'Open menu',
      className,
      ...props
    }: HamburgerProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const label = isActive ? labelActive : labelInActive;
    return (
      <button
        {...props}
        ref={ref}
        className={cx(styles.button, className)}
        title={label}
        aria-expanded={isActive}
      >
        <span className={styles.layers} />
        <span className={styles.label}>{label}</span>
      </button>
    );
  },
);

Hamburger.displayName = 'Hamburger';
