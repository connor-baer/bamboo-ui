import { css } from 'react-emotion';

import { mapValues } from 'lodash/fp';

// eslint-disable-next-line import/prefer-default-export
export const createMediaQueries = mapValues(mediaExpression => {
  const { prefix = '', suffix = '' } =
    typeof mediaExpression === 'string'
      ? {}
      : { prefix: '(min-width: ', suffix: 'px)' };
  const enhancedExpression = prefix + mediaExpression + suffix;
  return (...args) => css`
    @media ${enhancedExpression} {
      ${css(...args)};
    }
  `;
});
