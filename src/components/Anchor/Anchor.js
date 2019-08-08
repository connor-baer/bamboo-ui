import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty } from 'lodash/fp';

import useComponents from '../../hooks/use-components';
import { childrenPropType } from '../../util/shared-prop-types';
import { focusOutline } from '../../styles/shared';

/* eslint-disable max-len */
const baseStyles = ({ theme }) => css`
  color: ${theme.colors.p500};
  font-weight: ${theme.fontWeight.bold};
  border-bottom: 1px solid currentColor;
  text-shadow: 0.03em 0 ${theme.colors.bodyBg}, -0.03em 0 ${theme.colors.bodyBg},
    0 0.03em ${theme.colors.bodyBg}, 0 -0.03em ${theme.colors.bodyBg},
    0.06em 0 ${theme.colors.bodyBg}, -0.06em 0 ${theme.colors.bodyBg},
    0.09em 0 ${theme.colors.bodyBg}, -0.09em 0 ${theme.colors.bodyBg};

  &:hover {
    color: ${theme.colors.p700};
    border-bottom-width: 2px;
  }

  &:active {
    color: ${theme.colors.p300};
    border-bottom-width: 2px;
  }

  &::selection {
    text-shadow: 0.03em 0 ${theme.colors.selectionBg},
      -0.03em 0 ${theme.colors.selectionBg},
      0 0.03em ${theme.colors.selectionBg},
      0 -0.03em ${theme.colors.selectionBg},
      0.06em 0 ${theme.colors.selectionBg},
      -0.06em 0 ${theme.colors.selectionBg},
      0.09em 0 ${theme.colors.selectionBg},
      -0.09em 0 ${theme.colors.selectionBg};
  }

  &::before,
  &::after,
  *,
  *::before,
  *::after {
    text-shadow: none;
  }
`;
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

const Anchor = ({
  children,
  title,
  className,
  simpleUnderline = false,
  id,
  target,
  rel,
  ...otherProps
}) => {
  const { Link } = useComponents();

  if (isEmpty(otherProps.href)) {
    return <span {...{ title, className, id }}>{children}</span>;
  }

  return (
    <Link {...otherProps}>
      <A {...{ title, className, id, target, rel, simpleUnderline }}>
        {children}
      </A>
    </Link>
  );
};

Anchor.propTypes = {
  children: childrenPropType.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  simpleUnderline: PropTypes.bool,
  id: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string
};

/**
 * @component
 */
export default Anchor;
