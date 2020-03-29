import { useEffect, useState } from 'react';

import { isServer } from '../util/is-server';

export function useMedia(expression, callback) {
  const query = isServer ? { matches: false } : window.matchMedia(expression);
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
