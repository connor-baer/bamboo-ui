import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Images/Avatar',
  component: Avatar,
};

export const Base = (args: AvatarProps) => (
  <div style={{ width: '50vw', maxWidth: '40rem' }}>
    <Avatar {...args} />
  </div>
);

Base.args = {
  src: 'https://source.unsplash.com/600x600/?person',
  srcSet: [
    'https://source.unsplash.com/600x600/?person 600w',
    'https://source.unsplash.com/1200x1200/?person 1200w',
  ].join(', '),
  sizes: '50vw',
  alt: 'A random image',
};
