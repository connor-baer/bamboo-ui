import { useRef, useLayoutEffect, useEffect } from 'react';

import isServer from '../util/is-server';

// Silence React warnings during SSR. Taken from:
// https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
const useIsomorphicLayoutEffect = isServer ? useLayoutEffect : useEffect;

export default function useAnimationFrame(callback) {
  const callbackRef = useRef(callback);
  const frameRef = useRef();

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loop = () => {
    frameRef.current = requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb();
  };

  useIsomorphicLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, [loop]);
}
