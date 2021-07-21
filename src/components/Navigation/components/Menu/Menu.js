import React, { useState, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { childrenPropType, userPropType } from '../../../../util/prop-types';
import { focusVisible, buttonOutline } from '../../../../styles/shared';
import { useComponents } from '../../../../hooks/use-components';
import { MoonIcon } from '../../../icons/MoonIcon';
import { Hamburger } from '../../../icons/Hamburger';
import { Divider } from '../../../Divider';
import { useOutsideClick } from '../../../../hooks/use-outside-click';

const wrapperStyles = ({ theme }) => css`
  z-index: 2;
  margin-left: ${theme.spacing.xl};

  ${theme.mq.hand} {
    position: relative;
  }

  ${theme.mq.desk} {
    margin-left: ${theme.spacing.xxl};
  }
`;

const Wrapper = styled('div')(wrapperStyles);

// Passed to the css prop.
const imageStyles = (theme) => css`
  display: inline-block;
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

  ${focusVisible(theme)};

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
  box-shadow: ${theme.shadow.l};
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

const itemClickableStyles = ({ theme, onClick, href }) =>
  (onClick || href) &&
  css`
    &:hover,
    &:focus {
      background: ${theme.color.neutral[100]};
      color: ${theme.color.primary[500]};
    }

    ${focusVisible(theme)};

    &:active {
      background: ${theme.color.neutral[300]};
      color: ${theme.color.primary[500]};
    }
  `;

const Item = styled('div')(itemStyles, itemClickableStyles);

const MenuItem = (props) => {
  // eslint-disable-next-line no-nested-ternary, react/prop-types
  const as = props.href ? 'a' : props.onClick ? 'button' : 'div';
  return <Item as={as} {...props} />;
};

const hrStyles = ({ theme }) => css`
  margin: ${theme.spacing.xxs} 0 ${theme.spacing.xs};
`;

const MenuDivider = styled(Divider)(hrStyles);

const IconButton = styled('button')(itemStyles, itemClickableStyles);

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

  ${focusVisible(theme)};

  ${theme.mq.hand} {
    padding: calc(${theme.spacing.xs} + 2px);
  }
`;

const DarkmodeButton = styled('button')(itemStyles, darkmodeButtonStyles);

export function Menu({ children, user }) {
  const theme = useTheme();
  const { Image } = useComponents();
  const [isOpen, setOpen] = useState(false);
  const node = useRef();

  const handleClick = useCallback(() => setOpen((prev) => !prev), []);

  useOutsideClick(node, handleClick, isOpen);

  const { toggleDarkmode, darkmode } = theme;
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
    <Wrapper ref={node}>
      {user && user.image ? (
        <ImageButton
          onClick={handleClick}
          type="button"
          aria-expanded={isOpen}
          title={imageButtonLabel}
          aria-label={imageButtonLabel}
        >
          <Image css={imageStyles} src={user.image} alt="Profile photo" />
        </ImageButton>
      ) : (
        <Hamburger onClick={handleClick} isActive={isOpen} />
      )}

      <Dropdown isOpen={isOpen}>
        {children}

        {hasDivider && <MenuDivider />}

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

Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

Menu.propTypes = {
  user: userPropType,
  children: childrenPropType,
};
