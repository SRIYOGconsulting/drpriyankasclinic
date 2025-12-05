import { useState, useEffect, useRef } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock, FaNotesMedical, FaUserMd, FaTimes } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

export default function AppointmentModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: `To book an appointment, please fill out the form with your full name, contact details, preferred date and time, and select the service you require. 
      
      Once you submit the form, our team will review your request and contact you within 24 hours to confirm your appointment. You'll receive a confirmation message with all the details via email and SMS.`
    },
    {
      question: "What information do I need to provide?",
      answer: `For a smooth booking process, please have the following information ready:
      • Full legal name (as it appears on your ID)
      • Active phone number and email address
      • Preferred appointment date and time
      • Reason for your visit or specific service needed
      • Insurance details (if applicable)
      • Any relevant medical history or symptoms
      
      All information provided is kept confidential and secure.`
    },
    {
      question: "Can I reschedule or cancel my appointment?",
      answer: `Yes, you can reschedule or cancel your appointment by:
      
      • Calling our clinic at +977 981 9090 115 during working hours
      • Emailing us at info@drpriyankasclinic.com with your booking details
      
      Please provide at least 24 hours' notice for cancellations or rescheduling to avoid any cancellation fees. For same-day cancellations, a nominal fee may apply.`
    },
    {
      question: "What should I bring to my first appointment?",
      answer: `For your first appointment, please bring:
      
      • A valid government-issued photo ID
      • Health insurance card (if applicable)
      • List of current medications and dosages
      • Previous medical records or test results
      • Any relevant imaging studies (X-rays, MRIs, etc.)
      • A list of questions or concerns you'd like to discuss
      • Payment method for any applicable co-pays
      
      Arriving prepared helps us provide you with the best possible care.`
    },
    {
      question: "How early should I arrive for my appointment?",
      answer: `We recommend arriving 15 minutes before your scheduled appointment time to:
      
      • Complete any necessary paperwork
      • Update your medical history if needed
      • Settle any payments or insurance matters
      • Relax before your consultation
      
      New patients should plan for an additional 10-15 minutes for registration. If you're running late, please call us at +977 981 9090 115 to inform our staff.`
    },
    {
      question: "What payment methods do you accept?",
      answer: `We accept various payment methods for your convenience:
      
      • Cash (NPR)
      • Credit/Debit cards (Visa, MasterCard)
      • Mobile payment (eSewa, Khalti)
      • Bank transfers (details available upon request)
      • Major health insurance plans (please verify coverage in advance)
      
      Payment is due at the time of service unless other arrangements have been made.`
    }
  ];

  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '+977 ',  // Pre-fill with Nepal country code
    appointmentDate: '',
    appointmentTime: '',
    service: '',
    message: ''
  });

  const services = [
    'General Checkup',
    'Gynecology Consultation',
    'Prenatal Care',
    'Family Planning',
    'Ultrasound',
    'Other Services'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTimeSelect = (time) => {
    setFormData(prev => ({
      ...prev,
      appointmentTime: time
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
     
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>
      
      
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div 
            ref={modalRef} 
            className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="absolute right-0 top-0 pr-4 pt-4">
              <button
                type="button"
                className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white/20 p-2 rounded-full">
                  <FaUserMd className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white" id="modal-title">
                    Book an Appointment
                  </h3>
                  <p className="mt-1 text-pink-100 text-sm">Schedule your visit with Dr. Priyanka</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder=""
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder=""
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">+977</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full pl-16 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="98XXXXXXXX"
                        value={formData.phone.replace(/^\+977\s?/, '')}
                        onChange={(e) => {
                          // Allow only numbers and limit to 10 digits
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setFormData({...formData, phone: `+977 ${value}`});
                        }}
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit Nepali phone number"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUserMd className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="service"
                        name="service"
                        required
                        className="appearance-none block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            formData.appointmentTime === time
                              ? 'bg-pink-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FaNotesMedical className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder=""
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Important Information */}
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Important Information</h4>
                  <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
                    <li>Please arrive 15 minutes before your scheduled appointment.</li>
                    <li>Bring any previous medical records or test results related to your condition.</li>
                  </ul>
                </div>

                {/* FAQ Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div 
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                        initial={false}
                        animate={{ 
                          borderColor: activeFaqIndex === index ? '#DB2777' : '#E5E7EB',
                          boxShadow: activeFaqIndex === index ? '0 4px 6px -1px rgba(219, 39, 119, 0.1), 0 2px 4px -1px rgba(219, 39, 119, 0.06)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.button
                          className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeFaqIndex === index ? 'bg-pink-50' : 'bg-white hover:bg-gray-50'}`}
                          onClick={() => toggleFaq(index)}
                          aria-expanded={activeFaqIndex === index}
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <motion.span
                            animate={{ rotate: activeFaqIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FiChevronDown className="h-5 w-5 text-gray-500" />
                          </motion.span>
                        </motion.button>
                        <AnimatePresence>
                          {activeFaqIndex === index && (
                            <motion.div
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0, height: 0 }
                              }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 pt-2 text-gray-600">
                                {faq.answer.split('\n\n').map((paragraph, i) => (
                                  <p key={i} className="mb-3 last:mb-0">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-4 pt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center items-center px-6 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : 'Book Appointment'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}