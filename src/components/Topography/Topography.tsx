import { Fragment } from 'react';
import cx from 'classnames';

import styles from './Topography.module.css';

export function Topography(): JSX.Element {
  return (
    <Fragment>
      <span className={cx(styles.layer, styles.layerOne)} />
      <span className={cx(styles.layer, styles.layerTwo)} />
      <span className={cx(styles.layer, styles.layerThree)} />
    </Fragment>
  );
}
