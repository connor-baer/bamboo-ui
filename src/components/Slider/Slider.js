import React, { Children } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { childrenPropType } from '../../util/shared-prop-types';

const cloneElement = (element, props) =>
  jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props
  });

const containerStyles = ({ theme }) => css`
  display: flex;
  flex-wrap: nowrap;

  ${theme.mq.untilMega} {
    scroll-snap-type: x mandatory;
    scroll-padding: 0 ${theme.spacings.tera};
    overflow-x: scroll;
    padding: 0;

    &::after {
      content: '';
      display: block;
      width: ${theme.spacings.tera};
      height: ${theme.spacings.tera};
      flex-shrink: 0;
    }
  }

  ${theme.mq.untilKilo} {
    scroll-padding: 0 ${theme.spacings.mega};

    &::after {
      width: ${theme.spacings.mega};
    }
  }
`;

const Container = styled('div')(containerStyles);

const slideStyles = count => theme => {
  const width = (100 / count).toFixed(2);

  return css`
    ${theme.mq.untilMega} {
      margin-left: ${theme.spacings.tera};
      scroll-snap-align: start;
      width: 75vw;
      max-width: 25rem;
      flex-shrink: 0;
    }

    ${theme.mq.untilKilo} {
      margin-left: ${theme.spacings.mega};
    }

    ${theme.mq.mega} {
      width: ${width}%;
      margin-right: ${theme.spacings.tera};

      &:last-of-type {
        margin-right: 0;
      }
    }
  `;
};

function Slider({ children, ...rest }) {
  const count = Children.count(children);
  return (
    <Container {...rest}>
      {Children.map(children, child =>
        cloneElement(child, { css: slideStyles(count) })
      )}
    </Container>
  );
}

Slider.propTypes = {
  children: childrenPropType
};

/**
 * @component
 */
export default Slider;
