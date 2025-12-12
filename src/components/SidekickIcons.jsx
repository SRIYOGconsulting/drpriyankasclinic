import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { FaTiktok, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';

const SidekickIcons = () => {
  const [isHovered, setIsHovered] = useState(null);
  
  const icons = [
    { 
      icon: <FaWhatsapp className="w-6 h-6 md:w-6 md:h-6 w-5 h-5" />, //  added responsive size
      label: 'Chat on WhatsApp',
      link: 'https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment',
      color: 'bg-green-500 hover:bg-green-600',
      delay: 0.1,
      pulse: true
    },
    { 
      icon: <FiPhone className="w-6 h-6 md:w-6 md:h-6 w-5 h-5" />, //  added responsive size
      label: 'Call Us',
      link: 'tel:+1234567890',
      color: 'bg-blue-500 hover:bg-blue-600',
      delay: 0.2,
      pulse: true
    },
    { 
      icon: <FaFacebookMessenger className="w-6 h-6 md:w-6 md:h-6 w-5 h-5" />, //  added responsive size
      label: 'Message Us',
      link: 'https://m.me/Doctor.Priyankas.Clinic',
      color: 'bg-blue-400 hover:bg-blue-500',
      delay: 0.3,
      pulse: true
    },
    { 
      icon: <FaTiktok className="w-6 h-6 md:w-6 md:h-6 w-5 h-5" />, //  added responsive size
      label: 'Follow on TikTok',
      link: 'https://www.tiktok.com/@drpriyankasclinic',
      color: 'bg-black hover:bg-gray-800',
      delay: 0.4,
      pulse: true
    }
  ];

  // Animation variants for the floating effect
  const floatingVariants = {
    initial: { y: 0 },
    animate: (i) => ({
      y: [0, -15, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: i * 0.2
      }
    })
  };

  // Animation variants for the icon movement
  const iconVariants = {
    initial: { y: 0 },
    animate: (i) => ({
      y: [0, -5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: i * 0.2
      }
    })
  };

  return (
 <div 
      className="fixed right-0 bottom-24 z-50 flex flex-col space-y-4 pr-4 
      md:space-y-4 space-y-2"  //  tighter spacing on mobile
    >
      {icons.map((item, index) => (
        <motion.div 
          key={index}
          className="relative group"
          initial={{ x: 100, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            transition: {
              delay: 0.1 * (index + 1),
              type: 'spring',
              stiffness: 300,
              damping: 20
            }
          }}
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
           className={`${item.color} text-white 
              w-14 h-14 md:w-14 md:h-14 w-10 h-10  
              rounded-full shadow-xl flex items-center justify-center relative overflow-hidden`}
            whileHover={{ 
              y: -8,
              scale: 1.1,
              boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.3)'
            }} //  mobile smaller size
            whileTap={{ 
              scale: 0.95 
            }}
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            custom={index}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 12
            }}
          >
            <motion.div 
              className="p-3"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              custom={index}
            >
              {item.icon}
            </motion.div>
            {item.pulse && (
              <motion.span
                className="absolute inset-0 rounded-full bg-white/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.a>
          
          <motion.div 
            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, x: 10 }}
            animate={{ 
              opacity: isHovered === index ? 1 : 0,
              x: isHovered === index ? 0 : 10
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400,
              damping: 20 
            }}
          >
            {item.label}
            <div className="absolute right-0 top-1/2 w-2 h-4 bg-gray-900 translate-x-1/2 -translate-y-1/2 transform -rotate-45"></div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default SidekickIcons;
