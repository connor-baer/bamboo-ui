import { CoverImage, CoverImageProps } from './CoverImage';

export default {
  title: 'Images/CoverImage',
  component: CoverImage,
};

export const Base = (args: CoverImageProps) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    <CoverImage {...args} />
  </div>
);

Base.args = {
  src: 'https://source.unsplash.com/600x400/',
  srcSet: [
    'https://source.unsplash.com/600x400/ 600w',
    'https://source.unsplash.com/1200x800/ 1200w',
  ].join(', '),
  sizes: '50vw',
  alt: 'A random image',
  aspectRatio: 3 / 2,
};

export const WithLink = ({
  href,
  ...args
}: CoverImageProps & { href: string }) => (
  <a
    style={{ width: '90vw', maxWidth: '40rem', display: 'block' }}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <CoverImage {...args} />
  </a>
);

WithLink.args = {
  href: 'https://bamboo.madebyconnor.co',
  src: 'https://source.unsplash.com/600x400/',
  srcSet: [
    'https://source.unsplash.com/600x400/ 600w',
    'https://source.unsplash.com/1200x800/ 1200w',
  ].join(', '),
  sizes: '50vw',
  alt: 'A random image',
  aspectRatio: 3 / 2,
};
