import React from 'react';

export const isEnter = (event: KeyboardEvent | React.KeyboardEvent): boolean =>
  event.key === 'Enter';

export const isEscape = (event: KeyboardEvent | React.KeyboardEvent): boolean =>
  event.key === 'Escape';

export const isSpacebar = (
  event: KeyboardEvent | React.KeyboardEvent,
): boolean => event.key === ' ';

export const isArrowLeft = (
  event: KeyboardEvent | React.KeyboardEvent,
): boolean => event.key === 'ArrowLeft';

export const isArrowUp = (
  event: KeyboardEvent | React.KeyboardEvent,
): boolean => event.key === 'ArrowUp';

export const isArrowRight = (
  event: KeyboardEvent | React.KeyboardEvent,
): boolean => event.key === 'ArrowRight';

export const isArrowDown = (
  event: KeyboardEvent | React.KeyboardEvent,
): boolean => event.key === 'ArrowDown';
