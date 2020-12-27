import React, { Children } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { childrenPropType } from '../../util/prop-types';

const cloneElement = (element, props) =>
  jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });

const containerStyles = ({ theme }) => css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 ${theme.spacing.gutter};
  padding: 0 ${theme.spacing.gutter};
  -webkit-overflow-scrolling: touch;

  &::after {
    content: '';
    display: block;
    width: ${theme.spacing.gutter};
    height: 1px;
    flex-shrink: 0;
  }

  ${theme.mq.lap} {
    scroll-snap-type: none;
    overflow-x: hidden;

    &::after {
      display: none;
    }
  }
`;

const Container = styled('div')(containerStyles);

const slideStyles = (count) => (theme) => {
  const width = (100 / count).toFixed(2);

  return css`
    margin-left: ${theme.spacing.gutter};
    scroll-snap-align: start;
    width: 75vw;
    max-width: 18rem;
    flex-shrink: 0;

    &:first-of-type {
      margin-left: 0;
    }

    ${theme.mq.hand} {
      width: 40vw;
    }

    ${theme.mq.lap} {
      width: ${width}%;
      max-width: none;
      flex-shrink: 1;
      margin-left: 0;
      margin-right: ${theme.spacing.gutter};

      &:last-of-type {
        margin-right: 0;
      }
    }
  `;
};

export function Slider({ children, ...rest }) {
  const count = Children.count(children);
  const styles = slideStyles(count);
  return (
    <Container {...rest}>
      {Children.map(children, (child) => cloneElement(child, { css: styles }))}
    </Container>
  );
}

Slider.propTypes = {
  children: childrenPropType,
};
