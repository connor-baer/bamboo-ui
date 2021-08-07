import { forwardRef, HTMLProps, Ref, useState } from 'react';
import cx from 'classnames';
import { useCombobox } from 'downshift';

import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg';
import { isEmpty, toLower, includes } from '../../../util/fp';
import { Label } from '../Label';

import { Suggestion } from './Suggestion';
import styles from './AutoComplete.module.css';

type Option = string;

type FilterOptionsArgs = {
  options: Option[];
  inputValue?: string;
};

export interface AutocompleteInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'onChange'> {
  label: string;
  placeholder: string;
  validationHint?: string;
  options?: Option[];
  initialSelectedOption?: Option;
  onChange?: (value?: string) => void;
  optionToString?: (option: Option | null) => string;
  filterOptions?: ({ options, inputValue }: FilterOptionsArgs) => Option[];
  invalid?: boolean;
}

function getFilteredOptions({ options, inputValue = '' }: FilterOptionsArgs) {
  return options.filter((option) =>
    includes(toLower(inputValue), toLower(option)),
  );
}

export const AutocompleteInput = forwardRef(
  (
    {
      label,
      onChange,
      options = [],
      initialSelectedOption,
      optionToString = (value) => value || '',
      filterOptions = getFilteredOptions,
      invalid,
      disabled,
      validationHint,
      className,
      ...props
    }: AutocompleteInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const {
      inputValue,
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox({
      items: filteredOptions,
      initialSelectedItem: initialSelectedOption,
      itemToString: optionToString,
      onInputValueChange: (state) => {
        setFilteredOptions(filterOptions({ options, ...state }));
        if (onChange) {
          onChange(state.inputValue);
        }
      },
    });

    const showSuggestions = isOpen && !isEmpty(filteredOptions);

    return (
      <div className={cx(styles.wrapper, className)}>
        <Label
          label={label}
          invalid={invalid}
          disabled={disabled}
          validationHint={validationHint}
          className={showSuggestions && styles.labelOpen}
          {...getLabelProps()}
        >
          <div {...getComboboxProps()} className={styles.inputWrapper}>
            <input
              {...getInputProps({ ref, ...props })}
              aria-invalid={invalid}
              className={styles.input}
            />
            <button
              {...getToggleButtonProps()}
              className={styles.expandButton}
              aria-label="Toggle menu"
              type="button"
            >
              <Chevron />
            </button>
          </div>
        </Label>

        {showSuggestions && (
          <ul
            {...getMenuProps()}
            className={cx(
              styles.suggestionList,
              invalid && styles.suggestionListInvalid,
            )}
          >
            {filteredOptions.map((option, index) => (
              <Suggestion
                key={`${option}-${index}`}
                isHighlighted={highlightedIndex === index}
                inputValue={inputValue}
                {...getItemProps({ item: option, index })}
              >
                {option}
              </Suggestion>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

AutocompleteInput.displayName = 'AutocompleteInput';
