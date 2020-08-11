import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { disableVisually, inputOutline } from '../../../styles/shared';
import { childrenPropType } from '../../../util/prop-types';

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

export const Label = ({ label, children, ...props }) => (
  <Wrapper {...props}>
    <Text>{label}</Text>
    {children}
  </Wrapper>
);

Label.propTypes = {
  children: childrenPropType,
  label: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  hasWarning: PropTypes.bool,
  showValid: PropTypes.bool,
};
