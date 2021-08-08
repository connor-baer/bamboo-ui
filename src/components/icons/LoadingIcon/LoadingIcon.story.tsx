import { LoadingIcon, LoadingIconProps } from './LoadingIcon';

export default {
  title: 'Icons/LoadingIcon',
  component: LoadingIcon,
};

export const Base = (args: LoadingIconProps) => <LoadingIcon {...args} />;

Base.args = {
  color: 'currentColor',
  size: '24',
};
