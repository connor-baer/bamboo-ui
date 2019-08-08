import * as sharedPropTypes from './util/shared-prop-types';
import * as cookies from './util/cookies';
import themes, * as themeHelpers from './styles/themes';

/**
 * Components
 */

// Typography
export { default as Anchor } from './components/Anchor';
export { default as Intro } from './components/Intro';
export { default as Small } from './components/Small';

// Sections
export { default as Navigation } from './components/Navigation';
export { default as Header } from './components/Header';
export { default as Prefooter } from './components/Prefooter';
export { default as Footer } from './components/Footer';

// Utility
export { default as LoadingBar } from './components/LoadingBar';
export { default as Meta } from './components/Meta';
export { default as Theme } from './components/Theme';
export { default as Hr } from './components/Hr';

// Icons
export { default as PandaIcon } from './components/icons/PandaIcon';
export { default as MoonIcon } from './components/icons/MoonIcon';
export { default as MotionIcon } from './components/icons/MotionIcon';
export { default as LoadingIcon } from './components/icons/LoadingIcon';
export { default as Hamburger } from './components/icons/Hamburger';

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
 * Hooks
 */

export { default as useTheme } from './hooks/use-theme';
export { default as useComponents } from './hooks/use-components';

/**
 * Utils
 */

export { sharedPropTypes, cookies };
export { default as isServer } from './util/is-server';
export { default as isSaveData } from './util/is-save-data';
export { default as ComponentsContext } from './util/components-context';

/**
 * Styles
 */

export { themes, themeHelpers };
export { default as GlobalStyles } from './styles/global-styles';
