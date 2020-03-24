import { useEffect, useState } from 'react';

export function useMedia(expression, callback) {
  const query = window.matchMedia(expression);
  const [matches, setMatches] = useState(query.matches);

  useEffect(() => {
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
  }, [query, callback]);

  return matches;
}
