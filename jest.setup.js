import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { axe, toHaveNoViolations } from 'jest-axe';

global.render = render;
global.renderToHtml = renderToStaticMarkup;
global.fireEvent = fireEvent;
global.axe = axe;

// Add custom matchers
expect.extend(toHaveNoViolations);
