import { useContext } from 'react';
import { ThemeContext } from '@emotion/core';

export default function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
