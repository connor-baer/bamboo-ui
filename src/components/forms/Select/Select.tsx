import { forwardRef, HTMLProps, Ref } from 'react';
import cx from 'classnames';

import { uniqueId } from '../../../util/unique-id';
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg';
import { Label } from '../Label';
import { LabelBaseProps } from '../Label/Label';

import styles from './Select.module.css';

type Option = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export interface SelectProps
  extends LabelBaseProps,
    Omit<HTMLProps<HTMLSelectElement>, 'ref' | 'label'> {
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
        <Chevron className={styles.chevron} />
      </Label>
    );
  },
);

Select.displayName = 'Select';
