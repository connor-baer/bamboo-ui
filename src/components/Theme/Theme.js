import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { sharedPropTypes } from '@sumup/circuit-ui';

import isServer from '../../util/is-server';
import isSaveData from '../../util/is-save-data';
import { setCookie } from '../../util/cookies';
import {
  createFontFace,
  loadFonts,
  preloadFonts
} from '../../styles/load-fonts';
import injectGlobalStyles from '../../styles/global-styles';

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

export default class Theme extends Component {
  static propTypes = {
    cookies: PropTypes.object,
    initialThemeId: PropTypes.string,
    themes: PropTypes.object.isRequired,
    fontBasePath: PropTypes.string,
    children: sharedPropTypes.childrenPropType
  };

  static defaultProps = {
    initialThemeId: 'standard',
    themes: {},
    cookies: {}
  };

  constructor(props) {
    super(props);

    const { cookies, fontBasePath, initialThemeId: themeId } = props;
    const darkmode = cookies.darkmode === 'true';
    const reducedMotion = cookies.reducedMotion === 'true';

    const theme = this.getTheme(themeId, { darkmode, reducedMotion });

    const custom = fontBasePath
      ? theme.fonts.map(createFontFace(fontBasePath)).join('')
      : '';
    injectGlobalStyles({ theme, custom });

    if (fontBasePath && !isSaveData()) {
      loadFonts(theme.fonts);
    }

    this.state = {
      themeId,
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

  setTheme = themeId =>
    new Promise((resolve, reject) => {
      if (themeId === this.state.themeId) {
        resolve();
        return;
      }
      if (!this.props.themes[themeId]) {
        reject();
        return;
      }
      this.animateStateChange({ themeId }).then(() => resolve());
    });

  getTheme = (themeId, config) => {
    const { themes } = this.props;
    const themeFn = themes[themeId] || themes.standard;
    return {
      ...themeFn(config),
      setTheme: this.setTheme,
      toggleDarkmode: this.toggleDarkmode,
      toggleReducedMotion: this.toggleReducedMotion
    };
  };

  render() {
    const { isTransitioning, themeId, ...config } = this.state;
    const { children, fontBasePath } = this.props;
    const theme = this.getTheme(themeId, config);
    return (
      <Fragment>
        <Head>
          <meta name="theme-color" content={theme.colors.bodyBg} />
          {preloadFonts(fontBasePath, theme.fonts)}
        </Head>
        <ThemeProvider theme={theme}>
          <ThemeTransition isTransitioning={isTransitioning}>
            {children}
          </ThemeTransition>
        </ThemeProvider>
      </Fragment>
    );
  }
}
