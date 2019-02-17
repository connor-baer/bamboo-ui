import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/groups';

import Link from '../Link';
import Navigation from '.';

const A = Navigation.Menu.Item.withComponent('a');

const links = [
  {
    icon: '🐼',
    label: 'Panda',
    url: '/'
  },
  {
    icon: '🐨',
    label: 'Koala',
    url: '/'
  },
  {
    icon: '🐻',
    label: 'Grizzly',
    url: '/'
  }
];

/* eslint-disable jsx-a11y/anchor-is-valid */
storiesOf(`${GROUPS.COMPONENTS}|Navigation`, module).add(
  'Navigation',
  withInfo()(() => (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navigation>
        <Navigation.Brand
          siteName={text('Site name', 'Bamboo UI')}
          siteLogo={text('Logo', '🎋')}
        />
        <Navigation.Links links={object('Links', links)} />
        <Navigation.Menu
          userAvatarURL={text(
            'User avatar URL',
            'https://source.unsplash.com/64x64/'
          )}
        >
          <Link href="/">
            <A>{text('Menu link', 'Account')}</A>
          </Link>
        </Navigation.Menu>
      </Navigation>
    </div>
  ))
);
