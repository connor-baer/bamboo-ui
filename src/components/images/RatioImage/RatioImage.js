import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { imagePropType } from '../../../util/shared-prop-types';
import useComponents from '../../../hooks/use-components';

const wrapperBaseStyles = () => css`
  display: block;
  position: relative;
  overflow: hidden;
  height: auto;
  width: 100%;
`;

const wrapperAspectRatioStyles = ({ aspectRatio }) => () =>
  aspectRatio &&
  css`
    height: 0;
    width: 100%;
    padding-top: ${(1 / aspectRatio) * 100}%;
  `;

const Wrapper = styled('div')(wrapperBaseStyles, wrapperAspectRatioStyles);

const imageBaseStyles = css`
  display: block;
  height: auto;
  max-height: 100%;
  width: 100%;
`;

const imageAspectRatioStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function RatioImage({ aspectRatio, className, ...props }) {
  const { Image } = useComponents();

  return (
    <Wrapper aspectRatio={aspectRatio} className={className}>
      <Image
        aspectRatio={aspectRatio}
        css={[imageBaseStyles, aspectRatio && imageAspectRatioStyles]}
        {...props}
      />
    </Wrapper>
  );
}

RatioImage.propTypes = {
  ...imagePropType,
  aspectRatio: PropTypes.number,
  className: PropTypes.string
};

/**
 * @component
 */
export default RatioImage;
