import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number in international format
  const message = 'Hello, I would like to book an appointment.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-4 bottom-[180px] z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        aria-label="Chat on WhatsApp"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ y: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp className="w-6 h-6" />
        {isHovered && (
          <motion.div 
            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, x: 10 }}
            animate={{ 
              opacity: 1,
              x: 0
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400,
              damping: 20 
            }}
          >
            Chat on WhatsApp
            <div className="absolute right-0 top-1/2 w-2 h-4 bg-gray-900 translate-x-1/2 -translate-y-1/2 transform -rotate-45"></div>
          </motion.div>
        )}
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
