import {
  ComponentType,
  forwardRef,
  HTMLProps,
  ReactNode,
  Ref,
  SVGProps,
} from 'react';
import cx from 'classnames';
import { XCircle } from 'react-feather';

import shared from '../../../styles/shared.module.css';

import styles from './Label.module.css';

export interface LabelBaseProps {
  label: string;
  hideLabel?: boolean;
  validationHint?: string;
  disabled?: boolean;
  invalid?: boolean;
  suffix?: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface LabelProps
  extends LabelBaseProps,
    Omit<HTMLProps<HTMLLabelElement>, 'ref' | 'label'> {
  children: ReactNode;
  htmlFor: string;
}

const getSuffix = ({
  suffix,
  invalid,
}: Pick<LabelProps, 'suffix' | 'invalid'>): ComponentType<
  SVGProps<SVGSVGElement>
> | null => {
  if (suffix) {
    return suffix;
  }
  if (invalid) {
    return XCircle;
  }
  return null;
};

export const Label = forwardRef(
  (
    {
      label,
      hideLabel,
      validationHint,
      children,
      invalid,
      disabled,
      suffix,
      className,
      ...props
    }: LabelProps,
    ref: Ref<HTMLLabelElement>,
  ) => {
    const Suffix = getSuffix({ invalid, suffix });
    return (
      <label
        {...props}
        ref={ref}
        className={cx(
          styles.label,
          invalid && styles.labelInvalid,
          disabled && styles.labelDisabled,
          className,
        )}
      >
        <span className={cx(styles.text, hideLabel && shared.hideVisually)}>
          {label}
        </span>
        {children}
        {Suffix && <Suffix className={styles.suffix} role="presentation" />}
        {validationHint && (
          <span
            className={cx(
              styles.validationHint,
              invalid && styles.validationHintInvalid,
            )}
          >
            {validationHint}
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = 'Label';
