import { useEffect, useState } from 'react';

export function useMedia(
  expression: string,
  callback?: (matches: boolean) => void,
  initial = false,
): boolean {
  const [matches, setMatches] = useState(initial);

  useEffect(() => {
    const query = window.matchMedia(expression);

    const handleChange = () => {
      setMatches(query.matches);
      if (callback) {
        callback(query.matches);
      }
    };

    handleChange();

    query.addEventListener('change', handleChange);

    return () => {
      query.removeEventListener('change', handleChange);
    };
  }, [expression, callback]);

  return matches;
}
