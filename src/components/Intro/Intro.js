import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { textPropType } from '../../util/shared-prop-types';
import Paragraph from '../Paragraph';

const baseStyles = ({ theme }) => css`
  margin-bottom: ${theme.spacings.giga};
`;

const Intro = styled(Paragraph)(baseStyles);

Intro.propTypes = textPropType;

Intro.defaultProps = {
  size: 'giga',
  weight: 'light'
};

/**
 * @component
 */
export default Intro;
