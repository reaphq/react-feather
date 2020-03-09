import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = (props) => {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
};

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArrowRight;
