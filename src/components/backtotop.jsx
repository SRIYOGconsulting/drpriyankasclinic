import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 bg-pink-600 hover:bg-pink-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
      style={{ zIndex: 40 }}
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
}
