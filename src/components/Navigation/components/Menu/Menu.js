import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Hamburger, Hr } from '@sumup/circuit-ui';

import { childrenPropType } from '../../../../util/shared-prop-types';
import MoonIcon from '../../../icons/MoonIcon';
import MotionIcon from '../../../icons/MotionIcon';
import Image from '../../../images/Image';

const wrapperStyles = ({ theme }) => css`
  z-index: 2;

  ${theme.mq.kilo} {
    position: relative;
  }
`;

const Wrapper = styled('div')(wrapperStyles);

const userPhotoStyles = ({ theme }) => css`
  width: ${theme.iconSizes.giga};
  height: ${theme.iconSizes.giga};
  object-fit: cover;
  border-radius: 50%;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const UserPhoto = styled(Image)(userPhotoStyles);

const dropdownBaseStyles = ({ theme }) => css`
  ${theme.mq.untilKilo} {
    left: 0;
    width: 100%;
  }

  position: absolute;
  z-index: 999;
  top: 100%;
  right: 0;
  width: 220px;
  padding: ${theme.spacings.bit} 0;
  visibility: hidden;
  opacity: 0;
  background: ${theme.colors.white};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.mega};
  transition: visibility ${theme.animations.standard},
    opacity ${theme.animations.standard};

  ${theme.mq.kilo} {
    top: calc(100% + ${theme.spacings.byte});
    border-radius: ${theme.borderRadius.mega};
  }

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
  }

  &::before {
    left: auto;
    right: 20px;
    top: -16px;
    border: 8px solid transparent;
    border-bottom-color: rgba(27, 31, 35, 0.12);

    ${theme.mq.kilo} {
      right: 8px;
    }
  }

  &::after {
    left: auto;
    right: 21px;
    top: -14px;
    border: 7px solid transparent;
    border-bottom-color: ${theme.colors.white};

    ${theme.mq.kilo} {
      right: 9px;
    }
  }
`;

const dropdownOpenStyles = ({ isOpen }) =>
  isOpen &&
  css`
    visibility: visible;
    opacity: 1;
  `;

const Dropdown = styled('div')(dropdownBaseStyles, dropdownOpenStyles);

const itemStyles = ({ theme }) => css`
  display: block;
  width: 100%;
  padding: ${theme.spacings.kilo} ${theme.spacings.mega};
  color: ${theme.colors.bodyColor};
  transition: all ${theme.animations.micro};
  overflow: visible;
  border: 0;
  outline: none;
  background-color: transparent;
  vertical-align: middle;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;

  ${theme.mq.kilo} {
    padding: ${theme.spacings.bit} ${theme.spacings.mega};
  }
`;

const Item = styled('div')(itemStyles);

const hrStyles = ({ theme }) => css`
  margin: ${theme.spacings.bit} 0 ${theme.spacings.byte};
`;

const MenuHr = styled(Hr)(hrStyles);

const iconButtonStyles = ({ theme }) => css`
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${theme.colors.n100};
    color: ${theme.colors.p500};
  }

  &:active {
    background: ${theme.colors.n300};
    color: ${theme.colors.p500};
  }
`;

const IconButton = styled('button')(itemStyles, iconButtonStyles);

const iconBaseStyles = ({ theme }) => css`
  display: inline-block;
  position: relative;
  left: -${theme.spacings.byte};
  padding: ${theme.spacings.byte};
  margin-top: -2px;
  transition: fill ${theme.animations.micro},
    background-color ${theme.animations.micro};
  line-height: 0;
  fill: ${theme.colors.bodyColor};
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${theme.colors.n100};
    fill: ${theme.colors.p500};
  }
`;

const iconActiveStyles = ({ theme, isActive }) =>
  isActive &&
  css`
    background-color: ${theme.colors.n100};
    fill: ${theme.colors.n700};
  `;

const Icon = styled('span')(iconBaseStyles, iconActiveStyles);

class Menu extends Component {
  static propTypes = {
    userAvatarURL: PropTypes.string,
    children: childrenPropType,
    theme: PropTypes.shape({
      toggleDarkmode: PropTypes.func,
      toggleReducedMotion: PropTypes.func,
      darkmode: PropTypes.bool,
      reducedMotion: PropTypes.bool
    })
  };

  static defaultProps = {
    theme: {}
  };

  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { children, theme, userAvatarURL } = this.props;
    const { isOpen } = this.state;
    const {
      toggleDarkmode,
      toggleReducedMotion,
      darkmode,
      reducedMotion
    } = theme;
    const hasDivider = children && toggleDarkmode && toggleReducedMotion;
    return (
      <Wrapper>
        {userAvatarURL ? (
          <UserPhoto
            src={userAvatarURL}
            onClick={this.handleClick}
            alt="Profile photo"
          />
        ) : (
          <Hamburger onClick={this.handleClick} isActive={isOpen} />
        )}
        <Dropdown isOpen={isOpen}>
          {children}

          {hasDivider && <MenuHr />}

          {toggleDarkmode && (
            <IconButton
              isActive={darkmode}
              aria-pressed={darkmode}
              onClick={toggleDarkmode}
            >
              <Icon isActive={darkmode}>
                <MoonIcon width={16} height={16} full={darkmode} />
              </Icon>
              Toggle darkmode
            </IconButton>
          )}

          {toggleReducedMotion && (
            <IconButton
              isActive={reducedMotion}
              aria-pressed={reducedMotion}
              onClick={toggleReducedMotion}
            >
              <Icon isActive={reducedMotion}>
                <MotionIcon width={16} height={16} full={reducedMotion} />
              </Icon>
              Reduce motion
            </IconButton>
          )}
        </Dropdown>
      </Wrapper>
    );
  }
}

Menu.Item = Item;
Menu.Hr = MenuHr;

/**
 * @component
 */
export default Menu;
