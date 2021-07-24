import React from 'react';
import styled from '@emotion/styled';

import { Divider, DividerProps } from './Divider';

const Container = styled('div')`
  width: 500px;
  max-width: 90%;
`;

export default {
  title: 'Components/Divider',
  component: Divider,
};

export const Base = (args: DividerProps) => (
  <Container>
    <Divider {...args} />
  </Container>
);

export const WithText = (args: DividerProps) => (
  <Container>
    <p>
      Lorem ipsum dolor amet echo park XOXO activated charcoal banjo deep v
      crucifix pinterest yr af tumeric literally. Tbh four loko tattooed
      kickstarter artisan. Lumbersexual tote bag selfies truffaut, tofu vape tbh
      adaptogen green juice lo-fi kombucha.
    </p>
    <Divider {...args} />
    <p>
      Roof party cronut seitan pitchfork keytar small batch migas ugh XOXO
      kickstarter pork belly tumblr. Taiyaki brunch vegan XOXO meggings. Kinfolk
      air plant edison bulb vexillologist helvetica chambray disrupt mixtape man
      braid banjo viral.
    </p>
  </Container>
);
