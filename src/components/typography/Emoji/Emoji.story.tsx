import { Emoji, EmojiProps } from './Emoji';

export default {
  title: 'Typography/Emoji',
  component: Emoji,
};

export const Base = (args: EmojiProps) => <Emoji {...args} />;

Base.args = {
  children: '🎋',
  label: 'Bamboo',
};
