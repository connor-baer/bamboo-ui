import cx from 'classnames';
import { Loader, IconProps } from 'react-feather';

import styles from './LoadingIcon.module.css';

export type LoadingIconProps = IconProps;

export function LoadingIcon({
  className,
  ...props
}: LoadingIconProps): JSX.Element {
  return (
    <Loader className={cx(styles.base, className)} strokeWidth={3} {...props} />
  );
}
