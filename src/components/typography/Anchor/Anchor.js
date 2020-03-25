import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty } from 'lodash/fp';

import { useComponents } from '../../../hooks/use-components';
import { childrenPropType } from '../../../util/prop-types';
import { focusOutline } from '../../../styles/shared';

const baseStyles = ({ theme, backgroundColor }) => {
  const textShadowColor = backgroundColor || theme.color.bodyBg;
  return css`
    color: ${theme.color.primary[500]};
    font-weight: ${theme.fontWeight.bold};
    border-bottom: 1px solid currentColor;
    text-shadow: 1px 1px ${textShadowColor}, 1px -1px ${textShadowColor},
      -1px 1px ${textShadowColor}, -1px -1px ${textShadowColor};

    &:hover {
      color: ${theme.color.primary[500]};
      border-bottom-width: 2px;
    }

    &:active {
      color: ${theme.color.primary[700]};
      border-bottom-width: 2px;
    }

    &::selection {
      text-shadow: 1px 1px ${theme.color.selectionBg},
        1px -1px ${theme.color.selectionBg}, -1px 1px ${theme.color.selectionBg},
        -1px -1px ${theme.color.selectionBg};
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
  scroll: PropTypes.bool,
};

/**
 * @component
 */
export default Anchor;
