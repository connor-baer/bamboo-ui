import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty, omit } from 'lodash/fp';

import { imagePropType } from '../../../util/shared-prop-types';
import RatioImage from '../RatioImage';

const containerStyles = ({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${theme.spacings.zetta};

  ${theme.mq.kilo} {
    flex-wrap: nowrap;
  }
`;

const ImagesContainer = styled('div')(containerStyles);

const baseWrapperStyles = ({ theme }) => css`
  ${theme.mq.kilo} {
    margin-right: ${theme.spacings.mega};
  }

  ${theme.mq.mega} {
    &:last-child {
      margin-right: 0;
    }
  }

  ${theme.mq.untilKilo} {
    &:first-child {
      display: none;
    }
  }

  ${theme.mq.untilMega} {
    &:nth-child(2) {
      margin-right: 0;
    }
    &:last-child {
      display: none;
    }
  }
`;

const outerWrapperStyles = ({ theme }) => css`
  width: 37.6%;

  ${theme.mq.mega} {
    width: 27.3%;
  }
`;

const innerWrapperStyles = ({ theme }) => css`
  width: 100%;

  ${theme.mq.kilo} {
    width: 62.4%;
  }

  ${theme.mq.mega} {
    width: 45.4%;
  }
`;

const OuterWrapper = styled('div')(baseWrapperStyles, outerWrapperStyles);
const InnerWrapper = styled('div')(baseWrapperStyles, innerWrapperStyles);

function Collage({ images }) {
  if (isEmpty(images) || images.length < 3) {
    return null;
  }

  // FIXME: What is this?
  // const sizes = getSizes(theme);

  return (
    <ImagesContainer>
      <OuterWrapper>
        <RatioImage
          {...omit('toString', images[0])}
          sizes={''}
          aspectRatio={1 / 1}
        />
      </OuterWrapper>
      <InnerWrapper>
        <RatioImage
          {...omit('toString', images[1])}
          sizes={''}
          aspectRatio={1.66 / 1}
        />
      </InnerWrapper>
      <OuterWrapper>
        <RatioImage
          {...omit('toString', images[2])}
          sizes={''}
          aspectRatio={1 / 1}
        />
      </OuterWrapper>
    </ImagesContainer>
  );
}

Collage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(imagePropType))
};

Collage.defaultProps = {
  images: []
};

/**
 * @component
 */
export default Collage;
