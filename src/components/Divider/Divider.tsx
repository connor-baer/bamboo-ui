import React, { HTMLProps } from 'react';
import cx from 'classnames';

import styles from './Divider.module.css';

export type DividerProps = HTMLProps<HTMLHRElement>;

/**
 * A horizontal rule to visually and semantically separate text.
 */
export function Divider(props: DividerProps): JSX.Element {
  return <hr {...props} className={cx(props.className, styles.base)} />;
}
