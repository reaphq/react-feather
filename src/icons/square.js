import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
  const { color, size, ...otherProps } = props;
  let strokeWidth = 1.5;
  if (parseInt(size, 10) === 12) {
    strokeWidth = 1.25;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  );
};

Square.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Square.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Square;
