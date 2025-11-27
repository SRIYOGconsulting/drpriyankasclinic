import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const phoneNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number in international format (e.g., 1234567890)
    const message = 'Hello, I would like to book an appointment.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(-50%) scale(1)'}
    >
      <FaWhatsapp className="text-white" size={32} />
    </div>
  );
};

export default WhatsAppButton;
