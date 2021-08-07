import { Menu, MenuProps } from './Menu';

export default {
  title: 'Components/Navigation/Menu',
  component: Menu,
};

export const Base = (args: MenuProps) => <Menu {...args} />;

Base.args = {
  user: { image: 'https://source.unsplash.com/B4TjXnI0Y2c/64x64/' },
  actions: [{ children: 'Profile', href: '/profile' }],
};
