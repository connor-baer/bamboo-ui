import { keys } from 'lodash/fp';

import { isServer } from './is-server';

/* ISC License (ISC). Copyright 2017 Michal Zalecki */
// Adapted from https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea/
export function storageFactory(storage) {
  let inMemoryStorage = {};

  const isSupported = (() => {
    try {
      const testKey = '__some_random_key_you_are_not_going_to_use__';
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  })();

  function setItem(name, value) {
    if (isSupported) {
      storage.setItem(name, value);
    } else {
      inMemoryStorage[name] = value;
    }
  }

  function getItem(name) {
    if (isSupported) {
      return storage.getItem(name);
    }
    if (Object.prototype.hasOwnProperty.call(inMemoryStorage, name)) {
      return inMemoryStorage[name];
    }
    return null;
  }

  function removeItem(name) {
    if (isSupported) {
      storage.removeItem(name);
    } else {
      delete inMemoryStorage[name];
    }
  }

  function clear() {
    if (isSupported) {
      storage.clear();
    } else {
      inMemoryStorage = {};
    }
  }

  function key(index) {
    if (isSupported) {
      return storage.key(index);
    }
    return keys(inMemoryStorage)[index] || null;
  }

  function getLength() {
    return isSupported ? storage.length : Object.keys(inMemoryStorage).length;
  }

  return {
    setItem,
    getItem,
    removeItem,
    clear,
    key,
    isSupported,
    get length() {
      return getLength();
    },
  };
}

export const localStore = storageFactory(isServer ? null : window.localStorage);
export const sessionStore = storageFactory(
  isServer ? null : window.sessionStorage,
);
