import React from 'react';

import { standard } from '../styles/theme';
import FontSize from './components/FontSize';
import Spacing from './components/Spacing';
import Color from './components/Color';

export default {
  title: 'Docs/Theme',
};

export const Typography = () =>
  Object.keys(standard.fontSize).map((fontSizeName) => (
    <FontSize key={fontSizeName} theme={standard} fontSizeName={fontSizeName} />
  ));

export const Spacings = () =>
  Object.keys(standard.spacing).map((spacingName) => (
    <Spacing key={spacingName} theme={standard} spacingName={spacingName} />
  ));

export const Colors = () =>
  Object.entries(standard.color).map((color) => (
    <Color key={color} theme={standard} color={color} />
  ));
