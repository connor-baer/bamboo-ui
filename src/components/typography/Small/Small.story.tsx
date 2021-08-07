/* eslint-disable jsx-a11y/accessible-emoji */

import { Emoji } from '../Emoji';

import { Small, SmallProps } from './Small';

export default {
  title: 'Typography/Small',
  component: Small,
};

export const Base = (args: SmallProps) => (
  <div>
    <Small {...args}>
      <Emoji label="panda">🐼</Emoji> Panda
    </Small>
    <Small {...args}>
      <Emoji label="grizzly">🐻</Emoji> Grizzly
    </Small>
    <Small {...args}>
      <Emoji label="koala">🐨</Emoji> Koala
    </Small>
  </div>
);
