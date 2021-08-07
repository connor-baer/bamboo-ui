import { LoadingBar, LoadingBarProps } from './LoadingBar';

export default {
  title: 'Components/LoadingBar',
  component: LoadingBar,
};

export const Base = (args: LoadingBarProps) => <LoadingBar {...args} />;

Base.args = {
  isLoading: true,
};
