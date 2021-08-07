import { Paragraph, ParagraphProps } from './Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
};

const children =
  'Bacon ipsum dolor amet beef ham hock pig cow tail meatloaf. Shoulder sausage porchetta landjaeger. Ground round kevin tongue venison brisket burgdoggen pork belly landjaeger. Chuck jerky frankfurter kevin, beef ribs meatball leberkas pork chop tenderloin beef. Flank tail chuck meatloaf turducken. Meatball kielbasa shoulder, biltong pig tenderloin prosciutto. Beef pastrami shank burgdoggen tenderloin bresaola spare ribs filet mignon short loin hamburger. Venison pork loin prosciutto salami. Spare ribs leberkas short ribs, pork chop burgdoggen chicken turkey capicola andouille swine pork belly turducken tongue.';

export const Base = (args: ParagraphProps) => (
  <div style={{ width: '90vw', maxWidth: '50rem' }}>
    <Paragraph {...args} />
    <Paragraph {...args} />
  </div>
);

Base.args = {
  children,
};

const sizes = ['l', 'm', 's'] as const;

export const Sizes = (args: ParagraphProps) => (
  <div style={{ width: '90vw', maxWidth: '50rem' }}>
    {sizes.map((size) => (
      <Paragraph {...args} key="size" size={size} />
    ))}
  </div>
);

Sizes.args = {
  children,
};
