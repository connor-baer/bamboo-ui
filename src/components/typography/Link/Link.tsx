import { Children, cloneElement, ReactElement } from 'react';

export type LinkProps<T> = T & {
  children: ReactElement<T>;
};

export function Link<T extends { href: string }>({
  children,
  ...props
}: LinkProps<T>): ReactElement<T> {
  const child = Children.only(children);
  // @ts-expect-error I'm not sure where the conflicting type for `children`
  // is coming from. This works :shrug:
  return cloneElement(child, props);
}
