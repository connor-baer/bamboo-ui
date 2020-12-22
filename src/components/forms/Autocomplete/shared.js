import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { toLower } from '../../../util/fp';
import { focusOutline, getStateColors } from '../../../styles/shared';

const autocompleteWrapperStyles = () => css`
  position: relative;
`;

export const AutocompleteWrapper = styled('div')(autocompleteWrapperStyles);

export const labelOpenStyles = (isOpen) =>
  isOpen &&
  css`
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  `;

const inputStyles = ({ theme }) => css`
  display: block;
  padding: ${theme.spacing.xxs} 0;
  margin: 0;
  width: 100%;
  border-radius: ${theme.borderRadius.s};
  border: none;
  outline: 0;
  box-shadow: none;
  line-height: 1;
  background-color: transparent;
  color: ${theme.color.bodyColor};
  font-size: ${theme.fontSize.m};
`;

export const InputElement = styled('input')(inputStyles);

const expandButtonStyles = ({ theme }) => css`
  display: inline-block;
  font-size: ${theme.fontSize.s};
  padding: ${theme.spacing.xxs};
  margin: 0;
  transition: background-color ${theme.animation.micro};
  background-color: ${theme.color.white};
  border-radius: ${theme.borderRadius.s};
  border: none;
  outline: 0;
  line-height: 0;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${theme.color.neutral[100]};
  }

  &:focus {
    ${focusOutline(theme)};
  }
`;

export const ExpandButton = styled('button')(expandButtonStyles);

const suggestionListStyles = ({ theme }) => css`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  list-style-type: none;
  border-bottom-right-radius: ${theme.borderRadius.s};
  border-bottom-left-radius: ${theme.borderRadius.s};
  overflow: hidden;
  width: 100%;
  z-index: ${theme.zIndex.autocomplete};
`;

const outlineStyles = ({ theme, invalid, hasWarning, showValid }) => {
  const colors = getStateColors({ theme, invalid, hasWarning, showValid });

  return css`
    box-shadow: 0 0 0 2px ${colors.active}, 0 0 6px ${theme.color.shadow};
  `;
};

export const SuggestionList = styled('ul')(suggestionListStyles, outlineStyles);

const suggestionStyles = ({ theme }) => css`
  background-color: ${theme.color.white};
  padding: ${theme.spacing.xs} ${theme.spacing.m};
  cursor: pointer;
`;

const highlightedStyles = ({ theme, isHighlighted }) =>
  isHighlighted &&
  css`
    background-color: ${theme.color.neutral[100]};
    color: ${theme.color.primary[500]};
  `;

const SuggestionItem = styled('li')(suggestionStyles, highlightedStyles);

const highlightStyles = ({ theme }) => css`
  font-weight: ${theme.fontWeight.bold};
  text-decoration: underline;
  background: inherit;
  color: inherit;
`;

const Highlight = styled('mark')(highlightStyles);

export const Suggestion = ({ children, inputValue, ...props }) => {
  const parts = highlightSearch(children, inputValue);
  return (
    <SuggestionItem {...props}>
      {parts.map((part) =>
        part.highlight ? <Highlight>{part.value}</Highlight> : part.value,
      )}
    </SuggestionItem>
  );
};

Suggestion.propTypes = {
  children: PropTypes.node,
  inputValue: PropTypes.string,
};

function highlightSearch(text = '', search) {
  if (!search) {
    return [{ value: text }];
  }
  const textValue = toLower(text);
  const searchValue = toLower(search);

  // Entire text matches
  if (textValue === searchValue) {
    return [{ value: text, highlight: true }];
  }

  const startIndex = textValue.indexOf(searchValue);

  // No match found
  if (startIndex < 0) {
    return [{ value: text }];
  }

  const endIndex = startIndex + searchValue.length;

  // Text starts with match
  if (startIndex === 0) {
    return [
      { value: text.substring(startIndex, endIndex), highlight: true },
      { value: text.substring(endIndex) },
    ];
  }

  // Text ends with match
  if (endIndex === textValue.length) {
    return [
      { value: text.substring(0, startIndex) },
      { value: text.substring(startIndex), highlight: true },
    ];
  }

  // Text matches in the middle
  return [
    { value: text.substring(0, startIndex) },
    { value: text.substring(startIndex, endIndex), highlight: true },
    { value: text.substring(endIndex) },
  ];
}
