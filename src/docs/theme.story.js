import React from 'react';
import { storiesOf } from '@storybook/react';

import Themes from '../styles/themes';
import FontSize from './components/FontSize';
import Spacing from './components/Spacing';
import Color from './components/Color';

storiesOf('Docs/Theme', module)
  .add('Typography', () =>
    Object.keys(Themes.standard().fontSizes).map((fontSizeName) => (
      <FontSize key={fontSizeName} fontSizeName={fontSizeName} />
    )),
  )
  .add('Spacing', () =>
    Object.keys(Themes.standard().spacings).map((spacingName) => (
      <Spacing key={spacingName} spacingName={spacingName} />
    )),
  )
  .add('Colors', () =>
    Object.keys(Themes.standard().colors).map((colorName) => (
      <Color key={colorName} colorName={colorName} />
    )),
  );
