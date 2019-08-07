import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../util/shared-prop-types';

const baseStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes.giga};
  font-weight: ${theme.fontWeight.light};
  line-height: ${theme.lineHeights.mega};
  margin-bottom: ${theme.spacings.giga};
`;

const Intro = styled('h2')(baseStyles);

Intro.propTypes = {
  children: childrenPropType.isRequired
};

/**
 * @component
 */
export default Intro;
