import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../../.storybook/groups';
import Menu from '.';
import Link from '../../../Link';

const A = Menu.Item.withComponent('a');

storiesOf(`${GROUPS.COMPONENTS}|Navigation/Menu`, module).add(
  'Menu',
  withInfo()(() => (
    <Menu
      userAvatarURL={text(
        'User avatar URL',
        'https://source.unsplash.com/64x64/'
      )}
    >
      <Link href="/">
        <A>{text('Menu link', 'Account')}</A>
      </Link>
    </Menu>
  ))
);
