import { useState } from 'react';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of healthcare services including general consultations, specialized treatments, and preventive care programs. Our team of experienced healthcare professionals is here to provide personalized care for all your medical needs."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website, by calling our reception, or by visiting our clinic in person. We recommend booking in advance to secure your preferred time slot."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Please contact our billing department or check with your insurance provider to confirm coverage for our services."
    },
    {
      question: "What are your operating hours?",
      answer: "Our clinic is open Monday to Friday from 8:00 AM to 7:00 PM, and on Saturdays from 9:00 AM to 2:00 PM. We are closed on Sundays and public holidays."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring your ID, insurance card, list of current medications, medical records, and any relevant test results or imaging studies to your first appointment."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Frequently Asked Questions | Dr. Priya's Clinic</title>
        <meta name="description" content="Find answers to common questions about our services, appointments, and more at Dr. Priya's Clinic." />
      </Helmet>
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our services and policies</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                id={`faq-${index}`}
                className={`px-6 pb-4 pt-2 text-gray-600 transition-all duration-200 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Contact our support team for more information</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;