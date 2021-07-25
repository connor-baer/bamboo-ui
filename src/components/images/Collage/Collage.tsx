import React, { HTMLProps } from 'react';
import cx from 'classnames';

import { isEmpty } from '../../../util/fp';
import { RatioImage, RatioImageProps } from '../RatioImage';

import styles from './Collage.module.css';

export interface CollageProps extends HTMLProps<HTMLDivElement> {
  images?: [RatioImageProps, RatioImageProps, RatioImageProps];
}

export function Collage({
  className,
  images,
  ...props
}: CollageProps): JSX.Element | null {
  if (!images || isEmpty(images) || images.length < 3) {
    return null;
  }

  return (
    <div className={cx(styles.container, className)} {...props}>
      <div className={cx(styles.wrapper, styles.wrapperOuter)}>
        <RatioImage {...images[0]} sizes={''} aspectRatio={1 / 1} />
      </div>
      <div className={cx(styles.wrapper, styles.wrapperInner)}>
        <RatioImage {...images[1]} sizes={''} aspectRatio={1.66 / 1} />
      </div>
      <div className={cx(styles.wrapper, styles.wrapperOuter)}>
        <RatioImage {...images[2]} sizes={''} aspectRatio={1 / 1} />
      </div>
    </div>
  );
}
