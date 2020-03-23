import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';

import LoadingBar from '.';

storiesOf('Components/LoadingBar', module).add('LoadingBar', () => (
  <LoadingBar
    isLoading={boolean('Is loading?', true)}
    startDelay={number('Start delay', 500)}
  />
));
