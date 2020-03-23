import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { childrenPropType } from '../util/shared-prop-types';
import Head from '../components/Head';
import Link from '../components/typography/Link';
import Image from '../components/images/Image';
import Align from '../components/layout/Align';

export const ComponentsContext = createContext({ Head, Link, Image, Align });

export function ComponentsProvider({ value: innerComponents = {}, children }) {
  const outerComponents = useContext(ComponentsContext) || {};
  const components = { ...outerComponents, ...innerComponents };

  return (
    <ComponentsContext.Provider value={components}>
      {children}
    </ComponentsContext.Provider>
  );
}

ComponentsProvider.propTypes = {
  value: PropTypes.shape({
    Head: PropTypes.any,
    Link: PropTypes.any,
    Image: PropTypes.any,
    Align: PropTypes.any,
  }),
  children: childrenPropType,
};

export default function useComponents() {
  return useContext(ComponentsContext);
}
