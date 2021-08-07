import { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { RatioImage, RatioImageProps } from '../RatioImage';

import styles from './Avatar.module.css';

export type AvatarProps = Omit<RatioImageProps, 'aspectRatio'>;

export const Avatar = forwardRef(
  ({ className, ...props }: AvatarProps, ref: Ref<HTMLImageElement>) => (
    <RatioImage
      {...props}
      ref={ref}
      aspectRatio={1}
      className={cx(styles.base, className)}
    />
  ),
);

Avatar.displayName = 'Avatar';
