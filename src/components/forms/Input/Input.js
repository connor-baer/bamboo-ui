import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { uniqueId } from '../../../util/unique-id';
import { Label } from '../Label';

const baseStyles = ({ theme }) => css`
  display: block;
  padding: ${theme.spacing.xxs} ${theme.spacing.m} ${theme.spacing.s};
  margin: 0;
  width: 100%;
  border: none;
  outline: 0;
  line-height: 1;
  background: transparent;
  color: ${theme.color.bodyColor};
  font-size: ${theme.fontSize.m};
`;

const InputElement = styled('input')(baseStyles);

export function Input({
  label,
  id: customId,
  type = 'text',
  disabled,
  invalid,
  hasWarning,
  showValid,
  className,
  inputStyles,
  suffix,
  ...props
}) {
  const id = customId || uniqueId();
  return (
    <Label
      label={label}
      htmlFor={id}
      invalid={invalid}
      disabled={disabled}
      showValid={showValid}
      hasWarning={hasWarning}
      className={className}
      suffix={suffix}
    >
      <InputElement
        id={id}
        type={type}
        invalid={invalid}
        disabled={disabled}
        css={inputStyles}
        {...props}
      />
    </Label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  hasWarning: PropTypes.bool,
  showValid: PropTypes.bool,
  className: PropTypes.string,
  suffix: PropTypes.element,
  inputStyles: PropTypes.object,
};
