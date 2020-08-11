import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { disableVisually, inputOutline } from '../../../styles/shared';
import { childrenPropType } from '../../../util/prop-types';

import { ReactComponent as Checkmark } from './svgs/circle-checkmark.svg';
import { ReactComponent as Help } from './svgs/circle-help.svg';
import { ReactComponent as Cross } from './svgs/circle-cross.svg';

const wrapperStyles = ({ theme }) => css`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  transition: all ${theme.animation.micro};
  border-radius: ${theme.borderRadius.m};
  background-color: ${theme.color.white};
  overflow: hidden;
`;

const disabledStyles = ({ disabled }) => disabled && disableVisually();

const Wrapper = styled('label')(wrapperStyles, disabledStyles, inputOutline);

const textStyles = ({ theme }) => css`
  display: block;
  padding: ${theme.spacing.s} ${theme.spacing.m} 0.125rem;
  color: ${theme.color.neutral[700]};
  font-size: ${theme.fontSize.s};
`;

const Text = styled('span')(textStyles);

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

export const Label = ({ label, children, ...props }) => {
  const Suffix = getSuffix(props);
  return (
    <Wrapper {...props}>
      <Text>{label}</Text>
      {children}
      {Suffix && <Suffix css={suffixStyles} role="presentation" />}
    </Wrapper>
  );
};

Label.propTypes = {
  children: childrenPropType,
  label: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  hasWarning: PropTypes.bool,
  showValid: PropTypes.bool,
  suffix: PropTypes.element,
};
