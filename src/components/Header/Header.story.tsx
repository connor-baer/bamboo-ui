import React from 'react';

import { Small } from '../typography/Small';

import { Header, HeaderProps } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Base = (args: HeaderProps) => (
  <div style={{ width: '90vw', maxWidth: '40rem' }}>
    <Header {...args} />
  </div>
);

Base.args = {
  title: 'Bamboo UI',
  subtitle: 'A React component library',
  size: 'xxl',
  children: (
    <div style={{ marginTop: '1rem' }}>
      <Small>Made by Connor</Small>
    </div>
  ),
};
