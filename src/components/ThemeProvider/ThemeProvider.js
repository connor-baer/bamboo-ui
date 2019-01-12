import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { sharedPropTypes } from '@sumup/circuit-ui';

import isServer from '../../util/is-server';
import { setCookie } from '../../util/cookies';

const transitionStyles = ({ theme, isTransitioning }) =>
  isTransitioning &&
  css`
    * {
      transition: background-color ${theme.animations.micro},
        color ${theme.animations.micro}, fill ${theme.animations.micro},
        border-color ${theme.animations.micro} !important;
    }
  `;

const ThemeTransition = styled('div')(transitionStyles);

export default class ThemeProvider extends Component {
  static propTypes = {
    cookies: PropTypes.object,
    theme: PropTypes.func.isRequired,
    children: sharedPropTypes.childrenPropType
  };

  static defaultProps = {
    cookies: {}
  };

  constructor(props) {
    super(props);

    const { cookies = {} } = props;
    const darkmode = cookies.darkmode === 'true';
    const reducedMotion = cookies.reducedMotion === 'true';

    this.state = {
      darkmode,
      reducedMotion,
      isTransitioning: false
    };
  }

  componentDidMount() {
    if (isServer) {
      return;
    }

    this.motionQuery = window.matchMedia('(prefers-reduced-motion)');
    this.motionQuery.addListener(this.handleReducedMotionChange);

    if (this.motionQuery.matches) {
      setCookie('reducedMotion', true);
      this.setState({ reducedMotion: true });
    }

    this.colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.colorSchemeQuery.addListener(this.handleColorSchemeChange);

    if (this.colorSchemeQuery.matches) {
      setCookie('darkmode', true);
      this.setState({ darkmode: true });
    }
  }

  componentWillUnmount() {
    this.motionQuery.removeListener(this.handleReducedMotionChange);
    this.colorSchemeQuery.removeListener(this.handleColorSchemeChange);
  }

  handleReducedMotionChange = () => {
    const reducedMotion = this.motionQuery.matches;
    setCookie('reducedMotion', reducedMotion);
    this.animateStateChange({ reducedMotion });
  };

  handleColorSchemeChange = () => {
    const darkmode = this.colorSchemeQuery.matches;
    setCookie('darkmode', darkmode);
    this.animateStateChange({ darkmode });
  };

  animateStateChange = newState =>
    new Promise(resolve => {
      this.setState({ ...newState, isTransitioning: true }, () => {
        // Wait for transition animation to finish
        setTimeout(() => {
          this.setState({ isTransitioning: false });
          resolve();
        }, 200);
      });
    });

  toggleState = key => () => {
    const value = !this.state[key];
    setCookie(key, value);
    return this.animateStateChange({ [key]: value });
  };

  toggleDarkmode = this.toggleState('darkmode');

  toggleReducedMotion = this.toggleState('reducedMotion');

  render() {
    const { children, theme: themeFn } = this.props;
    const theme = themeFn
      ? {
          ...themeFn(this.state),
          toggleDarkmode: this.toggleDarkmode,
          toggleReducedMotion: this.toggleReducedMotion
        }
      : {};
    return (
      <EmotionThemeProvider theme={theme}>
        <ThemeTransition isTransitioning={this.state.isTransitioning}>
          {children}
        </ThemeTransition>
      </EmotionThemeProvider>
    );
  }
}
