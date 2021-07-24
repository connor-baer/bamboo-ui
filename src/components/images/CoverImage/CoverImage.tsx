import React, { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { RatioImage, RatioImageProps } from '../RatioImage';

import styles from './CoverImage.module.css';

export type CoverImageProps = RatioImageProps;

export const CoverImage = forwardRef(
  ({ className, ...props }: CoverImageProps, ref: Ref<HTMLImageElement>) => (
    <RatioImage {...props} ref={ref} className={cx(className, styles.base)} />
  ),
);

CoverImage.displayName = 'CoverImage';
