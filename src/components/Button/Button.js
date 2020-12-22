import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../util/prop-types';
import { useComponents } from '../../hooks/use-components';
import {
  disableVisually,
  focusOutline,
  buttonOutline,
} from '../../styles/shared';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const DESTRUCTIVE = 'destructive';

const baseStyles = ({ theme }) => css`
  display: inline-block;
  font-weight: ${theme.fontWeight.bold};
  font-size: inherit;
  padding: ${theme.spacing.s} ${theme.spacing.m};
  margin: 0;
  transition: all ${theme.animation.micro};
  border-radius: ${theme.borderRadius.pill};
  border: none;
  outline: 0;
  line-height: 1;
  cursor: pointer;

  &:focus {
    ${focusOutline(theme)};
  }

  svg {
    fill: currentColor;
  }
`;

const primaryStyles = ({ theme, variant }) =>
  variant === PRIMARY &&
  css`
    background-color: ${theme.color.primary[500]};
    color: #fff;

    &:hover {
      background-color: ${theme.color.primary[700]};
    }

    &:active {
      background-color: ${theme.color.primary[900]};
    }
  `;

const secondaryStyles = ({ theme, variant }) =>
  variant === SECONDARY &&
  css`
    background-color: ${theme.color.neutral[200]};
    color: ${theme.color.neutral[900]};

    &:hover {
      background-color: ${theme.color.neutral[300]};
    }

    &:active {
      background-color: ${theme.color.neutral[400]};
    }
  `;

const destructiveStyles = ({ theme, variant }) =>
  variant === DESTRUCTIVE &&
  css`
    background-color: ${theme.color.red[500]};
    color: #fff;

    &:hover {
      background-color: ${theme.color.red[700]};
    }

    &:active {
      background-color: ${theme.color.red[900]};
    }
  `;

const disabledStyles = ({ disabled }) => disabled && disableVisually();

const StyledButton = styled('button')(
  baseStyles,
  buttonOutline,
  primaryStyles,
  secondaryStyles,
  destructiveStyles,
  disabledStyles,
);
const Anchor = styled('a')(
  baseStyles,
  buttonOutline,
  primaryStyles,
  secondaryStyles,
  destructiveStyles,
  disabledStyles,
);

export function Button({
  variant = PRIMARY,
  children,
  onClick,
  href,
  as,
  replace,
  shallow,
  scroll,
  ...props
}) {
  const { Link } = useComponents();

  if (props.disabled) {
    // eslint-disable-next-line no-param-reassign
    props['aria-disabled'] = props.disabled;
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
        <Anchor variant={variant} {...props}>
          {children}
        </Anchor>
      </Link>
    );
  }

  return (
    <StyledButton onClick={onClick} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
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
