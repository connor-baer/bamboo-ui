export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return (
    value === Object(value) && !isArray(value) && typeof value !== 'function'
  );
}

export function isEmpty(value: unknown): boolean {
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

export function isNil(value: unknown): value is null {
  return typeof value === 'undefined' || value === null;
}

export function toLower(
  value?: null | string | string[] | { toString: () => string },
): string {
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

export function includes(target: string, collection: string): boolean;
export function includes<T>(target: T, collection: T[]): boolean;
export function includes<T>(target: T, collection: T[] | string): boolean {
  return isEmpty(collection)
    ? false
    : collection.includes(target as T & string);
}

export function not<T>(
  fn: (...args: T[]) => unknown,
): (...args: T[]) => boolean {
  return (...args) => !fn(...args);
}
