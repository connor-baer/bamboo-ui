import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty } from 'lodash/fp';

import { NavigationContext } from '../../NavigationContext';
import { childrenPropType } from '../../../../util/prop-types';
import { useComponents } from '../../../../hooks/use-components';
import { focusOutline } from '../../../../styles/shared';

const navBaseStyles = ({ theme }) => css`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  padding: ${theme.spacing.xxs} ${theme.spacing.s};
  background: ${theme.color.white};
  box-shadow: ${theme.shadow.m};
  border-top: 1px solid ${theme.color.neutral[300]};
  transition: transform ${theme.animation.standard};

  ${theme.mq.hand} {
    padding: ${theme.spacing.xs} ${theme.spacing.s};
    justify-content: center;
  }

  ${theme.mq.lap} {
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
  length >= 6 &&
  css`
    display: block;
    overflow-x: scroll;
    white-space: nowrap;
    text-align: center;

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

    ${theme.mq.hand} {
      display: flex;
      overflow-x: visible;
      white-space: normal;

      &::after {
        display: none;
      }
    }
  `;

const navInvisibleStyles = ({ theme, isInvisible }) =>
  isInvisible &&
  css`
    transform: translateY(100%);

    ${theme.mq.lap} {
      transform: none;
    }
  `;

const Nav = styled('nav')(navBaseStyles, navWideStyles, navInvisibleStyles);

const navAnchorBaseStyles = ({ theme }) => css`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  line-height: 1;
  letter-spacing: 1px;
  padding: ${theme.spacing.xs} ${theme.spacing.s};
  margin-right: ${theme.spacing.xs};
  color: ${theme.color.neutral[700]};
  background-color: ${theme.color.bodyBg};
  text-align: center;
  border-radius: ${theme.borderRadius.l};
  transition: color ${theme.animation.micro},
    background-color ${theme.animation.micro};

  &:hover {
    color: ${theme.color.primary[700]};
  }

  &:focus {
    ${focusOutline(theme)};
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${theme.mq.hand} {
    flex-direction: row;
    border-radius: ${theme.borderRadius.pill};
    padding: ${theme.spacing.s} ${theme.spacing.m};

    &:hover {
      background-color: ${theme.color.primary[100]};
    }
  }

  ${theme.mq.lap} {
    margin-right: ${theme.spacing.l};
  }
`;

const navAnchorWideStyles = ({ theme, length }) =>
  length >= 4 &&
  css`
    letter-spacing: 0;
    margin-right: ${theme.spacing.xxs};

    ${theme.mq.lap} {
      margin-right: ${theme.spacing.s};
    }
  `;

const navAnchorActiveStyles = ({ theme, isActive }) =>
  isActive &&
  css`
    background-color: ${theme.color.neutral[100]};
    color: ${theme.color.neutral[900]};
    font-weight: ${theme.fontWeight.bold};
  `;

const A = styled('a')(
  navAnchorBaseStyles,
  navAnchorWideStyles,
  navAnchorActiveStyles,
);

const iconStyles = ({ theme }) => css`
  display: inline-block;
  margin-bottom: ${theme.spacing.xxs};
  font-size: ${theme.fontSize.xl};

  ${theme.mq.hand} {
    font-size: ${theme.fontSize.l};
    margin-right: ${theme.spacing.xxs};
    margin-bottom: 0;
  }

  ${theme.mq.lap} {
    font-size: ${theme.fontSize.m};
  }
`;

const Icon = styled('span')(iconStyles);

const labelStyles = ({ theme }) => css`
  font-size: ${theme.fontSize.s};

  ${theme.mq.hand} {
    font-size: ${theme.fontSize.m};
  }

  ${theme.mq.lap} {
    font-size: ${theme.fontSize.s};
  }
`;

const Label = styled('span')(labelStyles);

function Links({ links }) {
  const { Link } = useComponents();
  const { isInvisible } = useContext(NavigationContext);

  if (isEmpty(links)) {
    return null;
  }

  return (
    <Nav isInvisible={isInvisible} length={links.length}>
      {links.map(({ url, label, icon, isActive }, i) => (
        <Link key={i} href={url}>
          <A isActive={isActive} length={links.length}>
            <Icon>{icon}</Icon>
            <Label>{label}</Label>
          </A>
        </Link>
      ))}
    </Nav>
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
