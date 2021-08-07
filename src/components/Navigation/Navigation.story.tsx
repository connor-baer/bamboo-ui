import { Navigation, NavigationProps } from './Navigation';

const links = [
  {
    icon: '🐼',
    children: 'Panda',
    href: '/',
    active: true,
  },
  {
    icon: '🐨',
    children: 'Koala',
    href: '/koala',
  },
  {
    icon: '🐻',
    children: 'Grizzly',
    href: '/grizzly',
  },
];

const actions = [
  {
    children: 'Profile',
    href: '/profile',
  },
  {
    children: 'Settings',
    href: '/settings',
  },
  {
    children: 'Logout',
    onClick: () => alert('Logged out'),
  },
];

export default {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Base = (args: NavigationProps) => (
  <div>
    <Navigation {...args} />
    <div style={{ width: '100vw', height: '150vh' }} />
  </div>
);

Base.args = {
  siteName: 'Bamboo UI',
  siteLogo: '🎋',
  links,
  user: {
    image: 'https://source.unsplash.com/B4TjXnI0Y2c/64x64/',
  },
  actions,
};
