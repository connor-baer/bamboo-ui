import { UrlObject } from 'url';

import { Children, cloneElement, ReactElement } from 'react';

export type LinkProps<T> = T & {
  href: string | UrlObject;
  children: ReactElement<T>;
};

export function Link<T>({ children, ...props }: LinkProps<T>): ReactElement<T> {
  if (typeof children === 'string') {
    // eslint-disable-next-line no-param-reassign, jsx-a11y/anchor-is-valid
    children = <a>{children}</a>;
  }

  const child = Children.only(children);

  // @ts-expect-error I'm not sure where the conflicting type for `children`
  // is coming from. This works 🤷🏻‍♂️
  return cloneElement(child, props);
}
