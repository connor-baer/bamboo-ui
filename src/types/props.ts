import { HTMLAttributes, ReactNode, Ref } from 'react';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  srcSet?: string | string[];
  sizes?: string | string[];
  alt: string;
  color?: string;
  ref?: Ref<HTMLImageElement>;
}

export type CaptionProp = ReactNode;

export type AlignProp = 'center' | 'full' | 'right' | 'left';

export type UserProp = {
  firstName?: string;
  lastName?: string;
  image?: string;
};
