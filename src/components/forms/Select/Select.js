import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../../util/prop-types';
import { Label } from '../Label';

const selectStyles = ({ theme }) => css`
  appearance: none;
  display: block;
  position: relative;
  width: 100%;
  padding: 0 ${theme.spacing.m} ${theme.spacing.s};
  margin: 0;
  border: none;
  outline: 0;
  box-shadow: none;
  line-height: 1;
  background: transparent;
  color: ${theme.color.bodyColor};
  font-size: ${theme.fontSize.m};
  cursor: pointer;
  z-index: ${theme.zIndex.select};
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  &::-ms-expand {
    display: none;
  }
`;

const SelectElement = styled('select')(selectStyles);

export function Select({
  label,
  id: customId,
  value,
  placeholder,
  children,
  options,
  disabled,
  invalid,
  hasWarning,
  showValid,
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
    >
      <SelectElement id={id} invalid={invalid} disabled={disabled} {...props}>
        {!value && (
          <option key="placeholder" value="">
            {placeholder}
          </option>
        )}
        {children ||
          (options &&
            options.map(({ label: labelValue, ...rest }) => (
              <option key={rest.value} {...rest}>
                {labelValue}
              </option>
            )))}
      </SelectElement>
    </Label>
  );
}

Select.propTypes = {
  children: childrenPropType,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ),
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  hasWarning: PropTypes.bool,
  showValid: PropTypes.bool,
};
