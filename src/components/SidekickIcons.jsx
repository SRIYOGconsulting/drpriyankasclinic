import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { FaTiktok, FaFacebookMessenger } from 'react-icons/fa';

const SidekickIcons = () => {
  const [isHovered, setIsHovered] = useState(null);
  
  const icons = [
    { 
      icon: <FiPhone className="w-6 h-6" />, 
      label: 'Call Us',
      link: 'tel:+1234567890',
      color: 'bg-green-500 hover:bg-green-600',
      delay: 0.1,
      pulse: true
    },
    { 
      icon: <FaFacebookMessenger className="w-6 h-6" />, 
      label: 'Message Us',
      link: 'https://www.messenger.com',
      color: 'bg-blue-500 hover:bg-blue-600',
      delay: 0.2,
      pulse: true
    },
    { 
      icon: <FaTiktok className="w-6 h-6" />, 
      label: 'Follow on TikTok',
      link: 'https://www.tiktok.com',
      color: 'bg-black hover:bg-gray-800',
      delay: 0.3,
      pulse: false
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4 p-2">
      {icons.map((item, index) => (
        <motion.div 
          key={index}
          className="relative group"
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item.color} text-white p-4 rounded-l-xl shadow-xl flex items-center justify-center relative overflow-hidden 
              transition-all duration-300 hover:shadow-2xl`}
            initial={{ x: 60, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              scale: isHovered === index ? 1.1 : 1,
              boxShadow: isHovered === index ? '0 10px 25px -5px rgba(0, 0, 0, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            transition={{ 
              delay: item.delay, 
              type: 'spring', 
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ x: -10 }}
          >
            {item.icon}
            {item.pulse && (
              <motion.span
                className="absolute inset-0 rounded-l-xl bg-white opacity-0 group-hover:opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.a>
          
          <motion.div 
            className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-r-lg whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isHovered === index ? 1 : 0,
              x: isHovered === index ? 0 : -20
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {item.label}
            <div className="absolute left-0 top-1/2 w-2 h-4 bg-gray-900 -translate-x-1/2 -translate-y-1/2 transform rotate-45"></div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default SidekickIcons;
