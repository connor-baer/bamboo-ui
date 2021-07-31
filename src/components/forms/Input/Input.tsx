import React, { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import { uniqueId } from '../../../util/unique-id';
import { Label } from '../Label';
import { LabelBaseProps } from '../Label/Label';

import styles from './Input.module.css';

export interface InputProps
  extends LabelBaseProps,
    Omit<HTMLProps<HTMLInputElement>, 'ref' | 'label'> {
  placeholder: string;
  inputClassName?: string;
}

export const Input = forwardRef(
  (
    {
      label,
      id: customId,
      type = 'text',
      disabled,
      invalid,
      className,
      inputClassName,
      validationHint,
      suffix,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const id = customId || uniqueId();
    return (
      <Label
        label={label}
        htmlFor={id}
        invalid={invalid}
        disabled={disabled}
        className={className}
        validationHint={validationHint}
        suffix={suffix}
      >
        <input
          ref={ref}
          id={id}
          type={type}
          aria-invalid={invalid}
          disabled={disabled}
          className={cx(styles.input, inputClassName)}
          {...props}
        />
      </Label>
    );
  },
);

Input.displayName = 'Input';
