import { useContext, createContext, ReactNode, ReactElement } from 'react';

import { Head, HeadProps } from '../components/Head';
import { Link, LinkProps } from '../components/typography/Link';
import { Image, ImageProps } from '../components/images/Image';
import { Align, AlignProps } from '../components/layout/Align';

const defaultComponents = { Align, Head, Image, Link };

type ComponentsContextType = {
  Align: (props: AlignProps) => ReactElement | null;
  Head: (props: HeadProps) => any;
  Image: (props: ImageProps) => ReactElement | null;
  Link: <T>(props: LinkProps<T>) => ReactElement;
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
