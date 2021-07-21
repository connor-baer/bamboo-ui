import React, { HTMLProps } from 'react';
import cx from 'classnames';

import styles from './Hr.module.css';

export type HrProps = HTMLProps<HTMLHRElement>;

/**
 * A horizontal rule to visually and semantically separate text.
 */
export function Hr({ className, ...props }: HrProps): JSX.Element {
  return <hr {...props} className={cx(className, styles.base)} />;
}
