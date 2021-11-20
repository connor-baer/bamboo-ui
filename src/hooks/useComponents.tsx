import { useContext, createContext, ReactNode } from 'react';

import { Link, LinkProps } from '../components/typography/Link';
import { Image, ImageProps } from '../components/images/Image';
import { Align, AlignProps } from '../components/layout/Align';

const defaultComponents = { Align, Image, Link };

type ComponentsContextType = {
  Align: (props: AlignProps) => JSX.Element | null;
  Image: (props: ImageProps) => JSX.Element | null;
  Link: <T>(props: LinkProps<T>) => JSX.Element | null;
};

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
