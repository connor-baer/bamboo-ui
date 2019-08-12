import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType } from '../../util/shared-prop-types';

import Text from '../Text';

const baseStyles = ({ theme }) => css`
  margin-bottom: ${theme.spacings.mega};
`;

const StyledText = styled(Text)(baseStyles);

function Paragraph(props) {
  return (
    <StyledText
      as="p"
      size="kilo"
      weight="regular"
      slope="normal"
      lineHeight="mega"
      {...props}
    />
  );
}

Paragraph.propTypes = {
  as: PropTypes.string,
  ...textPropType
};

/**
 * @component
 */
export default Paragraph;
