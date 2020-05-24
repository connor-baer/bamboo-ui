import React from 'react';
import { object, text } from '@storybook/addon-knobs/react';

import Navigation from '.';

const A = Navigation.Menu.Item.withComponent('a');

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
    <div style={{ width: '100vw' }}>
      <Navigation>
        <Navigation.Brand
          siteName={text('Site name', 'Bamboo UI')}
          siteLogo={text('Logo', '🎋')}
        />
        <Navigation.Links links={object('Links', links)} />
        <Navigation.Menu
          userAvatarURL={text(
            'User avatar URL',
            'https://source.unsplash.com/64x64/',
          )}
        >
          {menuLink && <A href="/">{menuLink}</A>}
        </Navigation.Menu>
      </Navigation>
      <div style={{ width: '100vw', height: '120vh' }} />
    </div>
  );
};
