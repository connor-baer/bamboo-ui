import { Collage, CollageProps } from './Collage';

export default {
  title: 'Images/Collage',
  component: Collage,
};

const images = Array(3)
  .fill('')
  .map((_, index) => {
    const n = index * 10;
    return {
      src: `https://source.unsplash.com/${500 + n}x${400 + n}/`,
      srcSet: [
        `https://source.unsplash.com/${500 + n}x${400 + n}/ ${500 + n}w`,
        `https://source.unsplash.com/${1000 + n}x${800 + n}/ ${1000 + n}w`,
      ].join(', '),
      alt: 'A random image',
    };
  }) as CollageProps['images'];

export const Base = (args: CollageProps) => (
  <div style={{ width: '80vw' }}>
    <Collage {...args} images={images} />
  </div>
);
