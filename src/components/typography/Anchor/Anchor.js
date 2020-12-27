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
  position: relative;
  padding: 0.125em 0.25em;
  margin: -0.125em -0.25em;
  color: ${theme.color.primary[500]};
  font-weight: ${theme.fontWeight.bold};
  text-decoration: underline;
  background: none;
  border: 0;
  outline: none;
  border-radius: ${theme.borderRadius.s};
  transition: color ${theme.animation.micro},
    background-color ${theme.animation.micro},
    text-decoration-thickness ${theme.animation.micro};

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: ${theme.borderRadius.s};
    transition: background-color ${theme.animation.micro};
    opacity: 0.1;
  }

  &:hover {
    cursor: pointer;
    color: ${theme.color.primary[500]};
    text-decoration-thickness: 0.1em;

    &::before {
      background-color: currentColor;
    }
  }

  &:focus {
    ${focusOutline(theme)};
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  &:focus-visible {
    ${focusOutline(theme)};
  }

  &:active {
    color: ${theme.color.primary[700]};
  }
`;

const A = styled('a', {
  shouldForwardProp: isPropValid,
})(baseStyles);

const Button = styled('button', {
  shouldForwardProp: isPropValid,
})(baseStyles);

export function Anchor({
  children,
  onClick,
  href,
  as,
  replace,
  shallow,
  scroll,
  ...rest
}) {
  const { Link } = useComponents();

  if (isEmpty(href) && !onClick) {
    return <span {...rest}>{children}</span>;
  }

  if (isEmpty(href)) {
    return (
      <Button onClick={onClick} {...rest}>
        {children}
      </Button>
    );
  }

  return (
    <Link
      onClick={onClick}
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
  onClick: PropTypes.func,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  replace: PropTypes.bool,
  shallow: PropTypes.bool,
  scroll: PropTypes.bool,
};
