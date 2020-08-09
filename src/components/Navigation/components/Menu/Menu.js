import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { childrenPropType } from '../../../../util/prop-types';
import { focusOutline, buttonOutline } from '../../../../styles/shared';
import { useComponents } from '../../../../hooks/use-components';
import MoonIcon from '../../../icons/MoonIcon';
import Hamburger from '../../../icons/Hamburger';
import Hr from '../../../Hr';

const wrapperStyles = ({ theme }) => css`
  z-index: 2;

  ${theme.mq.hand} {
    position: relative;
  }
`;

const Wrapper = styled('div')(wrapperStyles);

// Passed to the css prop.
const userPhotoStyles = (theme) => css`
  width: ${theme.iconSize.xl};
  height: ${theme.iconSize.xl};
  object-fit: cover;
  border-radius: 50%;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const imageButtonStyles = ({ theme }) => css`
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: none;
  border: 0;
  border-radius: ${theme.borderRadius.circle};

  &:focus {
    ${focusOutline(theme)};
  }

  &::after {
    border-radius: ${theme.borderRadius.circle};
  }
`;

const ImageButton = styled('button')(buttonOutline, imageButtonStyles);

const dropdownBaseStyles = ({ theme }) => css`
  position: absolute;
  z-index: ${theme.zIndex.navigation};
  top: 100%;
  right: 0;
  left: 0;
  width: 100%;
  padding: ${theme.spacing.xxs} 0;
  visibility: hidden;
  opacity: 0;
  background: ${theme.color.white};
  box-shadow: 0 0 4px ${theme.color.shadow};
  border-radius: ${theme.borderRadius.s};
  transition: visibility ${theme.animation.standard},
    opacity ${theme.animation.standard};

  ${theme.mq.hand} {
    width: 240px;
    top: calc(100% + ${theme.spacing.xs});
    left: auto;
    border-radius: ${theme.borderRadius.s};
  }

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
  }

  &::before {
    left: auto;
    right: 28px;
    top: -16px;
    border: 8px solid transparent;
    border-bottom-color: rgba(27, 31, 35, 0.12);

    ${theme.mq.hand} {
      right: 16px;
    }
  }

  &::after {
    left: auto;
    right: 29px;
    top: -14px;
    border: 7px solid transparent;
    border-bottom-color: ${theme.color.white};

    ${theme.mq.hand} {
      right: 17px;
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
  padding: ${theme.spacing.s} ${theme.spacing.m};
  color: ${theme.color.bodyColor};
  transition: all ${theme.animation.micro};
  overflow: visible;
  border: 0;
  outline: none;
  background-color: transparent;
  vertical-align: middle;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;

  ${theme.mq.hand} {
    padding: ${theme.spacing.xs} ${theme.spacing.m};
  }
`;

const Item = styled('div')(itemStyles);

const hrStyles = ({ theme }) => css`
  margin: ${theme.spacing.xxs} 0 ${theme.spacing.xs};
`;

const MenuHr = styled(Hr)(hrStyles);

const iconButtonStyles = ({ theme }) => css`
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${theme.color.neutral[100]};
    color: ${theme.color.primary[500]};
  }

  &:focus {
    ${focusOutline(theme)};
  }

  &:active {
    background: ${theme.color.neutral[300]};
    color: ${theme.color.primary[500]};
  }
`;

const IconButton = styled('button')(itemStyles, iconButtonStyles);

const iconBaseStyles = ({ theme }) => css`
  display: inline-block;
  position: relative;
  left: -${theme.spacing.xs};
  padding: ${theme.spacing.xs};
  margin-top: -2px;
  transition: fill ${theme.animation.micro},
    background-color ${theme.animation.micro};
  line-height: 0;
  fill: ${theme.color.bodyColor};
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${theme.color.neutral[100]};
    fill: ${theme.color.primary[500]};
  }
`;

const iconActiveStyles = ({ theme, isActive }) =>
  isActive &&
  css`
    background-color: ${theme.color.neutral[100]};
    fill: ${theme.color.neutral[700]};
  `;

const Icon = styled('span')(iconBaseStyles, iconActiveStyles);

const darkmodeButtonStyles = ({ theme }) => css`
  line-height: 0;
  padding: calc(${theme.spacing.xs} + 2px);
  fill: ${theme.color.neutral[700]};
  cursor: pointer;

  &:focus {
    ${focusOutline(theme)};
  }

  ${theme.mq.hand} {
    padding: calc(${theme.spacing.xs} + 2px);
  }
`;

const DarkmodeButton = styled('button')(itemStyles, darkmodeButtonStyles);

function Menu({ children, userAvatarURL }) {
  const theme = useTheme();
  const { Image } = useComponents();
  const [isOpen, setOpen] = useState(false);

  const { toggleDarkmode, darkmode } = theme;
  const handleClick = () => setOpen(!isOpen);
  const hasContent = !!children;
  const hasDivider = hasContent && toggleDarkmode;

  if (!hasContent && !toggleDarkmode) {
    return null;
  }

  if (!hasContent) {
    return (
      <Wrapper>
        <DarkmodeButton
          isActive={darkmode}
          aria-pressed={darkmode}
          onClick={toggleDarkmode}
        >
          <MoonIcon
            width={theme.iconSize.m}
            height={theme.iconSize.m}
            full={darkmode}
            alt="Toggle darkmode"
          />
        </DarkmodeButton>
      </Wrapper>
    );
  }

  const imageButtonLabel = isOpen ? 'Close menu' : 'Open menu';

  return (
    <Wrapper>
      {userAvatarURL ? (
        <ImageButton
          onClick={handleClick}
          type="button"
          aria-expanded={isOpen}
          title={imageButtonLabel}
          aria-label={imageButtonLabel}
        >
          <Image
            css={userPhotoStyles}
            src={userAvatarURL}
            alt="Profile photo"
          />
        </ImageButton>
      ) : (
        <Hamburger onClick={handleClick} isActive={isOpen} />
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
              <MoonIcon
                width={theme.iconSize.m}
                height={theme.iconSize.m}
                full={darkmode}
                alt=""
              />
            </Icon>
            Toggle darkmode
          </IconButton>
        )}
      </Dropdown>
    </Wrapper>
  );
}

Menu.Item = Item;
Menu.Hr = MenuHr;

Menu.propTypes = {
  userAvatarURL: PropTypes.string,
  children: childrenPropType,
};

/**
 * @component
 */
export default Menu;
