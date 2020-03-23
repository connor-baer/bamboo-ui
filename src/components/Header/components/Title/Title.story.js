import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs/react';

import Title from './Title';

storiesOf('Components/Header', module).add('Header.Title', () => (
  <Title hasSubtitle={boolean('Has subtitle?', false)}>
    {text('Title', 'Bamboo UI')}
  </Title>
));
