import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';

import { childrenPropType } from '../../../util/prop-types';
import { isEmpty } from '../../../util/fp';
import { useComponents } from '../../../hooks/use-components';
import { focusOutline } from '../../../styles/shared';

const baseStyles = ({ theme }) => css`
  padding: 0.125em 0.25em;
  margin: -0.125em -0.25em;
  color: ${theme.color.primary[500]};
  font-weight: ${theme.fontWeight.bold};
  text-decoration: underline;
  border-radius: ${theme.borderRadius.s};
  transition: color ${theme.animation.micro},
    background-color ${theme.animation.micro},
    text-decoration-thickness ${theme.animation.micro};

  &:hover {
    text-decoration-thickness: 0.1em;
    background-color: ${theme.color.primary[100]};
  }

  &:focus {
    border-radius: ${theme.borderRadius.s};
    ${focusOutline(theme)};
  }

  &:active {
    color: ${theme.color.primary[700]};
  }
`;

const A = styled('a', {
  shouldForwardProp: isPropValid,
})(baseStyles);

export function Anchor({
  children,
  href,
  as,
  replace,
  shallow,
  scroll,
  ...rest
}) {
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
}

Anchor.propTypes = {
  children: childrenPropType.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  replace: PropTypes.bool,
  shallow: PropTypes.bool,
  scroll: PropTypes.bool,
};
