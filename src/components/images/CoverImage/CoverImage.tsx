import { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { RatioImage, RatioImageProps } from '../RatioImage';

import styles from './CoverImage.module.css';

export type CoverImageProps = RatioImageProps;

export const CoverImage = forwardRef(
  ({ className, ...props }: CoverImageProps, ref: Ref<HTMLImageElement>) => (
    <RatioImage {...props} ref={ref} className={cx(styles.base, className)} />
  ),
);

CoverImage.displayName = 'CoverImage';
