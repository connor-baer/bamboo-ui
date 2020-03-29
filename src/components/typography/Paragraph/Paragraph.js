import React from 'react';

import { textPropType } from '../../../util/prop-types';

import Text from '../Text';

function Paragraph(props) {
  return (
    <Text
      as="p"
      size="m"
      weight="regular"
      slope="normal"
      lineHeight="l"
      {...props}
    />
  );
}

Paragraph.propTypes = textPropType;

/**
 * @component
 */
export default Paragraph;
