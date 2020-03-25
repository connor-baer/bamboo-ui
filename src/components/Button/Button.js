import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../util/prop-types';
import { useComponents } from '../../hooks/use-components';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const DESTRUCTIVE = 'destructive';

const baseStyles = ({ theme }) => css`
  display: inline-block;
  font-weight: ${theme.fontWeight.bold};
  font-size: inherit;
  padding: ${theme.spacing.s} ${theme.spacing.m};
  transition: all ${theme.animation.micro};
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: ${theme.borderRadius.m};
  outline: none;
  line-height: 1;
  box-shadow: 0 1px 4px ${theme.color.shadow};
  cursor: pointer;
  color: #fff;

  &:hover,
  &:focus {
    box-shadow: 0 2px 8px ${theme.color.shadow};
    color: #fff;
  }

  &:active {
    box-shadow: 0 0 3px ${theme.color.shadow};
    color: #fff;
  }

  svg {
    fill: #fff;
  }

  &::-moz-focus-inner {
    padding: ${theme.spacing.s} ${theme.spacing.m};
    border-radius: ${theme.borderRadius.m};
  }
`;

const primaryStyles = ({ theme, variant }) =>
  variant === PRIMARY &&
  css`
    background-color: ${theme.color.primary[500]};

    &:hover,
    &:focus {
      background-color: ${theme.color.primary[700]};
    }

    &:focus {
      border-color: ${theme.color.primary[500]};
    }

    &:active {
      background-color: ${theme.color.primary[500]};
    }
  `;

const secondaryStyles = ({ theme, variant }) =>
  variant === SECONDARY &&
  css`
    background-color: ${theme.color.neutral[100]};
    color: ${theme.color.primary[500]};

    &:hover,
    &:focus {
      background-color: ${theme.color.white};
      color: ${theme.color.primary[500]};
    }

    &:focus {
      border-color: ${theme.color.neutral[300]};
    }

    &:active {
      background-color: ${theme.color.neutral[100]};
      color: ${theme.color.primary[500]};
    }

    svg {
      fill: ${theme.color.primary[500]};
    }
  `;

const destructiveStyles = ({ theme, variant }) =>
  variant === DESTRUCTIVE &&
  css`
    background-color: ${theme.color.red[500]};
    color: ${theme.color.white};

    &:hover,
    &:focus {
      background-color: ${theme.color.red[700]};
      color: ${theme.color.white};
    }

    &:focus {
      border-color: ${theme.color.red[500]};
    }

    &:active {
      background-color: ${theme.color.red[500]};
      color: ${theme.color.white};
    }
  `;

const disabledStyles = ({ disabled }) =>
  disabled &&
  css`
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.66;
    filter: grayscale(33%);
  `;

const StyledButton = styled('button')(
  baseStyles,
  primaryStyles,
  secondaryStyles,
  destructiveStyles,
  disabledStyles,
);
const Anchor = styled('a')(
  baseStyles,
  primaryStyles,
  secondaryStyles,
  destructiveStyles,
  disabledStyles,
);

export default function Button({
  variant = PRIMARY,
  disabled = false,
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

  if (onClick) {
    return (
      <StyledButton
        onClick={onClick}
        variant={variant}
        disabled={disabled}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        as={as}
        replace={replace}
        shallow={shallow}
        scroll={scroll}
        passHref={true}
      >
        <Anchor
          variant={variant}
          disabled={disabled}
          aria-disabled={disabled}
          {...rest}
        >
          {children}
        </Anchor>
      </Link>
    );
  }

  return null;
}

Button.propTypes = {
  variant: PropTypes.oneOf([PRIMARY, SECONDARY, DESTRUCTIVE]),
  children: childrenPropType,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  replace: PropTypes.bool,
  shallow: PropTypes.bool,
  scroll: PropTypes.bool,
};

Button.PRIMARY = PRIMARY;
Button.SECONDARY = SECONDARY;
Button.DESTRUCTIVE = DESTRUCTIVE;
