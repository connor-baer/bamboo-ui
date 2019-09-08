import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty } from 'lodash/fp';
import { transparentize } from 'polished';

import { childrenPropType } from '../../../../util/shared-prop-types';
import useComponents from '../../../../hooks/use-components';
import NavigationContext from '../../NavigationContext';

const navBaseStyles = ({ theme }) => css`
  ${theme.mq.untilMega} {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    padding: ${theme.spacings.kilo};
    background: ${theme.colors.white};
    box-shadow: 0 0px 4px ${transparentize(0.75, theme.colors.shadow)};
    border-top: 1px solid ${theme.colors.n200};
    transition: transform ${theme.animations.standard};
  }

  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const navWideStyles = ({ theme, length }) =>
  length > 3 &&
  css`
    ${theme.mq.untilKilo} {
      display: block;
      overflow-x: scroll;
      white-space: nowrap;
    }

    ${theme.mq.untilMega} {
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      padding: ${theme.spacings.kilo};
      background: ${theme.colors.white};
      box-shadow: 0 0px 4px ${transparentize(0.75, theme.colors.shadow)};
      border-top: 1px solid ${theme.colors.n200};
      transition: transform ${theme.animations.standard};

      &::after {
        display: block;
        content: '';
        position: fixed;
        right: 0;
        bottom: 0;
        pointer-events: none;
        height: ${theme.spacings.zetta};
        width: ${theme.spacings.zetta};
        background: linear-gradient(
          to right,
          ${transparentize(0.99, theme.colors.white)},
          ${theme.colors.white}
        );
      }
    }
  `;

const navInvisibleStyles = ({ theme, isInvisible }) =>
  isInvisible &&
  css`
    ${theme.mq.untilMega} {
      transform: translateY(100%);
    }
  `;

const Nav = styled('nav')(navBaseStyles, navWideStyles, navInvisibleStyles);

const navAnchorBaseStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes.kilo};
  font-weight: ${theme.fontWeight.regular};
  line-height: 1;
  letter-spacing: 1px;
  display: inline-block;
  color: ${theme.colors.n700};
  border-radius: 20px;
  padding: ${theme.spacings.kilo} ${theme.spacings.mega};

  ${theme.mq.kilo} {
    font-size: ${theme.fontSizes.byte};
    margin-right: ${theme.spacings.mega};
  }

  ${theme.mq.mega} {
    margin-right: 0;
  }

  ${theme.mq.giga} {
    margin-right: ${theme.spacings.giga};
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.n100};
    color: ${theme.colors.p600};
  }
`;

const navAnchorActiveStyles = ({ theme, isActive }) =>
  isActive &&
  css`
    background-color: ${theme.colors.n100};
    font-weight: ${theme.fontWeight.bold};
  `;

const A = styled('a')(navAnchorBaseStyles, navAnchorActiveStyles);

function Links({ links }) {
  const { Link } = useComponents();

  if (isEmpty(links)) {
    return null;
  }

  return (
    <NavigationContext.Consumer>
      {({ isInvisible }) => (
        <Nav isInvisible={isInvisible} length={links.length}>
          {links.map(({ url, label, icon, isActive }, i) => (
            <Link key={i} href={url}>
              <A isActive={isActive}>
                {icon} {label}
              </A>
            </Link>
          ))}
        </Nav>
      )}
    </NavigationContext.Consumer>
  );
}

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: childrenPropType,
      url: PropTypes.string,
      icon: childrenPropType
    })
  )
};

/**
 * @component
 */
export default Links;
