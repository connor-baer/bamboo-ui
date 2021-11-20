import { HTMLAttributes } from 'react';

export type LinkProps<T> = HTMLAttributes<HTMLAnchorElement> & T;

export function Link<T>({ children, ...props }: LinkProps<T>): JSX.Element {
  return <a {...props}>{children}</a>;
}
