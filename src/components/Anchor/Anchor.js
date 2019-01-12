import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { isEmpty } from 'lodash/fp';
import { sharedPropTypes } from '@sumup/circuit-ui';

import Link from '../Link';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.p500};
  font-weight: ${theme.fontWeight.bold};
  box-shadow: inset 0 -0.04em 0 0 currentColor;

  &:hover,
  &:focus {
    color: ${theme.colors.p500};
    box-shadow: inset 0 -0.08em 0 0 currentColor;
  }

  &:active {
    color: ${theme.colors.p300};
    box-shadow: inset 0 -0.08em 0 0 currentColor;
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
  id: PropTypes.string
};

/**
 * @component
 */
export default Anchor;
