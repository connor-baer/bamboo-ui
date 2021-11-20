import { forwardRef, HTMLAttributes, Ref } from 'react';
import cx from 'classnames';
import { ChevronDown } from 'react-feather';

import { uniqueId } from '../../../util/unique-id';
import { Label } from '../Label';
import { LabelBaseProps } from '../Label/Label';

import styles from './Select.module.css';

type Option = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export interface SelectProps
  extends HTMLAttributes<HTMLSelectElement>,
    LabelBaseProps {
  value?: string | null;
  placeholder: string;
  options: Option[];
  selectClassName?: string;
}

export const Select = forwardRef(
  (
    {
      label,
      id: customId,
      value,
      placeholder,
      options,
      disabled,
      invalid,
      hideLabel,
      validationHint,
      className,
      selectClassName,
      ...props
    }: SelectProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const id = customId || uniqueId();
    return (
      <Label
        label={label}
        htmlFor={id}
        invalid={invalid}
        disabled={disabled}
        hideLabel={hideLabel}
        validationHint={validationHint}
        className={className}
      >
        <select
          ref={ref}
          id={id}
          aria-invalid={invalid}
          disabled={disabled}
          className={cx(styles.select, selectClassName)}
          {...props}
        >
          {!value && (
            <option key="placeholder" value="">
              {placeholder}
            </option>
          )}
          {options.map(({ label: optionLabel, ...rest }) => (
            <option key={rest.value} {...rest}>
              {optionLabel}
            </option>
          ))}
        </select>
        <ChevronDown className={styles.chevron} size={20} />
      </Label>
    );
  },
);

Select.displayName = 'Select';
