import { forwardRef, HTMLAttributes, Ref } from 'react';
import cx from 'classnames';

import { Label } from '../Label';
import { LabelBaseProps } from '../Label/Label';
import { uniqueId } from '../../../util/unique-id';

import styles from './Textarea.module.css';

export interface TextareaProps
  extends HTMLAttributes<HTMLTextAreaElement>,
    LabelBaseProps {
  placeholder: string;
  inputClassName?: string;
}

export const Textarea = forwardRef(
  (
    {
      label,
      id: customId,
      disabled,
      invalid,
      className,
      inputClassName,
      hideLabel,
      validationHint,
      suffix,
      ...props
    }: TextareaProps,
    ref: Ref<HTMLTextAreaElement>,
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
        suffix={suffix}
        className={cx(styles.label, className)}
      >
        <textarea
          ref={ref}
          id={id}
          aria-invalid={invalid}
          disabled={disabled}
          className={cx(styles.textarea, inputClassName)}
          {...props}
        />
      </Label>
    );
  },
);

Textarea.displayName = 'Textarea';
