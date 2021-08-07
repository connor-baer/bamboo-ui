import { HTMLProps, ReactNode, Ref } from 'react';

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
  ref?: Ref<HTMLImageElement>;
}

export type CaptionProp = ReactNode;

export type AlignProp = 'center' | 'full' | 'right' | 'left';

export type LinkProp = {
  label: ReactNode;
  href: string;
  icon?: ReactNode;
};

export type UserProp = {
  firstName?: string;
  lastName?: string;
  image?: string;
};
