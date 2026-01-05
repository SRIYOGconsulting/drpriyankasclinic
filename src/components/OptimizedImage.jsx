import React from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  style = {},
  containerClassName = '',
  priority = false,
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

  // Filter out props that shouldn't be passed to the img element
  const { containerClassName: _, priority: __, ...imgProps } = props;

  return (
    <div className={containerClassName}>
      <img
        src={getImageUrl()}
        alt={alt || ''}
        loading={priority ? 'eager' : 'lazy'}
        className={className}
        style={imageStyle}
        {...imgProps}
      />
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  priority: PropTypes.bool,
  style: PropTypes.object,
};

export default OptimizedImage;
