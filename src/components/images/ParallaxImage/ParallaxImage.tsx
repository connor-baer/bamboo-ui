import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import cx from 'classnames';

import { isServer } from '../../../util/is-server';
import { useComponents } from '../../../hooks/useComponents';
import { isTransparent } from '../../../util/image';
import { ImageProps } from '../../../types/props';
import { useMedia } from '../../../hooks/useMedia';

import styles from './ParallaxImage.module.css';

export interface ParallaxImageProps extends ImageProps {
  speed?: number;
}

export const ParallaxImage = forwardRef(
  (
    { speed = 75, color, className, style = {}, ...props }: ParallaxImageProps,
    ref: Ref<HTMLImageElement | null>,
  ) => {
    const { Image } = useComponents();

    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const timeout = useRef<number>();

    const [isLoading, setLoading] = useState(true);
    const [isIntersecting, setIntersecting] = useState(false);
    const [translateY, setTranslateY] = useState('0');

    const prefersReducedMotion = useMedia('(prefers-reduced-motion: reduce)');

    useImperativeHandle(ref, () => imageRef.current);

    useEffect(() => {
      if (imageRef.current && imageRef.current.complete) {
        setLoading(false);
      }
    }, []);

    const handleLoad = () => {
      setLoading(false);
    };

    useEffect(() => {
      const container = containerRef.current;
      if (isServer || prefersReducedMotion || !container) {
        return undefined;
      }

      // TODO: move outside effect?
      const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
        setIntersecting(entry.isIntersecting);
      };

      const sectionObserver = new IntersectionObserver(handleIntersection, {
        rootMargin: '50px',
      });
      sectionObserver.observe(container);

      return () => {
        sectionObserver.unobserve(container);
      };
    }, [prefersReducedMotion]);

    useEffect(() => {
      const container = containerRef.current;

      if (!isIntersecting || !container) {
        return undefined;
      }

      const handleScroll = () => {
        // Using both the element and viewport height normalises the speed across
        // different viewport sizes.
        const scrollHeight = container.clientHeight + window.innerHeight;
        const scrollRatio = window.scrollY / scrollHeight;
        const newTranslateY = (scrollRatio * speed).toFixed(2);

        setTranslateY(newTranslateY);
      };

      const cancelScroll = () => {
        if (timeout.current) {
          window.cancelAnimationFrame(timeout.current);
        }
      };

      const debouncedHandleScroll = () => {
        cancelScroll();
        timeout.current = window.requestAnimationFrame(handleScroll);
      };

      window.addEventListener('scroll', debouncedHandleScroll);

      return () => {
        window.removeEventListener('scroll', debouncedHandleScroll);
      };
    }, [isIntersecting, speed]);

    if (!props.src) {
      return null;
    }

    return (
      <div
        ref={containerRef}
        className={cx(styles.container, className)}
        style={
          isTransparent(props.src) ? style : { ...style, background: color }
        }
      >
        <Image
          {...props}
          ref={imageRef}
          onLoad={handleLoad}
          sizes="100vw"
          className={styles.image}
          style={{
            transform: `translate3d(0, ${translateY}%, 0)`,
            animationPlayState: isLoading ? 'paused' : 'running',
          }}
        />
      </div>
    );
  },
);

ParallaxImage.displayName = 'ParallaxImage';
