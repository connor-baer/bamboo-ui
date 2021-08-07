import { Headline, HeadlineProps } from './Headline';

export default {
  title: 'Typography/Headline',
  component: Headline,
};

export const Base = (args: HeadlineProps) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    <Headline {...args} />
  </div>
);

Base.args = {
  children: 'Bacon ipsum dolor amet beef ham hock pig  cow tail meatloaf',
};

const sizes = ['xxl', 'xl', 'l'] as const;

export const Sizes = (args: HeadlineProps) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    {sizes.map((size) => (
      <Headline {...args} key={size} size={size} />
    ))}
  </div>
);

Sizes.args = {
  children: 'Bacon ipsum dolor amet beef ham hock pig  cow tail meatloaf',
};
