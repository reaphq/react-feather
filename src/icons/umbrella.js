import React from 'react';
import PropTypes from 'prop-types';

const Umbrella = (props) => {
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
      <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
    </svg>
  );
};

Umbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Umbrella.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Umbrella;
