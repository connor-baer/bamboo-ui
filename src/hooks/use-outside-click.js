import { useEffect } from 'react';

export function useOutsideClick(ref, callback, active = true) {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    if (!active) {
      document.removeEventListener('mousedown', handleClick);
      return undefined;
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback, active]);
}
