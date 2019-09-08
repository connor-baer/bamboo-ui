import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../util/shared-prop-types';
import useAnimationFrame from '../../hooks/use-animation-frame';
import NavigationContext from './NavigationContext';
import Brand from './components/Brand';
import Links from './components/Links';
import Menu from './components/Menu';

const headerBaseStyles = ({ theme }) => css`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacings.kilo};
  transition: opacity ${theme.animations.standard},
    padding ${theme.animations.standard};
  background-color: ${theme.colors.bodyBg};
  z-index: 999;

  &:hover {
    opacity: 1;
  }

  ${theme.mq.mega} {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: ${theme.spacings.giga};
  }
`;

const headerInvisibleStyles = ({ theme, isInvisible }) =>
  isInvisible &&
  css`
    ${theme.mq.mega} {
      opacity: 0;
    }
  `;

const headerFloatingStyles = ({ theme, isFloating }) =>
  isFloating &&
  css`
    ${theme.mq.mega} {
      padding-top: ${theme.spacings.kilo};
      padding-bottom: ${theme.spacings.kilo};
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }
  `;

const Header = styled('header')(
  headerBaseStyles,
  headerInvisibleStyles,
  headerFloatingStyles
);

function Navigation({ children, ...rest }) {
  const [isFloating, setFloating] = useState(false);
  const [isInvisible, setInvisible] = useState(false);
  const currentScrollY = useRef();
  const currentScrollDirection = useRef();

  const handleScroll = useAnimationFrame(() => {
    const latestKnownScrollY = window.scrollY;
    const scrolledDown =
      currentScrollY.current === latestKnownScrollY
        ? currentScrollDirection.current
        : currentScrollY.current <= latestKnownScrollY;

    setFloating(latestKnownScrollY > 44);
    setInvisible(isFloating && scrolledDown);

    currentScrollY.current = latestKnownScrollY;
    currentScrollDirection.current = scrolledDown;
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Header isInvisible={isInvisible} isFloating={isFloating} {...rest}>
      <NavigationContext.Provider value={{ isFloating, isInvisible }}>
        {children}
      </NavigationContext.Provider>
    </Header>
  );
}

Navigation.Brand = Brand;
Navigation.Links = Links;
Navigation.Menu = Menu;

Navigation.propTypes = {
  children: childrenPropType
};

/**
 * @component
 */
export default Navigation;
