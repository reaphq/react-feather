import React from 'react';
import PropTypes from 'prop-types';

const Rss = (props) => {
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
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
};

Rss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rss.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Rss;
