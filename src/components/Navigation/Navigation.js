import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType, userPropType } from '../../util/prop-types';
import { useAnimationFrame } from '../../hooks/use-animation-frame';

import { Links } from './components/Links';
import { Brand } from './components/Brand';
import { Menu } from './components/Menu';

const headerBaseStyles = ({ theme }) => css`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.xs} ${theme.spacing.gutter};
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
    padding: ${theme.spacing.m} ${theme.spacing.gutter};
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
      box-shadow: ${theme.shadow.m};
      background-color: ${theme.color.bodyBg};
    }
  `;

const Header = styled('header')(
  headerBaseStyles,
  headerTransparentStyles,
  headerInvisibleStyles,
  headerFloatingStyles,
);

const Wrapper = styled('div')`
  display: flex;
`;

export function Navigation({
  isTransparent,
  brand,
  links,
  user,
  menu,
  ...rest
}) {
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
      <Brand {...brand} isTransparent={isTransparent} />

      <Wrapper>
        <Links links={links} isInvisible={isInvisible} />
        <Menu user={user}>{menu}</Menu>
      </Wrapper>
    </Header>
  );
}

Navigation.propTypes = {
  isTransparent: PropTypes.bool,
  brand: PropTypes.shape({
    siteLogo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    siteUrl: PropTypes.string,
    siteName: PropTypes.string,
    isHomepage: PropTypes.bool,
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: childrenPropType,
      url: PropTypes.string,
      icon: childrenPropType,
    }),
  ),
  user: userPropType,
  menu: childrenPropType,
};
