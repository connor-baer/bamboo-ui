import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { transparentize } from 'polished';

import { childrenPropType } from '../../util/shared-prop-types';
import useComponents from '../../hooks/use-components';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const DESTRUCTIVE = 'destructive';

const baseStyles = ({ theme }) => {
  const shadow = transparentize(0.75, theme.colors.shadow);
  return css`
    display: inline-block;
    font-weight: ${theme.fontWeight.bold};
    font-size: inherit;
    padding: ${theme.spacings.kilo} ${theme.spacings.mega};
    transition: all ${theme.animations.micro};
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-radius: ${theme.borderRadius.giga};
    outline: none;
    line-height: 1;
    box-shadow: 0 1px 4px ${shadow};
    cursor: pointer;
    color: #fff;

    &:hover,
    &:focus {
      box-shadow: 0 2px 8px ${shadow};
      color: #fff;
    }

    &:active {
      box-shadow: 0 0 3px ${shadow};
      color: #fff;
    }

    svg {
      fill: #fff;
    }
  `;
};

const primaryStyles = ({ theme, variant }) =>
  variant === PRIMARY &&
  css`
    background-color: ${theme.colors.p600};

    &:hover,
    &:focus {
      background-color: ${theme.colors.p500};
    }

    &:focus {
      border-color: ${theme.colors.p700};
    }

    &:active {
      background-color: ${theme.colors.p700};
    }
  `;

const secondaryStyles = ({ theme, variant }) =>
  variant === SECONDARY &&
  css`
    background-color: ${theme.colors.n000};
    color: ${theme.colors.p600};

    &:hover,
    &:focus {
      background-color: ${theme.colors.white};
      color: ${theme.colors.p600};
    }

    &:focus {
      border-color: ${theme.colors.n300};
    }

    &:active {
      background-color: ${theme.colors.n200};
      color: ${theme.colors.p600};
    }

    svg {
      fill: ${theme.colors.p600};
    }
  `;

const destructiveStyles = ({ theme, variant }) =>
  variant === DESTRUCTIVE &&
  css`
    background-color: ${theme.colors.r600};

    &:hover,
    &:focus {
      background-color: ${theme.colors.r500};
    }

    &:focus {
      border-color: ${theme.colors.r700};
    }

    &:active {
      background-color: ${theme.colors.r700};
    }
  `;

const disabledStyles = ({ disabled }) =>
  disabled &&
  css`
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.75;
    filter: grayscale(25%);
  `;

const StyledButton = styled('button')(
  baseStyles,
  primaryStyles,
  secondaryStyles,
  destructiveStyles,
  disabledStyles
);
const Anchor = styled('a')(
  baseStyles,
  primaryStyles,
  secondaryStyles,
  destructiveStyles,
  disabledStyles
);

export default function Button({
  variant = PRIMARY,
  disabled = false,
  children,
  onClick,
  href,
  as,
  prefetch,
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
        prefetch={prefetch}
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
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  shallow: PropTypes.bool,
  scroll: PropTypes.bool
};

Button.PRIMARY = PRIMARY;
Button.SECONDARY = SECONDARY;
Button.DESTRUCTIVE = DESTRUCTIVE;
