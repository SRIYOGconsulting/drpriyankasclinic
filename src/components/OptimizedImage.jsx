import React from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  style = {},
  ...props 
}) => {
  // Handle different src formats (absolute, relative, or full URLs)
  const getImageUrl = () => {
    if (!src) return '';
    // If it's already a full URL or data URL, return as is
    if (src.startsWith('http') || src.startsWith('data:')) return src;
    // Handle public assets (assuming they're in the public folder)
    return `${process.env.PUBLIC_URL || ''}${src.startsWith('/') ? src : `/${src}`}`;
  };

  const imageStyle = {
    width: width === '100%' ? '100%' : `${width}px`,
    height: height ? `${height}px` : 'auto',
    maxWidth: '100%',
    objectFit: 'cover',
    ...style
  };

  return (
    <img
      src={getImageUrl()}
      alt={alt || ''}
      loading="lazy"
      className={className}
      style={imageStyle}
      {...props}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default OptimizedImage;
