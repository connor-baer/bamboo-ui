import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import Menu from '.';

const A = Menu.Item.withComponent('a');

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
        'https://source.unsplash.com/64x64/',
      )}
    >
      {menuLink && <A href="/">{menuLink}</A>}
    </Menu>
  );
};
