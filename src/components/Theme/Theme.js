import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import ComponentsContext from '../../util/components-context';
import { childrenPropType } from '../../util/shared-prop-types';
import isServer from '../../util/is-server';
import isSaveData from '../../util/is-save-data';
import { setCookie } from '../../util/cookies';
import {
  createFontFace,
  loadFonts,
  preloadFonts
} from '../../styles/load-fonts';

const transitionStyles = ({ theme, isTransitioning }) =>
  isTransitioning &&
  css`
    *,
    *::before,
    *::after {
      transition: background-color ${theme.animations.micro},
        color ${theme.animations.micro}, fill ${theme.animations.micro},
        border-color ${theme.animations.micro} !important,
        text-shadow ${theme.animations.micro} !important;
    }
  `;

const ThemeTransition = styled('div')(transitionStyles);

export default class Theme extends Component {
  static propTypes = {
    cookies: PropTypes.object,
    initialThemeId: PropTypes.string,
    themes: PropTypes.object.isRequired,
    assetPrefix: PropTypes.string,
    children: childrenPropType
  };

  static defaultProps = {
    initialThemeId: 'standard',
    themes: {},
    cookies: {}
  };

  static contextType = ComponentsContext;

  constructor(props) {
    super(props);

    const { cookies, assetPrefix, initialThemeId: themeId } = props;
    const darkmode = cookies.darkmode === 'true';
    const reducedMotion = cookies.reducedMotion === 'true';

    const theme = this.getTheme(themeId, { darkmode, reducedMotion });

    if (assetPrefix && !isSaveData()) {
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
    const { children, assetPrefix = '' } = this.props;
    const { Head } = this.context;
    const theme = this.getTheme(themeId, config);
    const styles = () => theme.fonts.map(createFontFace(assetPrefix));
    return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <meta name="theme-color" content={theme.colors.bodyBg} />
            {preloadFonts(assetPrefix, theme.fonts)}
          </Head>
          <Global styles={styles} />
          <ThemeTransition isTransitioning={isTransitioning}>
            {children}
          </ThemeTransition>
        </>
      </ThemeProvider>
    );
  }
}
