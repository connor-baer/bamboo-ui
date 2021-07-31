import React, { forwardRef, ReactNode, Ref } from 'react';

import { useComponents } from '../../../hooks/useComponents';
import { RatioImage, RatioImageProps } from '../RatioImage';
import { Caption } from '../Caption';
import { AlignProp } from '../../../types/props';

export interface FigureProps extends RatioImageProps {
  caption: ReactNode;
  align: AlignProp;
}

// function getSizes(theme, align) {
//   const lapMap = {
//     [RIGHT]: '360px',
//     [LEFT]: '360px',
//     [CENTER]: '755px',
//     [FULL]: '1155px',
//   };
//   const lapSize = `(min-width: ${theme.breakpoints.lap}) ${lapMap[align]}`;

//   const handMap = {
//     [RIGHT]: '380px',
//     [LEFT]: '380px',
//     [CENTER]: '790px',
//     [FULL]: '950px',
//   };
//   const handSize = `(min-width: ${theme.breakpoints.hand}) ${handMap[align]}`;

//   const mobileSize = '100vw';

//   return [lapSize, handSize, mobileSize].join(', ');
// }

export const Figure = forwardRef(
  (
    { align = 'center', caption, className, ...props }: FigureProps,
    ref: Ref<HTMLImageElement>,
  ) => {
    const { Align } = useComponents();

    if (!props.src) {
      return null;
    }

    // const sizes = getSizes(theme, align);

    return (
      <Align align={align} as="figure" className={className}>
        <RatioImage {...props} ref={ref} />
        {caption && <Caption>{caption}</Caption>}
      </Align>
    );
  },
);

Figure.displayName = 'Figure';
