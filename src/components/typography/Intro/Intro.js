import React from 'react';

import { textPropType } from '../../../util/prop-types';
import Paragraph from '../Paragraph';

function Intro(props) {
  return <Paragraph size="l" weight="light" lineHeight="m" {...props} />;
}

Intro.propTypes = textPropType;

/**
 * @component
 */
export default Intro;
