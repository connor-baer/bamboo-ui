import { HTMLProps } from 'react';
import cx from 'classnames';

import { toLower } from '../../../util/fp';

import styles from './AutoComplete.module.css';

export interface SuggestionProps extends HTMLProps<HTMLLIElement> {
  children: string;
  inputValue: string;
  isHighlighted: boolean;
}

export function Suggestion({
  children,
  inputValue,
  isHighlighted,
  ...props
}: SuggestionProps): JSX.Element {
  const parts = highlightSearch(children, inputValue);
  return (
    <li
      {...props}
      className={cx(
        styles.suggestion,
        isHighlighted && styles.suggestionHighlighted,
      )}
    >
      {parts.map((part) =>
        part.highlight ? (
          <mark className={styles.highlight}>{part.value}</mark>
        ) : (
          part.value
        ),
      )}
    </li>
  );
}

function highlightSearch(
  text = '',
  search: string,
): (
  | { value: string; highlight: true }
  | { value: string; highlight?: never }
)[] {
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
