import { ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

import { isServer } from '../../util/is-server';

const headRoot = isServer ? null : document.head;

export interface HeadProps {
  children: ReactNode;
}

export function Head({ children }: HeadProps): ReactPortal | null {
  return headRoot ? createPortal(children, headRoot) : null;
}
