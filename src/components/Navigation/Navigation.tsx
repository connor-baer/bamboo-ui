import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

import { Links, LinksProps } from './components/Links';
import { Brand, BrandProps } from './components/Brand';
import { Menu, MenuProps } from './components/Menu';
import styles from './Navigation.module.css';

export interface NavigationProps extends LinksProps, BrandProps, MenuProps {}

export function Navigation({
  isTransparent,
  siteLogo,
  siteUrl,
  siteName,
  links,
  user,
  actions,
  className,
  ...rest
}: NavigationProps): JSX.Element {
  const [isFloating, setFloating] = useState(false);
  const [isInvisible, setInvisible] = useState(false);

  const timeout = useRef<number>();
  const currentScrollY = useRef<number>(0);
  const currentScrollDirection = useRef<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const latestKnownScrollY = window.scrollY;
      const scrolledDown =
        currentScrollY.current === latestKnownScrollY
          ? currentScrollDirection.current
          : currentScrollY.current <= latestKnownScrollY;

      setFloating(latestKnownScrollY > 44);
      setInvisible(isFloating && scrolledDown);

      currentScrollY.current = latestKnownScrollY;
      currentScrollDirection.current = scrolledDown;
    };

    const cancelScroll = () => {
      if (timeout.current) {
        window.cancelAnimationFrame(timeout.current);
      }
    };

    const debouncedHandleScroll = () => {
      cancelScroll();
      timeout.current = window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  });

  return (
    <header
      className={cx(
        styles.header,
        isTransparent && styles.headerTransparent,
        isFloating && styles.headerFloating,
        isInvisible && styles.headerInvisible,
        className,
      )}
      {...rest}
    >
      <Brand
        siteLogo={siteLogo}
        siteUrl={siteUrl}
        siteName={siteName}
        isTransparent={isTransparent}
      />

      <div className={styles.wrapper}>
        <Links links={links} isInvisible={isInvisible} />
        <Menu user={user} actions={actions}></Menu>
      </div>
    </header>
  );
}
