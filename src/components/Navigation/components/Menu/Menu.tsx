import { useState, useRef } from 'react';
import cx from 'classnames';

import { UserProp } from '../../../../types/props';
import { isEmpty } from '../../../../util/fp';
import { useComponents } from '../../../../hooks/useComponents';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import { Hamburger } from '../../../icons/Hamburger';
import { AnchorOrButton, AnchorOrButtonProps } from '../../../AnchorOrButton';

import styles from './Menu.module.css';

type ActionProps = AnchorOrButtonProps;
type DividerProps = { type: 'divider' };

export interface MenuProps {
  user?: UserProp;
  actions?: (ActionProps | DividerProps)[];
}

function Action(props: ActionProps): JSX.Element {
  return <AnchorOrButton className={styles.item} {...props} />;
}

function isDivider(action: ActionProps | DividerProps): action is DividerProps {
  return 'type' in action && action.type === 'divider';
}

export function Menu({ user, actions }: MenuProps): JSX.Element | null {
  const { Image } = useComponents();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  useClickOutside(ref, handleClick, isOpen);

  if (!actions || isEmpty(actions)) {
    return null;
  }

  const imageButtonLabel = isOpen ? 'Close menu' : 'Open menu';

  return (
    <div ref={ref} className={styles.wrapper}>
      {user && user.image ? (
        <button
          onClick={handleClick}
          type="button"
          aria-expanded={isOpen}
          title={imageButtonLabel}
          aria-label={imageButtonLabel}
          className={styles.imageButton}
        >
          <Image
            className={styles.image}
            src={user.image}
            alt="Profile photo"
          />
        </button>
      ) : (
        <Hamburger onClick={handleClick} isActive={isOpen} />
      )}

      <div className={cx(styles.dropdown, isOpen && styles.dropdownOpen)}>
        {actions.map((action) =>
          isDivider(action) ? (
            <div className={styles.divider} />
          ) : (
            <Action {...action} />
          ),
        )}
      </div>
    </div>
  );
}
