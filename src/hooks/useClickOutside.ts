import { RefObject, useEffect, useRef } from 'react';

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
  active = true,
): void {
  const isOutsideClick = useRef(false);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const handleOutsideMousedown = (event: MouseEvent) => {
      isOutsideClick.current = ref.current
        ? !ref.current.contains(event.target as Node)
        : false;
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (isOutsideClick.current) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleOutsideMousedown);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideMousedown);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref, callback, active]);
}
