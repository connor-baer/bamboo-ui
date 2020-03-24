import { entries, isObject, isNil } from 'lodash/fp';
import { setWith } from 'lodash';

export function createStaticTheme(theme) {
  const staticTheme = {};

  traverse(theme, buildStaticTheme(staticTheme));

  return staticTheme;
}

export function createVariables(theme) {
  const variables = {};

  traverse(theme, buildVariables(variables));

  const rules = entries(variables).map(([name, value]) => `${name}: ${value};`);

  return `:root { ${rules.join(' ')} }`;
}

function buildStaticTheme(theme) {
  return (key, value, path) => {
    const variable = `var(--${path.join('-')})`;
    // set(theme, path, variable);
    setWith(theme, path, variable, Object);
  };
}

function buildVariables(variables) {
  return (key, value, path) => {
    const name = `--${path.join('-')}`;
    // set(variables, name, value);
    setWith(variables, name, value, Object);
  };
}

export function traverse(obj, fn, path = []) {
  entries(obj).forEach(([key, value]) => {
    const fullPath = [...path, key];

    if (isNil(value)) {
      return;
    }

    if (!isObject(value)) {
      fn(key, value, fullPath);
      return;
    }

    traverse(value, fn, fullPath);
  });
}
