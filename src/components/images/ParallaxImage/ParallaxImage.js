import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { includes } from 'lodash/fp';

import { themePropType, imagePropType } from '../../../util/prop-types';
import { isServer } from '../../../util/is-server';
import { ComponentsContext } from '../../../hooks/use-components';

const containerBaseStyles = () => css`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 25vh;
`;

const containerPlaceholderStyles = ({ theme, isTransparent, color }) =>
  !isTransparent &&
  css`
    background: ${color || theme.color.neutral[300]};
  `;

const Container = styled('div')(
  containerBaseStyles,
  containerPlaceholderStyles,
);

const imageBaseStyles = css`
  position: absolute;
  top: -100%;
  left: 0;
  bottom: -100%;
  right: 0;
  width: 100%;
  height: 300%;
  object-fit: cover;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const imageLoadingStyles = ({ theme, isLoading }) => css`
  animation: ${theme.animation.standard} ${fadeIn};
  animation-play-state: ${isLoading ? 'paused' : 'running'};
`;

export class ParallaxImage extends Component {
  static propTypes = {
    ...imagePropType,
    speed: PropTypes.number,
    theme: themePropType,
    className: PropTypes.string,
  };

  static defaultProps = {
    speed: 75,
    theme: {},
  };

  static contextType = ComponentsContext;

  constructor(props) {
    super(props);
    this.containerRef = createRef();

    this.state = {
      translateY: 0,
      isLoading: true,
    };
  }

  componentDidMount() {
    if (
      isServer ||
      this.props.theme.reducedMotion ||
      !this.containerRef.current
    ) {
      return;
    }
    this.initIntersectionObserver();
  }

  componentDidUpdate(prevProps) {
    const { reducedMotion } = this.props.theme;
    const prevReducedMotion = prevProps.theme.reducedMotion;

    if (prevReducedMotion && !reducedMotion) {
      this.initIntersectionObserver();
    } else if (!prevReducedMotion && reducedMotion) {
      this.removeIntersectionObserver();
      this.removeScrollListener();
    }
  }

  componentWillUnmount() {
    if (isServer) {
      return;
    }
    this.removeIntersectionObserver();
    this.removeScrollListener();
  }

  initIntersectionObserver = () => {
    this.sectionObserver = new IntersectionObserver(this.handleIntersection, {
      rootMargin: '50px',
    });
    this.sectionObserver.observe(this.containerRef.current);
    this.listeningForIntersection = true;
  };

  removeIntersectionObserver = () => {
    if (this.listeningForIntersection) {
      this.sectionObserver.unobserve(this.containerRef.current);
      this.listeningForIntersection = false;
    }
  };

  handleIntersection = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      this.initScrollListener();
    } else {
      this.removeScrollListener();
    }
  };

  initScrollListener = () => {
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
    // Using both the element and viewport height normalises the speed across
    // different viewport sizes.
    const scrollHeight =
      this.containerRef.current.clientHeight + window.innerHeight;
    const scrollRatio = window.scrollY / scrollHeight;
    const translateY = (scrollRatio * this.props.speed).toFixed(2);

    if (translateY === this.state.translateY) {
      return;
    }

    this.setState({ translateY });
  };

  handleLoad = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { Image } = this.context;
    const { className, speed, theme, ...image } = this.props;
    const { translateY, isLoading } = this.state;

    if (!image.src) {
      return null;
    }

    const isTransparent = image.src && includes('.png', image.src);

    return (
      <Container
        ref={this.containerRef}
        isTransparent={isTransparent}
        className={className}
      >
        <Image
          onLoad={this.handleLoad}
          sizes="100vw"
          {...image}
          css={[imageBaseStyles, imageLoadingStyles({ theme, isLoading })]}
          style={{ transform: `translate3d(0, ${translateY}%, 0)` }}
        />
      </Container>
    );
  }
}
