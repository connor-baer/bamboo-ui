import React, { forwardRef, HTMLProps, Ref, useState } from 'react';
import cx from 'classnames';
import { useCombobox } from 'downshift';

import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg';
import { isEmpty, toLower, includes } from '../../../util/fp';
import { Label } from '../Label';

import { Suggestion } from './Suggestion';
import styles from './AutoComplete.module.css';

type Item = string;

type FilterItemsArgs = {
  items: Item[];
  inputValue?: string;
};

export interface AutocompleteInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'onChange'> {
  label: string;
  placeholder: string;
  validationHint: string;
  items?: Item[];
  initialSelectedItem?: Item;
  onChange?: (value?: string) => void;
  itemToString?: (item: Item | null) => string;
  filterItems?: ({ items, inputValue }: FilterItemsArgs) => Item[];
  invalid?: boolean;
}

function getFilteredItems({ items, inputValue = '' }: FilterItemsArgs) {
  return items.filter((item) => includes(toLower(inputValue), toLower(item)));
}

export const AutocompleteInput = forwardRef(
  (
    {
      label,
      onChange,
      items = [],
      initialSelectedItem,
      itemToString = (value) => value || '',
      filterItems = getFilteredItems,
      invalid,
      disabled,
      validationHint,
      className,
      ...props
    }: AutocompleteInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [filteredItems, setFilteredItems] = useState(items);
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
      items: filteredItems,
      initialSelectedItem,
      itemToString,
      onInputValueChange: (state) => {
        setFilteredItems(filterItems({ items, ...state }));
        if (onChange) {
          onChange(state.inputValue);
        }
      },
    });

    const showSuggestions = isOpen && !isEmpty(filteredItems);

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
            {filteredItems.map((item, index) => (
              <Suggestion
                key={`${item}-${index}`}
                isHighlighted={highlightedIndex === index}
                inputValue={inputValue}
                {...getItemProps({ item, index })}
              >
                {item}
              </Suggestion>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

AutocompleteInput.displayName = 'AutocompleteInput';
