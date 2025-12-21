import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaSearch, FaChevronDown, FaChevronUp, FaPhone, FaCalendarAlt, FaUserMd, FaFileMedical, FaMoneyBillWave, FaLaptopMedical, FaQuestionCircle } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: <FaSearch className="mr-2" /> },
    { id: 'appointment', name: 'Appointments', icon: <FaCalendarAlt className="mr-2" /> },
    { id: 'services', name: 'Our Services', icon: <FaUserMd className="mr-2" /> },
    { id: 'insurance', name: 'Insurance & Billing', icon: <FaMoneyBillWave className="mr-2" /> },
    { id: 'telemedicine', name: 'Telemedicine', icon: <FaLaptopMedical className="mr-2" /> },
    { id: 'first-visit', name: 'First Visit', icon: <FaFileMedical className="mr-2" /> }
  ];

  const faqs = [
    {
      question: "What healthcare services do you provide?",
      answer: "Our clinic offers comprehensive healthcare services including general medicine, specialized treatments, preventive care, and wellness programs. We provide services such as annual check-ups, chronic disease management, immunizations, women's health, pediatric care, and minor surgical procedures. Our team of board-certified physicians and healthcare professionals are dedicated to providing personalized, evidence-based care tailored to each patient's unique needs.",
      category: 'services'
    },
    {
      question: "How can I schedule an appointment?",
      answer: "We offer multiple convenient ways to schedule appointments:\n\n1. **Online Booking**: Visit our website and use our secure patient portal to book, reschedule, or cancel appointments 24/7.\n2. **Phone**: Call our reception at [Clinic Phone Number] during business hours.\n3. **In-Person**: Visit our clinic during operating hours to schedule with our front desk.\n\nFor urgent medical concerns, please call us directly. We strive to offer same-day appointments for acute illnesses and maintain short wait times for all our patients.",
      category: 'appointment'
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We participate with most major insurance plans including Medicare, Medicaid, and most private insurance providers. Some of the major insurance networks we work with include Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. We recommend contacting your insurance provider to verify our participation in your specific plan. Our billing department is also available to assist with insurance verification and questions about coverage. For patients without insurance, we offer competitive self-pay rates and payment plans.",
      category: 'insurance'
    },
    {
      question: "What are your clinic hours and how do I reach after hours?",
      answer: "**Regular Hours:**\n- Monday to Friday: 8:00 AM - 7:00 PM\n- Saturday: 9:00 AM - 2:00 PM\n- Sunday: Closed\n- Major Holidays: Closed\n\n**After-Hours Care:**\nFor urgent medical concerns outside of business hours, please call our after-hours service at [After-Hours Number]. For life-threatening emergencies, please call 911 or go to the nearest emergency room. Non-urgent messages can be left through our patient portal and will be addressed the next business day.",
      category: 'appointment'
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "To ensure your first visit goes smoothly, please bring:\n\n- A valid government-issued photo ID\n- Current health insurance card(s)\n- Complete list of current medications, including dosages\n- Any relevant medical records or test results from previous providers\n- Completed new patient forms (available for download on our website)\n- Method of payment for any copays or deductibles\n- List of questions or concerns you'd like to discuss with the doctor\n\nPlease arrive 15 minutes before your scheduled appointment time to complete any remaining paperwork.",
      category: 'first-visit'
    },
    {
      question: "Do you offer telemedicine appointments?",
      answer: "Yes, we offer secure and convenient telemedicine appointments for appropriate medical conditions. Virtual visits are conducted through our HIPAA-compliant platform, allowing you to see your provider from the comfort of your home. These appointments are ideal for follow-up visits, medication management, and non-emergency conditions. Please call our office to determine if your medical concern is suitable for a telemedicine appointment. Insurance coverage for telemedicine varies by provider, so we recommend checking with your insurance company regarding coverage.",
      category: 'telemedicine'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Helmet>
        <title>Frequently Asked Questions | Dr. Priya's Clinic</title>
        <meta name="description" content="Find answers to common questions about our services, appointments, and more at Dr. Priya's Clinic." />
      </Helmet>
      
      <PageBanner 
        title="Frequently Asked Questions"
        description="Find quick answers to your questions about our services, appointments, and policies"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' }
        ]}
        icon={<FaQuestionCircle className="inline-block mr-2 -mt-1" />}
      />
      
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-700 placeholder-gray-400"
              placeholder="Search questions or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  className="w-full px-6 py-5 text-left focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors pr-4">
                      {faq.question}
                    </h2>
                    <div className="flex-shrink-0 ml-4">
                      {openIndex === index ? (
                        <FaChevronUp className="h-5 w-5 text-pink-600" />
                      ) : (
                        <FaChevronDown className="h-5 w-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
                      )}
                    </div>
                  </div>
                </button>
                <div
                  id={`faq-${index}`}
                  className={`px-6 pb-6 pt-0 text-gray-600 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="prose prose-pink max-w-none">
                    {faq.answer.split('\n').map((paragraph, i) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h4 key={i} className="font-semibold text-gray-800 mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, '')}
                          </h4>
                        );
                      }
                      return <p key={i} className="mb-4">{paragraph}</p>;
                    })}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-1 text-gray-500">
                We couldn't find any questions matching your search. Try different keywords.
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-pink-100 mb-6 text-lg">
              Our team is here to help you with any questions you may have about our services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-pink-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
              >
                <FaPhone className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;