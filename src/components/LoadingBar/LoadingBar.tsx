import { useEffect } from 'react';
import NProgress from 'nprogress';

import styles from './LoadingBar.module.css';

export interface LoadingBarProps {
  isLoading?: boolean;
  startDelay?: number;
}

NProgress.configure({
  showSpinner: false,
  template: `<div class="${styles.bar}" role="bar"><div class="${styles.peg}"></div></div>`,
});

export function LoadingBar({
  isLoading,
  startDelay = 500,
}: LoadingBarProps): null {
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        NProgress.start();
      }, startDelay);

      return () => {
        clearTimeout(timer);
      };
    }

    NProgress.done();
    return undefined;
  }, [isLoading, startDelay]);

  return null;
}
