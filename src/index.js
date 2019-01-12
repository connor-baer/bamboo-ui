import { circuit } from './themes';

export { sharedPropTypes } from './util';

// Theme
const standard = { ...circuit }; // otherwise this get exported as a `Module`
const theme = {
  standard,
  circuit: standard
};

export { theme };
