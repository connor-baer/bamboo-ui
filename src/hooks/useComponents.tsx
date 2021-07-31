import React, { useContext, createContext, ReactNode } from 'react';

import { Head } from '../components/Head';
import { Link } from '../components/typography/Link';
import { Image } from '../components/images/Image';
import { Align } from '../components/layout/Align';

const defaultComponents = { Align, Head, Image, Link };

type ComponentsContextType = typeof defaultComponents;

export const ComponentsContext = createContext<ComponentsContextType>(
  defaultComponents,
);

export interface ComponentsProviderProps {
  value: Partial<ComponentsContextType>;
  children: ReactNode;
}

export function ComponentsProvider({
  value: innerComponents,
  children,
}: ComponentsProviderProps): JSX.Element {
  const outerComponents = useContext(ComponentsContext) || {};
  const components = {
    ...defaultComponents,
    ...outerComponents,
    ...innerComponents,
  };

  return (
    <ComponentsContext.Provider value={components}>
      {children}
    </ComponentsContext.Provider>
  );
}

export function useComponents(): ComponentsContextType {
  return useContext(ComponentsContext);
}
