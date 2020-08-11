import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Label } from '../Label';

const inputStyles = ({ theme }) => css`
  display: block;
  padding: 0 ${theme.spacing.m} ${theme.spacing.s};
  margin: 0;
  width: 100%;
  border: none;
  outline: 0;
  line-height: 1;
  background: transparent;
  color: ${theme.color.bodyColor};
  font-size: ${theme.fontSize.m};
`;

const InputElement = styled('input')(inputStyles);

export function Input({
  label,
  id: customId,
  type = 'text',
  disabled,
  invalid,
  hasWarning,
  showValid,
  className,
  ...props
}) {
  const id = customId;
  return (
    <Label
      label={label}
      htmlFor={id}
      invalid={invalid}
      disabled={disabled}
      showValid={showValid}
      hasWarning={hasWarning}
      className={className}
    >
      <InputElement
        id={id}
        type={type}
        invalid={invalid}
        disabled={disabled}
        {...props}
      />
    </Label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  hasWarning: PropTypes.bool,
  showValid: PropTypes.bool,
  className: PropTypes.string,
};
