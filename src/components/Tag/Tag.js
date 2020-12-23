import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../util/prop-types';
import { disableVisually, focusOutline } from '../../styles/shared';
import { ReactComponent as Cross } from '../../icons/cross.svg';

const baseStyles = ({ theme }) => css`
  display: inline-block;
  background-color: ${theme.color.neutral[100]};
  border: ${theme.borderWidth.s} solid ${theme.color.neutral[500]};
  border-radius: ${theme.borderRadius.s};
  line-height: 0;

  svg {
    fill: currentColor;
  }

  &:focus {
    ${focusOutline(theme)};
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  &:focus-visible {
    ${focusOutline(theme)};
  }
`;

const disabledStyles = ({ disabled }) => disabled && disableVisually();

const Wrapper = styled('div')(baseStyles, disabledStyles);

const contentStyles = ({ theme }) => css`
  display: inline-block;
  font-size: ${theme.fontSize.s};
  padding: ${theme.spacing.xs};
  margin: 0;
  background-color: ${theme.color.neutral[100]};
  border-top-left-radius: ${theme.borderRadius.s};
  border-bottom-left-radius: ${theme.borderRadius.s};
  line-height: 1;

  &:focus {
    ${focusOutline(theme)};
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  &:focus-visible {
    ${focusOutline(theme)};
  }
`;

const Content = styled('span')(contentStyles);

const closeButtonStyles = ({ theme }) => css`
  display: inline-block;
  font-size: ${theme.fontSize.s};
  padding: ${theme.spacing.xs};
  margin: 0;
  transition: background-color ${theme.animation.micro};
  background-color: ${theme.color.neutral[100]};
  border-top-right-radius: ${theme.borderRadius.s};
  border-bottom-right-radius: ${theme.borderRadius.s};
  border: none;
  outline: 0;
  line-height: 1;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${theme.color.white};
  }

  &:focus {
    ${focusOutline(theme)};
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  &:focus-visible {
    ${focusOutline(theme)};
  }

  svg {
    color: ${theme.color.neutral[900]} !important;
  }
`;

const CloseButton = styled('button')(closeButtonStyles);

export function Tag({ children, onRemove, ...props }) {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
      {onRemove && (
        <CloseButton
          onClick={onRemove}
          aria-label="Remove"
          title="Remove"
          type="button"
        >
          <Cross />
        </CloseButton>
      )}
    </Wrapper>
  );
}

Tag.propTypes = {
  children: childrenPropType,
  disabled: PropTypes.bool,
  onRemove: PropTypes.func,
};
