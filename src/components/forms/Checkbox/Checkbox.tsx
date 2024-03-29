import { FormEvent, forwardRef, HTMLAttributes, ReactNode, Ref } from 'react';
import cx from 'classnames';
import { Check } from 'react-feather';

import { uniqueId } from '../../../util/unique-id';

import styles from './Checkbox.module.css';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  children: ReactNode;
  value: string;
  id: string;
  name: string;
  disabled: boolean;
  invalid: boolean;
  className: string;
}

/**
 * Checkbox component for forms.
 */
export const Checkbox = forwardRef(
  (
    {
      onChange,
      children,
      value,
      id: customId,
      name,
      disabled,
      invalid,
      className,
      ...props
    }: CheckboxProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const id = customId || uniqueId('checkbox_');

    return (
      <div className={cx(styles.wrapper, className)}>
        <input
          {...props}
          ref={ref}
          id={id}
          name={name}
          value={value}
          type="checkbox"
          disabled={disabled}
          aria-invalid={invalid}
          onClick={onChange}
          onChange={() => {
            /**
             * Noop to silence React warning:
             * https://github.com/facebook/react/issues/3070#issuecomment-73311114
             * Change is handled by onClick which has better browser support:
             * https://stackoverflow.com/a/5575369/4620154
             */
          }}
          className={cx(styles.input, invalid && styles.inputInvalid)}
        />
        <label
          htmlFor={id}
          className={cx(
            styles.label,
            invalid && styles.labelInvalid,
            disabled && styles.labelDisabled,
          )}
        >
          {children}
          <Check aria-hidden="true" strokeWidth={3} size={20} />
        </label>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
