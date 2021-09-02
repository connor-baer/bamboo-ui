import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  Ref,
} from 'react';
import cx from 'classnames';

import { ImageProps } from '../../../types/props';
import { useComponents } from '../../../hooks/useComponents';
import { isTransparent } from '../../../util/image';

import styles from './RatioImage.module.css';

export interface RatioImageProps extends ImageProps {
  aspectRatio?: number;
}

export const RatioImage = forwardRef(
  (
    {
      color = 'var(--background-image-placeholder)',
      aspectRatio,
      className,
      style = {},
      ...props
    }: RatioImageProps,
    ref: Ref<HTMLImageElement | null>,
  ) => {
    const { Image } = useComponents();
    const imageRef = useRef<HTMLImageElement>(null);
    const [isLoading, setLoading] = useState(true);

    useImperativeHandle(ref, () => imageRef.current);

    useEffect(() => {
      if (imageRef.current && imageRef.current.complete) {
        setLoading(false);
      }
    }, []);

    const handleLoad = () => {
      setLoading(false);
    };

    const wrapperStyle = style;

    if (aspectRatio) {
      wrapperStyle.paddingTop = `${((1 / aspectRatio) * 100).toFixed(2)}%`;
    }
    if (!isTransparent(props.src)) {
      wrapperStyle.background = color;
    }

    return (
      <div
        className={cx(
          styles.wrapper,
          aspectRatio && styles.wrapperAspectRatio,
          className,
        )}
        style={wrapperStyle}
      >
        <Image
          {...props}
          ref={imageRef}
          onLoad={handleLoad}
          className={cx(styles.image, aspectRatio && styles.imageAspectRatio)}
          style={{ animationPlayState: isLoading ? 'paused' : 'running' }}
        />
      </div>
    );
  },
);

RatioImage.displayName = 'RatioImage';
