import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import { Global, css } from '@emotion/core';

export default function LoadingBar({ isLoading, startDelay = 500 }) {
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

  return (
    <Global
      styles={(theme) => css`
        #nprogress {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          background: ${theme.color.white};
          height: 3px;
          pointer-events: none;
          z-index: ${theme.zIndex.nprogress};
        }

        #nprogress .bar {
          background: ${theme.color.primary[600]};
          height: 100%;
          width: 100%;
        }

        #nprogress .peg {
          box-shadow: 0 0 10px ${theme.color.primary[600]},
            0 0 5px ${theme.color.primary[600]};
          display: block;
          height: 100%;
          opacity: 1;
          position: absolute;
          right: 0;
          transform: rotate(3deg) translate(0, -4px);
          width: 100px;
        }
      `}
    />
  );
}

LoadingBar.propTypes = {
  isLoading: PropTypes.bool,
  startDelay: PropTypes.number,
};
