import React from 'react';
import { storiesOf } from '@storybook/react';

import { standard } from '../styles/theme';
import FontSize from './components/FontSize';
import Spacing from './components/Spacing';
import Color from './components/Color';

storiesOf('Docs/Theme', module)
  .add('Typography', () =>
    Object.keys(standard.fontSize).map((fontSizeName) => (
      <FontSize
        key={fontSizeName}
        theme={standard}
        fontSizeName={fontSizeName}
      />
    )),
  )
  .add('Spacing', () =>
    Object.keys(standard.spacing).map((spacingName) => (
      <Spacing key={spacingName} theme={standard} spacingName={spacingName} />
    )),
  )
  .add('Colors', () =>
    Object.entries(standard.color).map((color) => (
      <Color key={color} theme={standard} color={color} />
    )),
  );
