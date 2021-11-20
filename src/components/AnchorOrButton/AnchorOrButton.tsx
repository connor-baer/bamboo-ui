import { forwardRef, HTMLAttributes, Ref } from 'react';

import { useComponents } from '../../hooks/useComponents';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

type AnchorProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type AnchorOrButtonProps = AnchorProps | ButtonProps;

function isButton(props: AnchorProps | ButtonProps): props is ButtonProps {
  // @ts-expect-error Only the AnchorProps contain the `href` prop
  return !props.href;
}

export const AnchorOrButton = forwardRef(
  ({ children, ...props }: AnchorOrButtonProps, ref: Ref<any>): JSX.Element => {
    const { Link } = useComponents();

    if (isButton(props)) {
      if (props.disabled) {
        /* eslint-disable no-param-reassign */
        props['aria-disabled'] = props.disabled;
        delete props.disabled;
        delete props.onClick;
        /* eslint-enable no-param-reassign */
      }

      return (
        <button {...props} ref={ref}>
          {children}
        </button>
      );
    }

    return (
      <Link {...(props as AnchorProps)} ref={ref}>
        {children}
      </Link>
    );
  },
);

AnchorOrButton.displayName = 'AnchorOrButton';
