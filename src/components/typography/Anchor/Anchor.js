import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty } from 'lodash/fp';

import useComponents from '../../../hooks/use-components';
import { childrenPropType } from '../../../util/shared-prop-types';
import { focusOutline } from '../../../styles/shared';

/* eslint-disable max-len */
const baseStyles = ({ theme, backgroundColor }) => {
  const textShadowColor = backgroundColor || theme.colors.bodyBg;
  return css`
    color: ${theme.colors.p600};
    font-weight: ${theme.fontWeight.bold};
    border-bottom: 1px solid currentColor;
    text-shadow: 1px 1px ${textShadowColor}, 1px -1px ${textShadowColor},
      -1px 1px ${textShadowColor}, -1px -1px ${textShadowColor};

    &:hover {
      color: ${theme.colors.p500};
      border-bottom-width: 2px;
    }

    &:active {
      color: ${theme.colors.p700};
      border-bottom-width: 2px;
    }

    &::selection {
      text-shadow: 1px 1px ${theme.colors.selectionBg},
        1px -1px ${theme.colors.selectionBg},
        -1px 1px ${theme.colors.selectionBg},
        -1px -1px ${theme.colors.selectionBg};
    }

    &::before,
    &::after,
    *,
    *::before,
    *::after {
      text-shadow: none;
    }
  `;
};
/* eslint-enable max-len */

const simpleUnderlineStyles = ({ simpleUnderline }) =>
  simpleUnderline &&
  css`
    text-shadow: none;

    &::selection {
      text-shadow: none;
    }
  `;

const A = styled('a')(baseStyles, focusOutline, simpleUnderlineStyles);

const Anchor = ({ children, href, as, replace, shallow, scroll, ...rest }) => {
  const { Link } = useComponents();

  if (isEmpty(href)) {
    return <span {...rest}>{children}</span>;
  }

  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      shallow={shallow}
      scroll={scroll}
      passHref={true}
    >
      <A {...rest}>{children}</A>
    </Link>
  );
};

Anchor.propTypes = {
  children: childrenPropType.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  replace: PropTypes.bool,
  shallow: PropTypes.bool,
  scroll: PropTypes.bool
};

/**
 * @component
 */
export default Anchor;
