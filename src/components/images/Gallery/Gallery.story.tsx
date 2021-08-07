import { Gallery, GalleryProps } from './Gallery';

export default {
  title: 'Images/Gallery',
  component: Gallery,
};

export const Base = ({
  numberOfImages,
  ...args
}: GalleryProps & { numberOfImages: number }) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    <Gallery {...args} images={generateImages(numberOfImages)} />
  </div>
);

Base.args = {
  numberOfImages: 4,
  caption: 'Random photos from Unsplash',
};

function generateImages(amount: number) {
  return Array(amount)
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
    });
}
