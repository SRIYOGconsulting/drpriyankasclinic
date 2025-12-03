import { useState, useEffect } from 'react';

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = '',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);
    
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${containerClassName}`}
        style={{ width, height }}
      >
        <span className="text-gray-400">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        loading="lazy"
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={() => setHasError(true)}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
      )}
    </div>
  );
}
