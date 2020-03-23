import { createContext } from 'react';

const INITIAL_STATE = {
  isFloating: false,
  isInvisible: false,
};

const NavigationContext = createContext(INITIAL_STATE);

export default NavigationContext;
