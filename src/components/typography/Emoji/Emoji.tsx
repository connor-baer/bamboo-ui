import { forwardRef, HTMLAttributes, Ref } from 'react';

import { toLower } from '../../../util/fp';

export interface EmojiProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  children?: string;
  emoji?: string;
}

export const Emoji = forwardRef(
  (
    { children, label, emoji, ...rest }: EmojiProps,
    ref: Ref<HTMLSpanElement>,
  ): JSX.Element => (
    <span
      ref={ref}
      role="img"
      aria-label={label}
      title={`:${toLower(label).replace(' ', '-')}:`}
      {...rest}
    >
      {emoji || children}
    </span>
  ),
);

Emoji.displayName = 'Emoji';
