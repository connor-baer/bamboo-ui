import { createPortal } from 'react-dom';
import { HTMLProps, ReactPortal } from 'react';

import { isServer } from '../../util/is-server';

const headRoot = isServer ? null : document.head;

export type HeadProps = HTMLProps<HTMLHeadElement>;

export function Head({ children }: HeadProps): ReactPortal | null {
  return headRoot ? createPortal(children, headRoot) : null;
}
