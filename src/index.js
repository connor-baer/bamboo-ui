import * as sharedPropTypes from './util/shared-prop-types';
import * as cookies from './util/cookies';
import standard, * as themeHelpers from './styles/theme';

/**
 * Components
 */

// Typography
export { default as Anchor } from './components/Anchor';
export { default as Intro } from './components/Intro';
export { default as Link } from './components/Link';
export { default as Small } from './components/Small';

// Sections
export { default as Navigation } from './components/Navigation';
export { default as Header } from './components/Header';
export { default as Prefooter } from './components/Prefooter';
export { default as Footer } from './components/Footer';

// Utility
export { default as Meta } from './components/Meta';
export { default as ThemeProvider } from './components/ThemeProvider';

// Icons
export { default as LogoIcon } from './components/icons/LogoIcon';
export { default as MoonIcon } from './components/icons/MoonIcon';
export { default as MotionIcon } from './components/icons/MotionIcon';

// Images
export { default as Caption } from './components/images/Caption';
export { default as Collage } from './components/images/Collage';
export { default as CoverImage } from './components/images/CoverImage';
export { default as Figure } from './components/images/Figure';
export { default as Gallery } from './components/images/Gallery';
export { default as Image } from './components/images/Image';
export { default as ParallaxImage } from './components/images/ParallaxImage';
export { default as RatioImage } from './components/images/RatioImage';

// Layout
export { default as Align } from './components/layout/Align';
export { default as Columns } from './components/layout/Columns';
export { default as Main } from './components/layout/Main';

/**
 * Utils
 */

export { sharedPropTypes, cookies };
export { default as isServer } from './util/is-server';
export { default as isSaveData } from './util/is-save-data';

/**
 * Themes
 */

const themes = { standard };
export { themes, themeHelpers };
