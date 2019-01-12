import { set, get as getCookie } from 'es-cookie';

import isServer from './is-server';

export function setCookie(name, value, options) {
  if (isServer) {
    return null;
  }
  // Expiry date is in 5 years by default, so modals and notifications are
  // essentially only displayed once.
  const defaultOptions = { expires: 365 * 5 };
  return set(name, value, {
    ...defaultOptions,
    ...options
  });
}

export { getCookie };
