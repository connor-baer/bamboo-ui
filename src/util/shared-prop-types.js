import PropTypes from 'prop-types';

export const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

export const imagePropType = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  alt: PropTypes.string.isRequired
};

export const captionPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element
]);
