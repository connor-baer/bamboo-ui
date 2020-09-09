import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { includes } from 'lodash/fp';

import { imagePropType } from '../../../util/prop-types';
import { useComponents } from '../../../hooks/use-components';

const wrapperBaseStyles = ({ theme, color }) => css`
  display: block;
  position: relative;
  overflow: hidden;
  height: auto;
  width: 100%;
  background: ${color || theme.color.neutral[300]};
`;

const wrapperPlaceholderStyles = ({ theme, isTransparent, color }) =>
  !isTransparent &&
  css`
    background: ${color || theme.color.neutral[300]};
  `;

const wrapperAspectRatioStyles = ({ aspectRatio }) => () =>
  aspectRatio &&
  css`
    height: 0;
    width: 100%;
    padding-top: ${((1 / aspectRatio) * 100).toFixed(2)}%;
  `;

const Wrapper = styled('div')(
  wrapperBaseStyles,
  wrapperPlaceholderStyles,
  wrapperAspectRatioStyles,
);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const imageBaseStyles = css`
  display: block;
  height: auto;
  max-height: 100%;
  width: 100%;
`;

const imageAspectRatioStyles = ({ aspectRatio }) =>
  aspectRatio &&
  css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

const imageLoadingStyles = ({ theme, isLoading }) => css`
  animation: ${theme.animation.standard} ${fadeIn};
  animation-play-state: ${isLoading ? 'paused' : 'running'};
`;

export function RatioImage({ aspectRatio, className, ...props }) {
  const { Image } = useComponents();
  const [isLoading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const isTransparent = props.src && includes('.png', props.src);

  return (
    <Wrapper
      aspectRatio={aspectRatio}
      isTransparent={isTransparent}
      color={props.color}
      className={className}
    >
      <Image
        onLoad={handleLoad}
        aspectRatio={aspectRatio}
        css={(theme) => [
          imageBaseStyles,
          imageAspectRatioStyles({ aspectRatio }),
          imageLoadingStyles({ theme, isLoading }),
        ]}
        {...props}
      />
    </Wrapper>
  );
}

RatioImage.propTypes = {
  ...imagePropType,
  aspectRatio: PropTypes.number,
  className: PropTypes.string,
};
