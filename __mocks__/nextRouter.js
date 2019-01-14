import Router from 'next/router';

const router = {
  asPath: window.location.pathname,
  push: () => {},
  prefetch: () => {},
  replace: () => {}
};

Router.router = router;
