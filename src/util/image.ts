const TRANSPARENT_FORMATS = ['.png', '.webp'];

export function isTransparent(src?: string): boolean {
  return !!src && TRANSPARENT_FORMATS.some((format) => src.includes(format));
}
