import React from 'react';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../util/prop-types';

import { Wrapper } from './components/Wrapper';
import { Title } from './components/Title';
import { Subtitle } from './components/Subtitle';

export function Header({ title, subtitle, children, size = 'xxl', ...rest }) {
  return (
    <Wrapper {...rest}>
      {title && (
        <Title size={size} hasSubtitle={Boolean(subtitle)}>
          {title}
        </Title>
      )}
      {subtitle && <Subtitle size={size}>{subtitle}</Subtitle>}
      {children}
    </Wrapper>
  );
}

Header.propTypes = {
  title: childrenPropType,
  subtitle: childrenPropType,
  children: childrenPropType,
  size: PropTypes.oneOf(['xl', 'xxl']),
};

Header.Wrapper = Wrapper;
Header.Title = Title;
Header.Subtitle = Subtitle;
