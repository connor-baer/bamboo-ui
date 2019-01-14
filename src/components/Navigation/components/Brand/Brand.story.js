import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../../../.storybook/hierarchySeparators';
import Brand from '.';

storiesOf(`${GROUPS.COMPONENTS}|Navigation/Brand`, module).add(
  'Brand',
  withInfo()(() => (
    <Brand
      siteName={text('Site name', 'Bamboo UI')}
      siteLogo={text('Site logo', '🎋')}
    />
  ))
);
