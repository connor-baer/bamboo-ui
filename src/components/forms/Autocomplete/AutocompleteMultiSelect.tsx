import { forwardRef, HTMLProps, Ref, useState } from 'react';
import cx from 'classnames';
import { useCombobox, useMultipleSelection } from 'downshift';

import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg';
import { isEmpty, toLower, includes } from '../../../util/fp';
import { Tag } from '../../Tag';
import { Label } from '../Label';

import { Suggestion } from './Suggestion';
import styles from './AutoComplete.module.css';

type Item = string;

type FilterItemsArgs = {
  items: Item[];
  selectedItems?: Item[];
  inputValue?: string;
};

export interface AutocompleteMultiSelectProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'onChange'> {
  label: string;
  placeholder: string;
  validationHint?: string;
  items?: Item[];
  initialInputValue?: string;
  initialSelectedItems?: Item[];
  onChange?: (value?: string[]) => void;
  onInputValueChange?: (value?: string) => void;
  itemToString?: (item: Item | null) => string;
  filterItems?: ({ items, inputValue }: FilterItemsArgs) => Item[];
  invalid?: boolean;
}

function getFilteredItems({
  items,
  selectedItems = [],
  inputValue = '',
}: FilterItemsArgs) {
  return items.filter(
    (item) =>
      !includes(item, selectedItems) &&
      includes(toLower(inputValue), toLower(item)),
  );
}

export const AutocompleteMultiSelect = forwardRef(
  (
    {
      value,
      label,
      items = [],
      initialSelectedItems = [],
      initialInputValue = '',
      itemToString = (v) => v || '',
      filterItems = getFilteredItems,
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
      selectedItems = [],
    } = useMultipleSelection({
      initialSelectedItems,
      onSelectedItemsChange: (state) => {
        if (onChange) {
          onChange(state.selectedItems);
        }
      },
    });

    const filteredItems = filterItems({ items, selectedItems, inputValue });

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
      items: filteredItems,
      itemToString,
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
          <div className={styles.multiSelectItems}>
            {selectedItems.map((selectedItem, index) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const { onClick, ...selectedItemProps } = getSelectedItemProps({
                selectedItem,
                index,
              });
              return (
                <Tag
                  key={`selected-item-${index}`}
                  {...selectedItemProps}
                  onRemove={() => removeSelectedItem(selectedItem)}
                >
                  {selectedItem}
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
                <Chevron />
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
