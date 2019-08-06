import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../.storybook/groups';

import Hamburger from './Hamburger';

storiesOf(`${GROUPS.ICONS}|Hamburger`, module).add('Hamburger', () => (
  <Hamburger
    isActive={boolean('Is active?', false)}
    onClick={e => {
      action('Hamburger clicked')(e);
    }}
    labelActive={text('Label active', 'Close menu')}
    labelInActive={text('Label inactive', 'Open menu')}
  />
));
