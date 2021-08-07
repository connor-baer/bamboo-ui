import { HTMLProps, ReactNode } from 'react';
import cx from 'classnames';

import { isEmpty } from '../../../util/fp';
import { useComponents } from '../../../hooks/useComponents';
import { AlignProp, ImageProps } from '../../../types/props';
import { RatioImage } from '../RatioImage';
import { Caption } from '../Caption';

import styles from './Gallery.module.css';

export interface GalleryProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  images: ImageProps[];
  caption: ReactNode;
  align: AlignProp;
}

// function getSizes(theme, align) {
//   const lapMap = {
//     [RIGHT]: '360px',
//     [LEFT]: '360px',
//     [CENTER]: '755px',
//     [FULL]: '1155px',
//   };
//   const lapSize = `(min-width: ${theme.breakpoints.lap}) ${lapMap[align]}`;

//   const handMap = {
//     [RIGHT]: '380px',
//     [LEFT]: '380px',
//     [CENTER]: '790px',
//     [FULL]: '950px',
//   };
//   const handSize = `(min-width: ${theme.breakpoints.hand}) ${handMap[align]}`;

//   const mobileSize = '100vw';

//   return [lapSize, handSize, mobileSize].join(', ');
// }

export function Gallery({
  align = 'center',
  images,
  caption,
  className,
  ...props
}: GalleryProps): JSX.Element | null {
  const { Align } = useComponents();

  if (isEmpty(images)) {
    return null;
  }

  const isSingleImage = images.length === 1;
  const isCenterAligned = align === 'center' || align === 'full';
  const isSideAligned = align === 'left' || align === 'right';

  // const sizes = getSizes(theme, align);

  const width =
    !isSingleImage && isCenterAligned
      ? ` calc((100% / ${images.length}) - (var(--spacing-gutter) / 2))`
      : undefined;

  return (
    <Align align={align}>
      <div {...props} className={cx(styles.container, className)}>
        {images.map((image, i) => (
          <div
            key={i}
            className={cx({
              [styles.wrapperSide]: !isSingleImage && isSideAligned,
              [styles.wrapperSingle]: isSingleImage,
            })}
            style={{ width }}
          >
            <RatioImage {...image} aspectRatio={1 / 1} />
          </div>
        ))}
      </div>
      {caption && <Caption as="p">{caption}</Caption>}
    </Align>
  );
}
