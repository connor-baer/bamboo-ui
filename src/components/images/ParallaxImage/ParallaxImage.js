import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { themePropType, imagePropType } from '../../../util/shared-prop-types';
import { ComponentsContext } from '../../../hooks/use-components';
import isServer from '../../../util/is-server';

const containerStyles = () => css`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 25vh;
`;

const Container = styled('div')(containerStyles);

const imageStyles = () => css`
  position: absolute;
  top: -100%;
  left: 0;
  bottom: -100%;
  right: 0;
  width: 100%;
  height: 300%;
  object-fit: cover;
`;

export default class ParallaxImage extends Component {
  static propTypes = {
    ...imagePropType,
    speed: PropTypes.number,
    theme: themePropType,
    className: PropTypes.string
  };

  static defaultProps = {
    speed: 75,
    theme: {}
  };

  static contextType = ComponentsContext;

  constructor(props) {
    super(props);
    this.containerRef = createRef();

    this.state = {
      translateY: 0
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
      rootMargin: '50px'
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

  render() {
    const { className, speed, theme, ...image } = this.props;
    const { Image } = this.context;
    const { translateY } = this.state;

    if (!image.src) {
      return null;
    }

    return (
      <Container ref={this.containerRef} className={className}>
        <Image
          {...image}
          css={imageStyles}
          sizes="100vw"
          style={{ transform: `translate3d(0, ${translateY}%, 0)` }}
        />
      </Container>
    );
  }
}
