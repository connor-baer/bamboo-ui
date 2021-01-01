import * as cookies from './util/cookies';
import * as propTypes from './util/prop-types';
import * as styles from './styles/shared';
import * as themes from './styles/theme';

/**
 * Components
 */

// Typography
export { Text } from './components/typography/Text';
export { Paragraph } from './components/typography/Paragraph';
export { Heading } from './components/typography/Heading';
export { Anchor } from './components/typography/Anchor';
export { Intro } from './components/typography/Intro';
export { Small } from './components/typography/Small';
export { Emoji } from './components/typography/Emoji';

// Sections
export { Navigation } from './components/Navigation';
export { Header } from './components/Header';
export { Prefooter } from './components/Prefooter';
export { Footer } from './components/Footer';
export { Slider } from './components/Slider';

// Utility
export { LoadingBar } from './components/LoadingBar';
export { Meta } from './components/Meta';
export { Theme } from './components/Theme';
export { Hr } from './components/Hr';

// Icons
export { PandaIcon } from './components/icons/PandaIcon';
export { MoonIcon } from './components/icons/MoonIcon';
export { LoadingIcon } from './components/icons/LoadingIcon';
export { Hamburger } from './components/icons/Hamburger';

// Images
export { Caption } from './components/images/Caption';
export { Collage } from './components/images/Collage';
export { CoverImage } from './components/images/CoverImage';
export { Figure } from './components/images/Figure';
export { Gallery } from './components/images/Gallery';
export { Image } from './components/images/Image';
export { ParallaxImage } from './components/images/ParallaxImage';
export { RatioImage } from './components/images/RatioImage';

// Layout
export { Align } from './components/layout/Align';
export { Columns } from './components/layout/Columns';
export { Main } from './components/layout/Main';

// Forms
export { Input } from './components/forms/Input';
export { Textarea } from './components/forms/Textarea';
export { Select } from './components/forms/Select';
export {
  AutocompleteInput,
  AutocompleteMultiSelect,
} from './components/forms/Autocomplete';
export { Checkbox } from './components/forms/Checkbox';
export { Label } from './components/forms/Label';

export { Button } from './components/Button';

/**
 * Hooks
 */

export { useMedia } from './hooks/use-media';
export { useAnimationFrame } from './hooks/use-animation-frame';
export { useOutsideClick } from './hooks/use-outside-click';
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

/**
 * Constants
 */

export { HEIGHT_NAVIGATION, HEIGHT_FOOTER } from './constants/height';
