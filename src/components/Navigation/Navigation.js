import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../util/prop-types';
import { useAnimationFrame } from '../../hooks/use-animation-frame';

import { NavigationContext } from './NavigationContext';
import Brand from './components/Brand';
import Links from './components/Links';
import Menu from './components/Menu';

const headerBaseStyles = ({ theme }) => css`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.xs} ${theme.spacing.s};
  transition: opacity ${theme.animation.standard},
    background-color ${theme.animation.standard},
    padding ${theme.animation.standard};
  background-color: ${theme.color.bodyBg};
  z-index: ${theme.zIndex.navigation};

  &:hover {
    opacity: 1;
  }

  ${theme.mq.lap} {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: ${theme.spacing.m} ${theme.spacing.l};
  }
`;

const headerTransparentStyles = ({ isTransparent }) =>
  isTransparent &&
  css`
    background-color: transparent;
  `;

const headerInvisibleStyles = ({ theme, isInvisible }) =>
  isInvisible &&
  css`
    ${theme.mq.lap} {
      opacity: 0;
    }
  `;

const headerFloatingStyles = ({ theme, isFloating }) =>
  isFloating &&
  css`
    ${theme.mq.lap} {
      padding-top: ${theme.spacing.s};
      padding-bottom: ${theme.spacing.s};
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      background-color: ${theme.color.bodyBg};
    }
  `;

const Header = styled('header')(
  headerBaseStyles,
  headerTransparentStyles,
  headerInvisibleStyles,
  headerFloatingStyles,
);

export function Navigation({ children, isTransparent, ...rest }) {
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
    <Header
      isTransparent={isTransparent}
      isInvisible={isInvisible}
      isFloating={isFloating}
      {...rest}
    >
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
  children: childrenPropType,
  isTransparent: PropTypes.bool,
};
