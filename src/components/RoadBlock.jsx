import { useEffect, useState } from "react";

const RoadBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState("");
  const [showClose, setShowClose] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  // Available days with images
  const availableDays = [1, 3, 10, 18, 30, 31];
  
  // Get current date for dynamic image path
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
  const day = today.getDate();
  
  // Set initial image source
  useEffect(() => {
    const hasImageForToday = availableDays.includes(day);
    setCurrentImage(
      hasImageForToday 
        ? `/images/roadblock/${month}/${day}.jpg` 
        : "/images/roadblock/default.jpg"
    );
  }, [day, month]);

  // Handle image loading
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Handle image loading errors - fallback to default
  const handleImageError = (e) => {
    console.error('Error loading image, falling back to default');
    setCurrentImage("/images/roadblock/default.jpg");
  };

  // Close the roadblock
  const handleClose = () => {
    if (!showClose) return; // Only allow closing after countdown
    
    document.body.style.overflow = 'auto';
    sessionStorage.setItem('rb_seen', '1');
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300); // Smooth fade out
  };

  // Initialize component
  useEffect(() => {
    if (!sessionStorage.getItem('rb_seen')) {
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
    }
  }, []);

  // Handle countdown (10 seconds)
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setShowClose(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Handle click outside to close
  useEffect(() => {
    if (!showClose) return;
    
    const handleClickOutside = (e) => {
      if (e.target === document.querySelector('.roadblock-overlay')) {
        handleClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showClose]);

  if (!isVisible) return null;

  return (
    <div 
      className="roadblock-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        opacity: isClosing ? 0 : 1,
        transition: 'opacity 0.3s ease'
      }}
    >
      <div style={{
        position: 'relative',
        maxWidth: '500px',
        width: '90%',
        margin: '0 auto'
      }}>
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
        }}>
          {isLoading && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.9)',
              zIndex: 2
            }}>
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          <img
            src={currentImage}
            alt="Special Offer"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: 0,
            right: 0,
            textAlign: 'center',
            padding: '8px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'white',
            fontSize: '14px'
          }}>
            {!showClose ? (
              <span>Please wait {countdown} second{countdown !== 1 ? 's' : ''}...</span>
            ) : (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '0 10px'
              }}>
                <span>Click outside or press Esc to close</span>
                <button
                  onClick={handleClose}
                  style={{
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 12px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#dc2626'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = '#ef4444'}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadBlock;