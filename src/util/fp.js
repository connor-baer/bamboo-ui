export function isString(value) {
  return typeof value === 'string';
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isObject(value) {
  return (
    value === Object(value) && !isArray(value) && typeof value !== 'function'
  );
}

export function isEmpty(value) {
  if (!value) {
    return true;
  }

  if (isString(value) || isArray(value)) {
    return !value.length;
  }

  if (isObject(value)) {
    return !Object.keys(value).length;
  }

  return true;
}

export function isNil(value) {
  return typeof value === 'undefined' || value === null;
}

export function toLower(value) {
  if (!value) {
    return '';
  }

  if (isString(value)) {
    return value.toLowerCase();
  }

  if (value.toString) {
    return value.toString().toLowerCase();
  }

  if (isArray(value)) {
    return value.map(toLower).join(',');
  }

  return '';
}

export function includes(target, collection) {
  return collection.includes(target);
}

export function not(fn) {
  return (...args) => !fn(...args);
}
