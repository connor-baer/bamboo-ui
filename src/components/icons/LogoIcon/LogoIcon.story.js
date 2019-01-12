import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import { GROUPS } from '../../../../.storybook/hierarchySeparators';

import Link from '../../Link';
import LogoIcon from './LogoIcon';

storiesOf(`${GROUPS.ICONS}|LogoIcon`, module)
  .add(
    'LogoIcon',
    withInfo()(() => <LogoIcon alt={text('Alt text', 'A panda emoji')} />)
  )
  .add(
    'LogoIcon with link',
    withInfo()(() => (
      <Link href={text('Link', 'https://bamboo.connor.li')}>
        <a href={text('Link', 'https://bamboo.connor.li')}>
          <LogoIcon alt={text('Alt text', 'A panda emoji')} />
        </a>
      </Link>
    ))
  );
