import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock, FaNotesMedical, FaUserMd, FaChevronLeft } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function AppointmentPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const serviceFromUrl = searchParams.get('service');
  const [formData, setFormData] = useState(() => ({
    fullName: '',
    email: '',
    phone: '+977 ',
    appointmentDate: '',
    appointmentTime: '',
    service: serviceFromUrl || '',
    message: ''
  }));

  // Update form data when serviceFromUrl changes
  useEffect(() => {
    if (serviceFromUrl) {
      const decodedService = decodeURIComponent(serviceFromUrl);
      setFormData(prev => ({
        ...prev,
        service: decodedService
      }));
    }
  }, [serviceFromUrl]);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: `We offer a comprehensive range of gynecological and obstetric services including:
      • Routine gynecological exams
      • Prenatal and postnatal care
      • Family planning and contraception
      • Infertility evaluation and treatment
      • Menopause management
      • Minimally invasive gynecological surgery
      • Cancer screenings and prevention
      • Adolescent gynecology
      
      Our services are designed to provide complete women's healthcare under one roof, with personalized care tailored to each patient's needs.`
    },
    {
      question: "How do I book an appointment?",
      answer: `You can book an appointment through the following methods:
      
      1. **Online Booking**: Fill out our appointment form with your details and preferred time slot.
      2. **Phone**: Call us at +977 9819090115 during our working hours.
      3. **In-Person**: Visit our clinic to schedule an appointment at the reception.
      
      We recommend booking routine check-ups at least 2 weeks in advance. For urgent matters, please call us directly, and we'll do our best to accommodate you.`
    },
    {
      question: "What should I bring to my first appointment?",
      answer: `For your first visit, please bring:
      • Valid photo ID (citizenship card, passport, or driver's license)
      • Health insurance card (if applicable)
      • List of current medications and dosages
      • Medical records from previous healthcare providers
      • Any relevant test results or imaging reports
      • A list of questions or concerns you'd like to discuss
      • Your vaccination records (if available)
      
      Arriving 15 minutes early will give you enough time to complete any necessary paperwork.`
    },
    {
      question: "What are your working hours?",
      answer: `Our clinic hours are:
      
      • **Monday to Friday**: 9:00 AM - 5:00 PM
      • **Saturday**: 9:00 AM - 1:00 PM
      • **Sunday**: Closed (Emergency services available)
      • **Public Holidays**: Closed (Emergency services available)
      
      We also offer extended hours on certain days by appointment. Please call to confirm availability.`
    },
    {
      question: "Do you accept insurance?",
      answer: `Yes, we accept most major insurance plans. Here's what you need to know:
      
      • Please bring your insurance card and valid ID to every visit
      • Co-payments are due at the time of service
      • We'll file claims directly with your insurance company
      • Please verify with your insurance provider about coverage details and any pre-authorization requirements
      • For self-pay patients, we offer competitive pricing and payment plans
      
      Our billing department can help answer any insurance-related questions you may have.`
    },
    {
      question: "What is your cancellation policy?",
      answer: `We understand that schedules change. Our cancellation policy is as follows:
      
      • Please notify us at least 24 hours in advance if you need to reschedule or cancel your appointment
      • Late cancellations (less than 24 hours) may be subject to a fee
      • Multiple no-shows may require a deposit for future appointments
      
      To cancel or reschedule, please call our office during business hours.`
    },
    {
      question: "How early should I arrive for my appointment?",
      answer: `We recommend the following arrival times:
      
      • **New Patients**: 20-30 minutes early to complete registration
      • **Follow-up Visits**: 10-15 minutes early
      • **Procedures**: 30 minutes early for preparation
      
      This helps ensure we can see you at your scheduled time. Late arrivals may need to be rescheduled to avoid delays for other patients.`
    },
  ];

  const services = [
    'HPV Vaccination',
    'HPV DNA Test',
    'PAP Smear',
    'Colposcopy',
    'LEEP',
    'CA 125, CEA, CA19-9 and other Blood Tests',
    'Breast USG',
    'TVS and USG',
    'Cervical and Endometrial Biopsy',
    'Prenatal, Antenatal and Postnatal Care and Counseling',
    'Safe Abortion Practices',
    'Family Planning and Counseling',
    'High Risk Pregnancy',
    'Infertility Diagnosis and Treatment',
    'Painless Delivery and Cesarean Delivery',
    'Genetic Screening',
    'STD Diagnosis and Management',
    'Diagnostic Hysteroscopy',
    'MVA',
    'Other (please specify in message)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message or redirect
      alert('Appointment request submitted successfully! We will contact you shortly to confirm.');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '+977 ',
        appointmentDate: '',
        appointmentTime: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-[80%] max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-pink-600 hover:text-pink-700 mb-6"
        >
          <FaChevronLeft className="mr-2" />
          Back
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Book an Appointment</h1>
              <p className="mt-2 text-gray-600">Fill out the form below to schedule your visit</p>
            </div>

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
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
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
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                      className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none bg-white"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Appointment Date */}
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
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Appointment Time */}
                <div className="relative">
                  <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaClock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="appointmentTime"
                      name="appointmentTime"
                      className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none bg-white"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a time slot</option>
                      <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                      <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                      <option value="12:00 PM">12:00 PM - 01:00 PM</option>
                      <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                      <option value="03:00 PM">03:00 PM - 04:00 PM</option>
                      <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
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
                    placeholder="Any specific requirements or additional information..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full group hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {isSubmitting ? 'Sending...' : 'Book an Appointment'}
                </button>
              </div>

              {/* Important Information */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Important Information</h4>
                <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
                  <li>Please arrive 15 minutes before your scheduled appointment.</li>
                  <li>Bring any previous medical records or test results related to your condition.</li>
                  <li>Late arrivals may need to be rescheduled.</li>
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
                        type="button"
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

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
