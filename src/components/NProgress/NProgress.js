import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import NProgressJS from 'nprogress';
import { Global, css } from '@emotion/core';

export default class NProgress extends Component {
  static propTypes = {
    delay: PropTypes.number
  };

  static defaultProps = {
    delay: 500
  };

  componentDidMount() {
    Router.events.on('routeChangeStart', () => this.startProgress());
    Router.events.on('routeChangeComplete', () => this.endProgress());
    Router.events.on('routeChangeError', () => this.endProgress());
  }

  startProgress = () => {
    this.progressTimerId = setTimeout(() => {
      NProgressJS.start();
      this.progressTimerId = null;
    }, this.props.delay);
  };

  endProgress = () => {
    if (this.progressTimerId) {
      clearTimeout(this.progressTimerId);
    } else {
      NProgressJS.done();
    }
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Global
        styles={theme => css`
          #nprogress {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            background: ${theme.colors.white};
            height: 3px;
            pointer-events: none;
            z-index: ${theme.zIndexes.nprogress};
          }

          #nprogress .bar {
            background: ${theme.colors.p500};
            height: 100%;
            width: 100%;
          }

          #nprogress .peg {
            box-shadow: 0 0 10px ${theme.colors.p500},
              0 0 5px ${theme.colors.p500};
            display: block;
            height: 100%;
            opacity: 1;
            position: absolute;
            right: 0;
            transform: rotate(3deg) translate(0, -4px);
            width: 100px;
          }
        `}
      />
    );
  }
}
