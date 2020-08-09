import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { focusOutline, hideVisually } from '../../../styles/shared';

const LAYER_HEIGHT = '2px';

const buttonStyles = ({ theme }) => css`
  box-sizing: content-box;
  cursor: pointer;
  display: inline-block;
  padding: ${theme.spacing.m} ${theme.spacing.xs};
  margin: 0;
  width: ${theme.iconSize.m};
  background: none;
  border: 0;
  position: relative;
  color: ${theme.color.neutral[900]};

  &:focus {
    border-radius: ${theme.borderRadius.s};
    ${focusOutline(theme)};
  }
`;

const HamburgerButton = styled.button(buttonStyles);

const layersBaseStyles = ({ theme }) => css`
  margin-top: calc(${LAYER_HEIGHT} / -2);
  top: 50%;
  width: calc(${theme.iconSize.m} * 0.77);

  &,
  &::after,
  &::before {
    background-color: ${theme.color.neutral[900]};
    border-radius: ${theme.borderRadius.s};
    display: block;
    height: ${LAYER_HEIGHT};
    position: absolute;
    transition: width 0.2s ease-out 0.15s, opacity 0.1s ease-in,
      transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &::before,
  &::after {
    top: 0;
    content: '';
  }

  &::before {
    transform: translateY(calc((${theme.spacing.xxs} + ${LAYER_HEIGHT}) * -1));
    width: ${theme.iconSize.m};
  }

  &::after {
    transform: translateY(calc((${theme.spacing.xxs} + ${LAYER_HEIGHT})));
    width: calc(${theme.iconSize.m} * 0.88);
  }
`;

const layersActiveStyles = ({ theme, isActive }) =>
  isActive &&
  css`
    transform: rotate(225deg);

    &,
    &::before,
    &::after {
      transition: width 0.2s ease-out, opacity 0.1s ease-out 0.15s,
        transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.15s;
      width: ${theme.iconSize.m};
    }

    &::before {
      opacity: 0;
      transform: translateY(0);
    }

    &::after {
      transform: translateY(0) rotate(-90deg);
    }
  `;

const HamburgerLayers = styled.span(layersBaseStyles, layersActiveStyles);

const HamburgerLabel = styled.span(hideVisually);

/**
 * A hamburger button for menus. Morphs into a close icon when active.
 */
function Hamburger({
  onClick = () => {},
  isActive = false,
  labelActive = 'Close menu',
  labelInActive = 'Open menu',
  ...rest
}) {
  const label = isActive ? labelActive : labelInActive;
  return (
    <HamburgerButton
      onClick={onClick}
      {...rest}
      title={label}
      aria-expanded={isActive}
    >
      <HamburgerLayers isActive={isActive} />
      <HamburgerLabel>{label}</HamburgerLabel>
    </HamburgerButton>
  );
}

Hamburger.propTypes = {
  /**
   * Function that is called with the event when the hamburger is clicked.
   */
  onClick: PropTypes.func,
  /**
   * A consice description of the example prop.
   */
  isActive: PropTypes.bool,
  /**
   * Label for the 'active' state. Important for accessibility.
   */
  labelActive: PropTypes.string,
  /**
   * Label for the 'inactive' state. Important for accessibility.
   */
  labelInActive: PropTypes.string,
};

/**
 * @component
 */
export default Hamburger;
