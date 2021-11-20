import { forwardRef, HTMLAttributes, Ref } from 'react';

export interface ElementProps extends HTMLAttributes<HTMLElement> {
  as: keyof JSX.IntrinsicElements;
  ref?: Ref<HTMLElement>;
}

export const Element = forwardRef(
  ({ as: Tag, ...props }: ElementProps, ref: ElementProps['ref']) => (
    // @ts-expect-error HTML elements can be rendered as components.
    <Tag {...props} ref={ref} />
  ),
);

Element.displayName = 'Element';
