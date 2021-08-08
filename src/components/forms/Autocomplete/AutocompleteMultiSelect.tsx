import { forwardRef, HTMLProps, Ref, useState } from 'react';
import cx from 'classnames';
import { useCombobox, useMultipleSelection } from 'downshift';
import { ChevronDown } from 'react-feather';

import { isEmpty, toLower, includes } from '../../../util/fp';
import { Tag } from '../../Tag';
import { Label } from '../Label';

import { Suggestion } from './Suggestion';
import styles from './AutoComplete.module.css';

type Option = string;

type FilterOptionsArgs = {
  options: Option[];
  selectedOptions?: Option[];
  inputValue?: string;
};

export interface AutocompleteMultiSelectProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'onChange'> {
  label: string;
  placeholder: string;
  validationHint?: string;
  options?: Option[];
  initialInputValue?: string;
  initialSelectedOptions?: Option[];
  onChange?: (value?: string[]) => void;
  onInputValueChange?: (value?: string) => void;
  optionToString?: (option: Option | null) => string;
  filterOptions?: ({ options, inputValue }: FilterOptionsArgs) => Option[];
  invalid?: boolean;
}

function getFilteredOptions({
  options,
  selectedOptions = [],
  inputValue = '',
}: FilterOptionsArgs) {
  return options.filter(
    (option) =>
      !includes(option, selectedOptions) &&
      includes(toLower(inputValue), toLower(option)),
  );
}

export const AutocompleteMultiSelect = forwardRef(
  (
    {
      value,
      label,
      options = [],
      initialSelectedOptions = [],
      initialInputValue = '',
      optionToString = (v) => v || '',
      filterOptions = getFilteredOptions,
      onChange,
      onInputValueChange,
      invalid,
      disabled,
      validationHint,
      className,
      ...props
    }: AutocompleteMultiSelectProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [inputValue, setInputValue] = useState(initialInputValue);
    const {
      getSelectedItemProps,
      getDropdownProps,
      addSelectedItem,
      removeSelectedItem,
      selectedItems: selectedOptions = [],
    } = useMultipleSelection({
      initialSelectedItems: initialSelectedOptions,
      onSelectedItemsChange: (state) => {
        if (onChange) {
          onChange(state.selectedItems);
        }
      },
    });

    const filteredOptions = filterOptions({
      options,
      selectedOptions,
      inputValue,
    });

    const handleInputValueChange = (nextInputValue = '') => {
      setInputValue(nextInputValue);
      if (onInputValueChange) {
        onInputValueChange(nextInputValue);
      }
    };

    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox({
      inputValue,
      items: filteredOptions,
      itemToString: optionToString,
      onStateChange: ({ inputValue: nextInputValue, type, selectedItem }) => {
        switch (type) {
          case useCombobox.stateChangeTypes.InputChange:
            handleInputValueChange(nextInputValue);
            break;
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            if (selectedItem) {
              handleInputValueChange('');
              addSelectedItem(selectedItem);
            }

            break;
          default:
            break;
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
          <div className={styles.multiSelectOptions}>
            {selectedOptions.map((selectedOption, index) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const { onClick, ...selectedOptionProps } = getSelectedItemProps({
                selectedItem: selectedOption,
                index,
              });
              return (
                <Tag
                  key={`selected-option-${index}`}
                  {...selectedOptionProps}
                  onRemove={() => removeSelectedItem(selectedOption)}
                >
                  {selectedOption}
                </Tag>
              );
            })}
            <div {...getComboboxProps()} className={styles.multiSelectWrapper}>
              <input
                {...getInputProps(
                  getDropdownProps({ preventKeyAction: isOpen, ref, ...props }),
                )}
                className={styles.input}
              />
              <button
                {...getToggleButtonProps()}
                className={styles.expandButton}
                aria-label="Toggle menu"
                type="button"
              >
                <ChevronDown size={20} />
              </button>
            </div>
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
