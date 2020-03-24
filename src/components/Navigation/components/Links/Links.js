import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty } from 'lodash/fp';

import { childrenPropType } from '../../../../util/prop-types';
import { useComponents } from '../../../../hooks/use-components';
import NavigationContext from '../../NavigationContext';

const navBaseStyles = ({ theme }) => css`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: ${theme.spacing.s};
  background: ${theme.color.white};
  box-shadow: 0 0px 4px ${theme.color.shadow};
  border-top: 1px solid ${theme.color.neutral[300]};
  transition: transform ${theme.animation.standard};

  ${theme.mq.desk} {
    position: absolute;
    bottom: auto;
    padding: 0;
    background: none;
    box-shadow: none;
    border: none;
    transition: none;
  }
`;

const navWideStyles = ({ theme, length }) =>
  length > 3 &&
  css`
    display: block;
    overflow-x: scroll;
    white-space: nowrap;

    &::after {
      display: block;
      content: '';
      position: fixed;
      right: 0;
      bottom: 0;
      pointer-events: none;
      height: ${theme.spacing.xxxxl};
      width: ${theme.spacing.xxxxl};
      background: linear-gradient(to right, transparent, ${theme.color.white});
    }

    ${theme.mq.desk} {
      display: flex;
      overflow-x: hidden;
      white-space: wrap;

      &::after {
        display: none;
      }
    }
  `;

const navInvisibleStyles = ({ theme, isInvisible }) =>
  isInvisible &&
  css`
    transform: translateY(100%);

    ${theme.mq.desk} {
      transform: none;
    }
  `;

const Nav = styled('nav')(navBaseStyles, navWideStyles, navInvisibleStyles);

const navAnchorBaseStyles = ({ theme }) => css`
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.regular};
  line-height: 1;
  letter-spacing: 1px;
  display: inline-block;
  color: ${theme.color.neutral[700]};
  border-radius: 20px;
  padding: ${theme.spacing.s} ${theme.spacing.m};

  ${theme.mq.hand} {
    font-size: ${theme.fontSize.s};
    margin-right: ${theme.spacing.m};
  }

  ${theme.mq.lap} {
    margin-right: ${theme.spacing.l};
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    background-color: ${theme.color.neutral[100]};
    color: ${theme.color.primary[500]};
  }
`;

const navAnchorActiveStyles = ({ theme, isActive }) =>
  isActive &&
  css`
    background-color: ${theme.color.neutral[100]};
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
      icon: childrenPropType,
    }),
  ),
};

/**
 * @component
 */
export default Links;
