import { set, get as getCookie, getAll, CookieAttributes } from 'es-cookie';

import { isServer } from './is-server';

// Expiry date is in 5 years by default, so modals and notifications are
// essentially only displayed once.
const defaultOptions = { expires: 365 * 5 };

export function setCookie(
  name: string,
  value: string,
  options?: CookieAttributes,
): void {
  if (isServer) {
    return;
  }
  set(name, value, {
    ...defaultOptions,
    ...options,
  });
}

export function getAllCookies(): Record<string, string> {
  if (isServer) {
    return {};
  }
  return getAll();
}

export { getCookie };
