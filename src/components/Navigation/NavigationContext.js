import { createContext } from 'react';

const INITIAL_STATE = {
  isFloating: false,
  isInvisible: false,
};

export const NavigationContext = createContext(INITIAL_STATE);
