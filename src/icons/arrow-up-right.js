import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRight = (props) => {
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
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
};

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArrowUpRight;
