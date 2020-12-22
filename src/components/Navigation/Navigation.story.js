import React from 'react';
import { object, text, boolean } from '@storybook/addon-knobs';

import { Menu } from './components/Menu';

import { Navigation } from '.';

const links = [
  {
    icon: '🐼',
    label: 'Panda',
    url: '/',
  },
  {
    icon: '🐨',
    label: 'Koala',
    url: '/koala',
  },
  {
    icon: '🐻',
    label: 'Grizzly',
    url: '/grizzly',
  },
];

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

export const Base = () => {
  const menuLink = text('Menu link', 'Account');
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navigation
        brand={{
          siteName: text('Site name', 'Bamboo UI'),
          siteLogo: text('Logo', '🎋'),
        }}
        links={object('Links', links)}
        user={{
          image: text(
            'User avatar URL',
            'https://source.unsplash.com/B4TjXnI0Y2c/64x64/',
          ),
        }}
        menu={menuLink && <Menu.Item href="/">{menuLink}</Menu.Item>}
        isTransparent={boolean('isTransparent', false)}
      ></Navigation>
      <div style={{ width: '100vw', height: '150vh' }} />
    </div>
  );
};
