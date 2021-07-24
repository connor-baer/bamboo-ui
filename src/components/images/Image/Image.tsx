import React, { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { ImageProps } from '../../../types/props';
import { isArray } from '../../../util/fp';
import { isTransparent } from '../../../util/image';

import styles from './Image.module.css';

export type { ImageProps };

export const Image = forwardRef(
  (
    {
      color = 'var(--color-image-placeholder)',
      srcSet,
      sizes,
      className,
      style = {},
      ...props
    }: ImageProps,
    ref: Ref<HTMLImageElement>,
  ) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...props}
      ref={ref}
      srcSet={isArray(srcSet) ? srcSet.join(', ') : srcSet}
      sizes={isArray(sizes) ? sizes.join(', ') : sizes}
      className={cx(className, styles.base)}
      style={isTransparent(props.src) ? style : { ...style, background: color }}
    />
  ),
);

Image.displayName = 'Image';
