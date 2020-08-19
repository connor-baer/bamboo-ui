import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { disableVisually, getStateColors } from '../../../styles/shared';
import { childrenPropType } from '../../../util/prop-types';

import { ReactComponent as Checkmark } from '../../../icons/circle-checkmark.svg';
import { ReactComponent as Help } from '../../../icons/circle-help.svg';
import { ReactComponent as Cross } from '../../../icons/circle-cross.svg';

const wrapperStyles = ({ theme }) => css`
  display: block;
  position: relative;
  padding: ${theme.spacing.xs} 0;
  margin: 0;
  transition: box-shadow ${theme.animation.micro},
    background-color ${theme.animation.micro};
  border-radius: ${theme.borderRadius.m};
  background-color: ${theme.color.white};
`;

const outlineStyles = ({ theme, invalid, hasWarning, showValid }) => {
  const colors = getStateColors({ theme, invalid, hasWarning, showValid });

  return css`
    box-shadow: 0 0 0 1px ${colors.default};

    svg {
      color: ${colors.default};
    }

    &:hover {
      box-shadow: 0 0 0 1px ${colors.hover};

      svg {
        color: ${colors.hover};
      }
    }

    &:focus,
    &:focus-within {
      box-shadow: 0 0 0 2px ${colors.focus};

      svg {
        color: ${colors.focus};
      }
    }

    &:active {
      box-shadow: 0 0 0 1px ${colors.active};

      svg {
        color: ${colors.active};
      }
    }
  `;
};

const disabledStyles = ({ disabled }) => disabled && disableVisually();

const Wrapper = styled('label')(wrapperStyles, outlineStyles, disabledStyles);

const textStyles = ({ theme }) => css`
  display: block;
  padding: ${theme.spacing.xxs} ${theme.spacing.xxxl} 0 ${theme.spacing.m};
  color: ${theme.color.neutral[700]};
  font-size: ${theme.fontSize.s};
`;

const Text = styled('span')(textStyles);

const validationHintStyles = ({ theme, invalid }) => css`
  display: block;
  padding: 0 ${theme.spacing.m} ${theme.spacing.xxs};
  color: ${invalid ? theme.color.red[700] : theme.color.neutral[500]};
  font-size: ${theme.fontSize.s};
`;

const ValidationHint = styled('span')(validationHintStyles);

const suffixStyles = (theme) => css`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  margin-top: ${theme.spacing.s};
  margin-right: ${theme.spacing.m};
`;

const getSuffix = ({ suffix, invalid, hasWarning, showValid }) => {
  if (suffix) {
    return suffix;
  }
  if (invalid) {
    return Cross;
  }
  if (hasWarning) {
    return Help;
  }
  if (showValid) {
    return Checkmark;
  }
  return null;
};

export const Label = ({ label, validationHint, children, ...props }) => {
  const Suffix = getSuffix(props);
  return (
    <Wrapper {...props}>
      <Text>{label}</Text>
      {children}
      {Suffix && <Suffix css={suffixStyles} role="presentation" />}
      {validationHint && (
        <ValidationHint invalid={props.invalid}>
          {validationHint}
        </ValidationHint>
      )}
    </Wrapper>
  );
};

Label.propTypes = {
  children: childrenPropType,
  label: PropTypes.string,
  validationHint: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  hasWarning: PropTypes.bool,
  showValid: PropTypes.bool,
  suffix: PropTypes.element,
};
