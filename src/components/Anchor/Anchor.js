import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { isEmpty } from 'lodash/fp';
import { sharedPropTypes } from '@sumup/circuit-ui';

import Link from '../Link';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.p500};
  font-weight: ${theme.fontWeight.bold};
  box-shadow: inset 0 -1px 0 0 currentColor;

  &:hover {
    color: ${theme.colors.p500};
    box-shadow: inset 0 -2px 0 0 currentColor;
  }

  &:focus {
    outline: thin solid currentColor;
    outline-offset: 0.25em;
  }

  &:active {
    color: ${theme.colors.p300};
    box-shadow: inset 0 -2px 0 0 currentColor;
  }
`;

const A = styled('a')(baseStyles);

const Anchor = ({
  children,
  title,
  className,
  id,
  target,
  rel,
  ...otherProps
}) => {
  if (isEmpty(otherProps.href)) {
    return <span {...{ title, className, id }}>{children}</span>;
  }

  return (
    <Link {...otherProps}>
      <A {...{ title, className, id, target, rel }}>{children}</A>
    </Link>
  );
};

Anchor.propTypes = {
  children: sharedPropTypes.childrenPropType.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string
};

/**
 * @component
 */
export default Anchor;
