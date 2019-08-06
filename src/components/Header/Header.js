import React from 'react';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../util/shared-prop-types';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Subtitle from './components/Subtitle';

function Header({ title, subtitle, children, ...rest }) {
  return (
    <Wrapper {...rest}>
      {title && <Title hasColor={!!subtitle}>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: childrenPropType
};

Header.Wrapper = Wrapper;
Header.Title = Title;
Header.Subtitle = Subtitle;

/**
 * @component
 */
export default Header;
