import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createSerializer } from 'jest-emotion';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ThemeProvider } from 'emotion-theming';

import { standard as theme } from './src/styles/theme';

const renderWithTheme = (renderFn) => (component, ...rest) =>
  renderFn(<ThemeProvider theme={theme}>{component}</ThemeProvider>, rest);

global.render = renderWithTheme(render);
global.renderToHtml = renderWithTheme(renderToStaticMarkup);
global.fireEvent = fireEvent;
global.axe = axe;

// This is defined by webpack in storybook builds using the DefinePlugin plugin.
global.STORYBOOK = false;
global.__DEV__ = false;
global.__PRODUCTION__ = false;
global.__TEST__ = true;

// Add custom matchers
expect.extend(toHaveNoViolations);

// Add a snapshot serializer that removes random hashes
// from emotion class names.
expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(className, index) {
      return `bamboo-${index}`;
    },
  }),
);
