import { useRef, useLayoutEffect } from 'react';

export default function useAnimationFrame(callback) {
  const callbackRef = useRef(callback);
  const frameRef = useRef();

  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loop = () => {
    frameRef.current = requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb();
  };

  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, [loop]);
}
