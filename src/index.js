import * as cookies from './util/cookies';
import * as propTypes from './util/prop-types';
import * as styles from './styles/shared';
import * as themes from './styles/theme';

/**
 * Components
 */

// Typography
export { default as Text } from './components/typography/Text';
export { default as Paragraph } from './components/typography/Paragraph';
export { default as Heading } from './components/typography/Heading';
export { default as Anchor } from './components/typography/Anchor';
export { default as Intro } from './components/typography/Intro';
export { default as Small } from './components/typography/Small';
export { default as Emoji } from './components/typography/Emoji';

// Sections
export { default as Navigation } from './components/Navigation';
export { default as Header } from './components/Header';
export { default as Prefooter } from './components/Prefooter';
export { default as Footer } from './components/Footer';
export { default as Slider } from './components/Slider';

// Utility
export { default as LoadingBar } from './components/LoadingBar';
export { default as Meta } from './components/Meta';
export { default as Theme } from './components/Theme';
export { default as Hr } from './components/Hr';

// Icons
export { default as PandaIcon } from './components/icons/PandaIcon';
export { default as MoonIcon } from './components/icons/MoonIcon';
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

// Forms
export { Input } from './components/forms/Input';
export { Textarea } from './components/forms/Textarea';
export { Select } from './components/forms/Select';
export { Label } from './components/forms/Label';

export { default as Button } from './components/Button';

/**
 * Hooks
 */

export { useMedia } from './hooks/use-media';
export { useAnimationFrame } from './hooks/use-animation-frame';
export { useComponents, ComponentsProvider } from './hooks/use-components';

/**
 * Utils
 */

export { propTypes, cookies };
export { isServer } from './util/is-server';
export { isSaveData } from './util/is-save-data';
export { sessionStore, localStore } from './util/storage';

/**
 * Styles
 */

export { styles, themes };
export { BaseStyles } from './styles/base-styles';
