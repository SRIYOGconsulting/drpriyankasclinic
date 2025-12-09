import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="bg-pink-600 hover:bg-pink-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
          aria-label="Back to top"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default BackToTop;
