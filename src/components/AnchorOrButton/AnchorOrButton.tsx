import { forwardRef, HTMLProps, Ref } from 'react';

import { useComponents } from '../../hooks/useComponents';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'size'>;

interface AnchorProps
  extends Omit<HTMLProps<HTMLAnchorElement>, 'ref' | 'size'> {
  replace?: boolean;
  shallow?: boolean;
  scroll?: boolean;
}

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
      const { href, replace, shallow, scroll, ...rest } = props;
      return (
        <Link
          href={href}
          replace={replace}
          shallow={shallow}
          scroll={scroll}
          passHref={true}
        >
          <a {...rest} ref={ref}>
            {children}
          </a>
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
