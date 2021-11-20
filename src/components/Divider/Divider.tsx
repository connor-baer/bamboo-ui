import { HTMLAttributes } from 'react';
import cx from 'classnames';

import styles from './Divider.module.css';

export type DividerProps = HTMLAttributes<HTMLHRElement>;

/**
 * A horizontal rule to visually and semantically separate text.
 */
export function Divider(props: DividerProps): JSX.Element {
  return <div {...props} className={cx(styles.base, props.className)} />;
}
