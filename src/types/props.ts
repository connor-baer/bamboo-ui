import { HTMLProps, ReactNode } from 'react';

export interface ImageProps
  extends Omit<
    HTMLProps<HTMLImageElement>,
    'ref' | 'srcSet' | 'sizes' | 'crossOrigin'
  > {
  src: string;
  srcSet?: string | string[];
  sizes?: string | string[];
  alt: string;
  color?: string;
}

export type CaptionProp = ReactNode;

export type AlignProp = 'center' | 'full' | 'right' | 'left';
