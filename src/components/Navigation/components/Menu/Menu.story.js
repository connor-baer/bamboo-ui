import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../../.storybook/groups';

import Menu from '.';

const A = Menu.Item.withComponent('a');

storiesOf(`${GROUPS.COMPONENTS}|Navigation/Menu`, module).add('Menu', () => {
  const menuLink = text('Menu link', 'Account');
  return (
    <Menu
      userAvatarURL={text(
        'User avatar URL',
        'https://source.unsplash.com/64x64/'
      )}
    >
      {menuLink && <A href="/">{menuLink}</A>}
    </Menu>
  );
});
