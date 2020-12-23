import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import {
  disableVisually,
  hideVisually,
  focusOutline,
} from '../../../styles/shared';
import { uniqueId } from '../../../util/unique-id';
import { childrenPropType } from '../../../util/prop-types';

import { ReactComponent as Check } from './check.svg';

const labelBaseStyles = ({ theme }) => css`
  color: ${theme.color.bodyColor};
  display: inline-block;
  padding-left: 1.625rem;
  position: relative;
  cursor: pointer;

  &::before {
    height: 1.125rem;
    width: 1.125rem;
    box-sizing: border-box;
    box-shadow: 0;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.neutral[500]};
    border-radius: ${theme.borderRadius.xs};
    content: '';
    display: block;
    position: absolute;
    top: ${theme.spacing.s};
    left: 0;
    transform: translateY(-50%);
    transition: border ${theme.animation.micro},
      background-color ${theme.animation.micro};
  }

  svg {
    height: 1.125rem;
    width: 1.125rem;
    padding: 2px;
    box-sizing: border-box;
    color: ${theme.color.white};
    display: block;
    line-height: 0;
    opacity: 0;
    position: absolute;
    top: ${theme.spacing.s};
    left: 0;
    transform: translateY(-50%) scale(0, 0);
    transition: transform ${theme.animation.micro},
      opacity ${theme.animation.micro};
  }
`;

const labelInvalidStyles = ({ theme, invalid }) =>
  invalid &&
  css`
    &:not(:focus)::before {
      border-color: ${theme.color.danger};
      background-color: ${theme.color.red[100]};
    }
  `;

const labelDisabledStyles = ({ disabled, theme }) =>
  disabled &&
  css`
    ${disableVisually()};

    &::before {
      ${disableVisually()};
      border-color: ${theme.color.neutral[700]};
      background-color: ${theme.color.neutral[200]};
    }
  `;

const CheckboxLabel = styled('label')(
  labelBaseStyles,
  labelDisabledStyles,
  labelInvalidStyles,
);

const CheckboxWrapper = styled('div')`
  position: relative;
`;

const inputBaseStyles = ({ theme }) => css`
  ${hideVisually()};

  &:hover + label::before {
    border-color: ${theme.color.neutral[700]};
  }

  &:focus + label::before {
    ${focusOutline(theme)};
    border-color: ${theme.color.primary[500]};
  }

  &:checked + label > svg {
    transform: translateY(-50%) scale(1, 1);
    opacity: 1;
  }

  &:checked + label::before {
    border-color: ${theme.color.primary[500]};
    background-color: ${theme.color.primary[500]};
  }
`;

const inputInvalidStyles = ({ theme, invalid }) =>
  invalid &&
  css`
    &:hover + label::before,
    &:focus + label::before {
      border-color: ${theme.color.red[700]};
    }

    &:checked + label::before {
      border-color: ${theme.color.danger};
      background-color: ${theme.color.danger};
    }
  `;

const CheckboxInput = styled('input')(inputBaseStyles, inputInvalidStyles);

/**
 * Checkbox component for forms.
 */
export function Checkbox({
  onChange,
  children,
  value,
  id: customId,
  name,
  disabled,
  invalid,
  className,
  ...props
}) {
  const id = customId || uniqueId('checkbox_');

  return (
    <CheckboxWrapper className={className}>
      <CheckboxInput
        {...props}
        id={id}
        name={name}
        value={value}
        type="checkbox"
        disabled={disabled}
        invalid={invalid}
        onClick={onChange}
        onChange={() => {
          /**
           * Noop to silence React warning:
           * https://github.com/facebook/react/issues/3070#issuecomment-73311114
           * Change is handled by onClick which has better browser support:
           * https://stackoverflow.com/a/5575369/4620154
           */
        }}
      />
      <CheckboxLabel htmlFor={id} disabled={disabled} invalid={invalid}>
        {children}
        <Check aria-hidden="true" />
      </CheckboxLabel>
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  children: childrenPropType,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  className: PropTypes.string,
};
