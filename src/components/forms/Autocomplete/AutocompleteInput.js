import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useCombobox } from 'downshift';
import { isEmpty, toLower, includes } from 'lodash/fp';

import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg';
import { Label } from '../Label';

import {
  labelOpenStyles,
  AutocompleteWrapper,
  InputElement,
  ExpandButton,
  SuggestionList,
  Suggestion,
} from './shared';

function getFilteredItems({ items, inputValue = '' }) {
  return items.filter((item) => includes(toLower(inputValue), toLower(item)));
}

const inputWrapperStyles = ({ theme }) => css`
  display: flex;
  padding: 0 ${theme.spacing.m};
`;

export const InputWrapper = styled('div')(inputWrapperStyles);

export function AutocompleteInput({
  label,
  onChange,
  items = [],
  initialSelectedItem,
  itemToString = (value) => value,
  filterItems = getFilteredItems,
  invalid,
  disabled,
  hasWarning,
  showValid,
  validationHint,
  className,
  ...props
}) {
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

  return (
    <AutocompleteWrapper className={className}>
      <Label
        label={label}
        invalid={invalid}
        disabled={disabled}
        showValid={showValid}
        hasWarning={hasWarning}
        validationHint={validationHint}
        css={labelOpenStyles(isOpen)}
        {...getLabelProps()}
      >
        <InputWrapper {...getComboboxProps()}>
          <InputElement {...getInputProps(props)} />
          <ExpandButton
            {...getToggleButtonProps()}
            aria-label="Toggle menu"
            title="Toggle menu"
            type="button"
          >
            <Chevron />
          </ExpandButton>
        </InputWrapper>
      </Label>
      {isOpen && !isEmpty(filteredItems) && (
        <SuggestionList {...getMenuProps()}>
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

AutocompleteInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validationHint: PropTypes.string.isRequired,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  initialSelectedItem: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  itemToString: PropTypes.func,
  filterItems: PropTypes.func,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  hasWarning: PropTypes.bool,
  showValid: PropTypes.bool,
  className: PropTypes.string,
};
