import { ParallaxImage, ParallaxImageProps } from './ParallaxImage';

export default {
  title: 'Images/ParallaxImage',
  component: ParallaxImage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Base = (args: ParallaxImageProps) => (
  <div style={{ height: '150vh', padding: '25vh 0' }}>
    <ParallaxImage {...args} />
  </div>
);

Base.args = {
  src: 'https://source.unsplash.com/600x400/',
  srcSet: [
    'https://source.unsplash.com/600x400/ 600w',
    'https://source.unsplash.com/1200x800/ 1200w',
  ].join(', '),
  alt: 'A random image',
  speed: 75,
};
