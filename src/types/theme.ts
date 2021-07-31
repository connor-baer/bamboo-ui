/**
 * Copyright 2021, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type Color = {
  100?: string;
  200: string;
  300?: string;
  400?: string;
  500?: string;
  600: string;
  700?: string;
  800?: string;
  900: string;
};

export type FontDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional';

export type FontStyle = 'normal' | 'italic';

export type Font = {
  name: string;
  sources: string[];
  style?: FontStyle;
  weight?: number;
  display?: FontDisplay;
  unicodeRange?: string;
};

export type Breakpoint = 'hand' | 'lap' | 'desk' | 'wall';

export type Breakpoints = {
  [name in Breakpoint]: string;
};

export type MediaQueries = {
  [name in Breakpoint]: string;
};

type Override = {
  condition: string;
  theme: Theme;
};

export interface Theme {
  color: {
    white: string;
    black: string;

    primary: Color;
    secondary: Color;
    neutral: Color;
    orange: Color;
    red: Color;
    violet: Color;
    blue: Color;
    green: Color;
    yellow: Color;

    text: string;
    background: string;
    highlight?: string;
    shadow: string;
    danger: string;
    success: string;
    warning: string;
  };

  breakpoints: Breakpoints;
  mq: MediaQueries;

  spacing: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };

  borderRadius: {
    s: string;
    m: string;
    l: string;
    circle: string;
    pill: string;
  };

  borderWidth: {
    s: string;
    m: string;
    l: string;
  };

  fonts: Font[];

  fontFamily: {
    sans: string;
    serif: string;
    mono: string;
  };

  fontSize: {
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };

  fontWeight: {
    light: number;
    regular: number;
    bold: number;
  };

  letterSpacing: {
    s: string;
    m: string;
    l: string;
  };

  lineHeight: {
    s: string;
    m: string;
    l: string;
  };

  overrides: Override[];
}
