import { SVGProps } from 'react';
import cx from 'classnames';

import { ReactComponent as Loading } from '../../../icons/loading.svg';

import styles from './LoadingIcon.module.css';

export type LoadingIconProps = SVGProps<SVGSVGElement>;

export function LoadingIcon({
  width = 48,
  height = 48,
  className,
  ...props
}: LoadingIconProps): JSX.Element {
  return (
    <Loading
      className={cx(styles.base, className)}
      width={width}
      height={height}
      {...props}
    />
  );
}
