import { PandaIcon, PandaIconProps } from './PandaIcon';

export default {
  title: 'Icons/PandaIcon',
  component: PandaIcon,
};

export const Base = (args: PandaIconProps) => <PandaIcon {...args} />;

Base.args = {
  alt: 'A panda emoji',
};
