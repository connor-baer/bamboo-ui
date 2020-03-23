import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Subtitle from './Subtitle';

storiesOf('Components/Header', module).add('Header.Subtitle', () => (
  <Subtitle>{text('Subtitle', 'A React component libary')}</Subtitle>
));
