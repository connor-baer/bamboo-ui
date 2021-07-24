import * as cookies from './util/cookies';
import * as styles from './styles/shared';
import * as themes from './styles/theme';

/**
 * Components
 */

// Typography
export { Anchor } from './components/typography/Anchor';
export { Emoji } from './components/typography/Emoji';
export { Headline } from './components/typography/Headline';
export { Intro } from './components/typography/Intro';
export { Paragraph } from './components/typography/Paragraph';
export { Small } from './components/typography/Small';

// Sections
export { Footer } from './components/Footer';
export { Header } from './components/Header';
export { Navigation, Menu } from './components/Navigation';
export { Prefooter } from './components/Prefooter';
export { Slider } from './components/Slider';

// Utility
export { Divider } from './components/Divider';
export { LoadingBar } from './components/LoadingBar';
export { Meta } from './components/Meta';
export { Theme } from './components/Theme';

// Icons
export { Hamburger } from './components/icons/Hamburger';
export { LoadingIcon } from './components/icons/LoadingIcon';
export { MoonIcon } from './components/icons/MoonIcon';
export { PandaIcon } from './components/icons/PandaIcon';

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

export { useMedia } from './hooks/useMedia';
export { useAnimationFrame } from './hooks/use-animation-frame';
export { useOutsideClick } from './hooks/useOutsideClick';
export { useComponents, ComponentsProvider } from './hooks/useComponents';

/**
 * Utils
 */

export { cookies };
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
