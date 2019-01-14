import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import isServer from '../../util/is-server';
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

  ${theme.mq.mega`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: ${theme.spacings.giga};
  `};
`;

const headerInvisibleStyles = ({ theme, isInvisible }) =>
  isInvisible &&
  css`
    ${theme.mq.mega`
      opacity: 0;
    `};
  `;
const headerFloatingStyles = ({ theme, isFloating }) =>
  isFloating &&
  css`
    ${theme.mq.mega`
      padding: ${theme.spacings.kilo} ${theme.spacings.giga};
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    `};
  `;

const Header = styled('header')(
  headerBaseStyles,
  headerInvisibleStyles,
  headerFloatingStyles
);

const INITIAL_STATE = {
  isFloating: false,
  isInvisible: false
};

const NavigationContext = React.createContext(INITIAL_STATE);

class Navigation extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    if (isServer) {
      return;
    }
    this.initScrollListener();
  }

  componentWillUnmount() {
    if (isServer) {
      return;
    }
    this.removeScrollListener();
  }

  initScrollListener = () => {
    this.currentScrollY = 0;
    window.addEventListener('scroll', this.debouncedHandleScroll);
    this.listeningForScroll = true;
  };

  removeScrollListener = () => {
    if (this.listeningForScroll) {
      window.removeEventListener('scroll', this.debouncedHandleScroll);
      this.listeningForScroll = false;
    }
  };

  cancelScroll = () => {
    if (this.timeoutScroll) {
      window.cancelAnimationFrame(this.timeoutScroll);
    }
  };

  debouncedHandleScroll = () => {
    this.cancelScroll();
    this.timeoutScroll = window.requestAnimationFrame(this.handleScroll);
  };

  handleScroll = () => {
    const latestKnownScrollY = window.scrollY;
    const scrolledDown = this.currentScrollY < latestKnownScrollY;
    const isFloating = latestKnownScrollY > 44;
    const isInvisible = isFloating && scrolledDown;
    this.setState({ isFloating, isInvisible });
    this.currentScrollY = latestKnownScrollY;
  };

  render() {
    return (
      <Header {...this.state}>
        <NavigationContext.Provider value={this.state}>
          {this.props.children}
        </NavigationContext.Provider>
      </Header>
    );
  }
}

Navigation.Brand = Brand;
Navigation.Links = Links;
Navigation.Menu = Menu;

export { NavigationContext };

export default Navigation;
