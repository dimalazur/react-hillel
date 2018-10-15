import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ className, type, name }) => {
  const cn = classNames(
    `fa${type.charAt(0).toLowerCase()}`,
    `fa-${name}`,
    className,
  );

  return <i className={cn} />;
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    'regular',
    'brands',
    'solid',
  ]),
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  type: 'regular',
  className: '',
};

export default Icon;
