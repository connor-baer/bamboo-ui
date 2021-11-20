import { forwardRef, HTMLProps, Ref } from 'react';

import { useComponents } from '../../hooks/useComponents';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'size'>;

type AnchorProps = Omit<HTMLProps<HTMLAnchorElement>, 'ref' | 'size'>;

export type AnchorOrButtonProps = AnchorProps | ButtonProps;

function isAnchor(props: AnchorProps | ButtonProps): props is AnchorProps {
  return Boolean(props.href);
}

export const AnchorOrButton = forwardRef(
  ({ children, ...props }: AnchorOrButtonProps, ref: Ref<any>): JSX.Element => {
    const { Link } = useComponents();

    if (props.disabled) {
      // eslint-disable-next-line no-param-reassign
      props['aria-disabled'] = props.disabled;
    }

    if (isAnchor(props)) {
      return (
        <Link {...props} ref={ref}>
          {children}
        </Link>
      );
    }

    return (
      // @ts-expect-error The type-guard above ensures that only ButtonProps
      // are passed to the button.
      <button {...props} ref={ref}>
        {children}
      </button>
    );
  },
);

AnchorOrButton.displayName = 'AnchorOrButton';
