import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { childrenPropType } from '../../util/prop-types';
import { useComponents } from '../../hooks/use-components';
import { disableVisually, focusOutline } from '../../styles/shared';

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
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: ${theme.borderRadius.m};
  outline: none;
  line-height: 1;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px ${theme.color.shadow};
  }

  &:active {
    box-shadow: 0 1px 2px ${theme.color.shadow};
  }

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
    background-color: ${theme.color.neutral[100]};
    color: ${theme.color.primary[500]};

    &:hover {
      background-color: ${theme.color.neutral[200]};
    }

    &:active {
      background-color: ${theme.color.neutral[300]};
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

  if (onClick) {
    return (
      <StyledButton onClick={onClick} variant={variant} {...props}>
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
        <Anchor variant={variant} {...props}>
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
