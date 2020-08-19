import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useCombobox, useMultipleSelection } from 'downshift';
import { isEmpty, includes, toLower } from 'lodash/fp';

import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg';
import { Tag } from '../../Tag';
import { Label } from '../Label';
import {
  labelOpenStyles,
  InputElement,
  ExpandButton,
  SuggestionList,
  Suggestion,
  AutocompleteWrapper,
} from './shared';

function getFilteredItems({ items, selectedItems = [], inputValue = '' }) {
  return items.filter(
    (item) =>
      !includes(item, selectedItems) &&
      includes(toLower(inputValue), toLower(item)),
  );
}

const wrapperStyles = ({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${theme.spacing.xs};
  padding: 0 ${theme.spacing.m};
`;

const Wrapper = styled('div')(wrapperStyles);

const inputWrapperStyles = () => css`
  display: flex;
  flex-grow: 1;
  width: 8rem;
  padding: 1px;
`;

const InputWrapper = styled('div')(inputWrapperStyles);

export function AutocompleteMultiSelect({
  value,
  label,
  items = [],
  initialSelectedItems = [],
  initialInputValue = '',
  itemToString = (v) => v,
  filterItems = getFilteredItems,
  onChange,
  onInputValueChange,
  invalid,
  disabled,
  hasWarning,
  showValid,
  validationHint,
  className,
  ...props
}) {
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

  const handleInputValueChange = (nextInputValue) => {
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
    selectItem,
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
            selectItem(null);
          }

          break;
        default:
          break;
      }
    },
  });

  const showSuggestions = isOpen && !isEmpty(filteredItems);

  return (
    <AutocompleteWrapper className={className}>
      <Label
        label={label}
        invalid={invalid}
        disabled={disabled}
        showValid={showValid}
        hasWarning={hasWarning}
        validationHint={validationHint}
        css={labelOpenStyles(showSuggestions)}
        {...getLabelProps()}
      >
        <Wrapper>
          {selectedItems.map((selectedItem, index) => (
            <Tag
              key={`selected-item-${index}`}
              {...getSelectedItemProps({ selectedItem, index })}
              onRemove={() => removeSelectedItem(selectedItem)}
            >
              {selectedItem}
            </Tag>
          ))}
          <InputWrapper {...getComboboxProps()}>
            <InputElement
              {...getInputProps(
                getDropdownProps({ preventKeyAction: isOpen, ...props }),
              )}
            />
            <ExpandButton
              {...getToggleButtonProps()}
              aria-label="Toggle menu"
              title="Toggle menu"
              type="button"
            >
              <Chevron />
            </ExpandButton>
          </InputWrapper>
        </Wrapper>
      </Label>

      {showSuggestions && (
        <SuggestionList
          {...getMenuProps()}
          invalid={invalid}
          disabled={disabled}
          showValid={showValid}
          hasWarning={hasWarning}
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
        </SuggestionList>
      )}
    </AutocompleteWrapper>
  );
}

AutocompleteMultiSelect.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validationHint: PropTypes.string.isRequired,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  initialInputValue: PropTypes.string,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onInputValueChange: PropTypes.func,
  itemToString: PropTypes.func,
  filterItems: PropTypes.func,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  hasWarning: PropTypes.bool,
  showValid: PropTypes.bool,
  className: PropTypes.string,
};
