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
  const [showAllServices, setShowAllServices] = useState(false);
  const serviceFromUrl = searchParams.get('service');
  const [formData, setFormData] = useState(() => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+977 ',
    appointmentDate: '',
    appointmentTime: '',
    services: serviceFromUrl ? [serviceFromUrl] : [],
    emergencyContact: '',
    emergencyRelation: '',
    referralTitle: 'Dr.',
    referralName: '',
    referralNumber: '',
    message: ''
  }));

  // Update form data when serviceFromUrl changes
  useEffect(() => {
    if (serviceFromUrl) {
      const decodedService = decodeURIComponent(serviceFromUrl);
      setFormData(prev => ({
        ...prev,
        services: [decodedService]
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
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => {
        if (checked) {
          return {
            ...prev,
            services: [...prev.services, value]
          };
        } else {
          return {
            ...prev,
            services: prev.services.filter(service => service !== value)
          };
        }
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate that at least one service is selected
    if (formData.services.length === 0) {
      alert('Please select at least one service.');
      return;
    }
    
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '+977 ',
        appointmentDate: '',
        appointmentTime: '',
        services: [],
        emergencyContact: '',
        emergencyRelation: '',
        referralTitle: 'Dr.',
        referralName: '',
        referralNumber: '',
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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Health Journey Starts Here</h1>
              <p className="mt-2 text-gray-600">Schedule your visit with our expert healthcare professionals today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* Name Fields - Stacked on mobile, side by side on md+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="relative">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
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

                {/* Service and Date Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                  {/* Services */}
                  <div className="relative col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Services <span className="text-red-500">*</span>
                      <span className="text-xs text-gray-500 block mt-1 font-normal">Select all that apply</span>
                    </label>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-3 border border-gray-200 rounded-lg">
                        {services.slice(0, showAllServices ? services.length : 5).map((service, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              id={`service-${index}`}
                              name="services"
                              type="checkbox"
                              value={service}
                              checked={formData.services.includes(service)}
                              onChange={handleChange}
                              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`service-${index}`} className="ml-2 text-sm text-gray-700">
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                      {!showAllServices && services.length > 5 && (
                        <button
                          type="button"
                          onClick={() => setShowAllServices(true)}
                          className="text-sm text-pink-600 hover:text-pink-700 font-medium"
                        >
                          + Show all {services.length} services
                        </button>
                      )}
                    </div>
                    {formData.services.length > 0 && (
                      <p className="mt-2 text-sm text-gray-500">
                        Selected: {formData.services.join(', ')}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                    {/* Preferred Date */}
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

                    {/* Preferred Time */}
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
                          <option value="09:00 AM">09:00 AM - 12:00 PM</option>
                          <option value="12:00 PM">12:00 PM - 03:00 PM</option>
                          <option value="03:00 PM">03:00 PM - 06:00 PM</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <FiChevronDown className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                

                {/* Emergency Contact and Relation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                  <div className="relative">
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                      Emergency Contact <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Emergency contact number"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="emergencyRelation" className="block text-sm font-medium text-gray-700 mb-1">
                      Relation to You <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-4 w-4 text-gray-400" />
                      </div>
                      <select
                        id="emergencyRelation"
                        name="emergencyRelation"
                        className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none bg-white"
                        value={formData.emergencyRelation}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select relation</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Parent">Parent</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Child">Child</option>
                        <option value="Friend">Friend</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FiChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Referral Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                  <div className="relative">
                    <label htmlFor="referralName" className="block text-sm font-medium text-gray-700 mb-1">
                      Referral's Name
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="relative">
                        <select
                          id="referralTitle"
                          name="referralTitle"
                          className="block w-full pl-3 pr-8 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none bg-white"
                          value={formData.referralTitle}
                          onChange={handleChange}
                        >
                          <option value="Dr.">Dr.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Ms.">Ms.</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <FiChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="relative col-span-3">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="referralName"
                          name="referralName"
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                          placeholder="Name"
                          value={formData.referralName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="referralNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Referral's Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="referralNumber"
                        name="referralNumber"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Referral's number"
                        value={formData.referralNumber}
                        onChange={handleChange}
                      />
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
              

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
