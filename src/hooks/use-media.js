import { useEffect, useState } from 'react';

export function useMedia(expression, callback, initial = false) {
  const [matches, setMatches] = useState(initial);

  useEffect(() => {
    const query = window.matchMedia(expression);

    if (callback) {
      callback(query.matches);
    }

    const handleChange = () => {
      setMatches(query.matches);
      if (callback) {
        callback(query.matches);
      }
    };

    query.addListener(handleChange);

    return () => {
      query.removeListener(handleChange);
    };
  }, [expression, callback]);

  return matches;
}
