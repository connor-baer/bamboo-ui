let idCounter = 0;

export function uniqueId(prefix = ''): string {
  idCounter += 1;
  return `${prefix}${idCounter}`;
}
