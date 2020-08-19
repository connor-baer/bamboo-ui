let idCounter = 0;

export function uniqueId(prefix = '') {
  idCounter += 1;
  return `${prefix}${idCounter}`;
}
