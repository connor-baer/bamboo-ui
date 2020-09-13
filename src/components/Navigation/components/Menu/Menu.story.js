import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import Menu from '.';

export default {
  title: 'Components/Navigation/Menu',
  component: Menu,
};

export const Base = () => {
  const menuLink = text('Menu link', 'Account');
  return (
    <Menu
      userAvatarURL={text(
        'User avatar URL',
        'https://source.unsplash.com/B4TjXnI0Y2c/64x64/',
      )}
    >
      {menuLink && <Menu.Item href="/">{menuLink}</Menu.Item>}
    </Menu>
  );
};
