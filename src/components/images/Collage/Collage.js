import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty } from 'lodash/fp';

import { imagePropType } from '../../../util/prop-types';
import RatioImage from '../RatioImage';

const containerStyles = ({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${theme.mq.hand} {
    flex-wrap: nowrap;
  }
`;

const ImagesContainer = styled('div')(containerStyles);

const baseWrapperStyles = ({ theme }) => css`
  &:first-child {
    display: none;
  }
  &:nth-child(2) {
    margin-right: 0;
  }
  &:last-child {
    display: none;
  }

  ${theme.mq.hand} {
    margin-right: calc(${theme.spacing.gutter} / 2);

    &:first-child {
      display: block;
    }
  }

  ${theme.mq.desk} {
    &:last-child {
      display: block;
      margin-right: 0;
    }
    &:nth-child(2) {
      margin-right: calc(${theme.spacing.gutter} / 2);
    }
  }
`;

const outerWrapperStyles = ({ theme }) => css`
  width: 37.6%;

  ${theme.mq.desk} {
    width: 27.3%;
  }
`;

const innerWrapperStyles = ({ theme }) => css`
  width: 100%;

  ${theme.mq.hand} {
    width: 62.4%;
  }

  ${theme.mq.desk} {
    width: 45.4%;
  }
`;

const OuterWrapper = styled('div')(baseWrapperStyles, outerWrapperStyles);
const InnerWrapper = styled('div')(baseWrapperStyles, innerWrapperStyles);

function Collage({ images = [] }) {
  if (isEmpty(images) || images.length < 3) {
    return null;
  }

  // FIXME: What is this?
  // const sizes = getSizes(theme);

  return (
    <ImagesContainer>
      <OuterWrapper>
        <RatioImage {...images[0]} sizes={''} aspectRatio={1 / 1} />
      </OuterWrapper>
      <InnerWrapper>
        <RatioImage {...images[1]} sizes={''} aspectRatio={1.66 / 1} />
      </InnerWrapper>
      <OuterWrapper>
        <RatioImage {...images[2]} sizes={''} aspectRatio={1 / 1} />
      </OuterWrapper>
    </ImagesContainer>
  );
}

Collage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(imagePropType)),
};

/**
 * @component
 */
export default Collage;
