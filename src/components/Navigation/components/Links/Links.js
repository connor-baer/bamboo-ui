import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { startsWith, isEmpty } from 'lodash/fp';
import { styleHelpers, sharedPropTypes } from '@sumup/circuit-ui';

import Link from '../../../Link';
import NavigationContext from '../../NavigationContext';

const navBaseStyles = ({ theme }) => css`
  ${theme.mq.untilMega} {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    padding: ${theme.spacings.kilo};
    background: ${theme.colors.white};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
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

const navInvisibleStyles = ({ theme, isInvisible }) =>
  isInvisible &&
  css`
    ${theme.mq.untilMega} {
      transform: translateY(100%);
    }
  `;

const Nav = styled('nav')(navBaseStyles, navInvisibleStyles);

const navAnchorBaseStyles = ({ theme }) => css`
  ${styleHelpers.textMega({ theme })};
  font-weight: ${theme.fontWeight.regular};
  line-height: 1;
  letter-spacing: 1px;
  display: inline-block;
  color: ${theme.colors.n700};
  border-radius: 20px;
  padding: ${theme.spacings.kilo} ${theme.spacings.mega} 11px;

  ${theme.mq.kilo} {
    margin-right: ${theme.spacings.mega};
  }

  ${theme.mq.mega} {
    margin-right: ${theme.spacings.bit};
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
    color: ${theme.colors.p500};
  }
`;

const navAnchorActiveStyles = ({ theme, isActive }) =>
  isActive &&
  css`
    background-color: ${theme.colors.n100};
    font-weight: ${theme.fontWeight.bold};
  `;

const A = styled('a')(navAnchorBaseStyles, navAnchorActiveStyles);

const Links = ({ links, router }) => {
  if (isEmpty(links)) {
    return null;
  }

  return (
    <NavigationContext.Consumer>
      {({ isInvisible }) => (
        <Nav isInvisible={isInvisible}>
          {links.map(({ url, label, icon }, i) => (
            <Link key={i} href={url} prefetch>
              <A isActive={startsWith(url, router.asPath)}>
                {icon} {label}
              </A>
            </Link>
          ))}
        </Nav>
      )}
    </NavigationContext.Consumer>
  );
};

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: sharedPropTypes.childrenPropType,
      url: PropTypes.string,
      icon: sharedPropTypes.childrenPropType
    })
  ),
  router: PropTypes.shape({
    asPath: PropTypes.string
  })
};

Links.defaultProps = {
  router: {}
};

/**
 * @component
 */
export default Links;
