import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Dr. Priyanka\'s Clinic';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Your Information' },
    { id: 'security', title: 'Data Security' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-6 md:p-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-pink-100">Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            <div className="prose prose-pink max-w-none">
              {/* Table of Contents */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Table of Contents</h2>
                <ul className="space-y-2">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`}
                        className="text-pink-600 hover:text-pink-700 hover:underline"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Introduction */}
              <section id="introduction" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700">
                  Welcome to Dr. Priyanka's Clinic. We respect your privacy and are committed to protecting your personal data. 
                  This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section id="information" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">We collect several types of information, including:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Personal identification information (Name, email, phone number)</li>
                  <li>Health information relevant to your treatment</li>
                  <li>Appointment details and medical history</li>
                  <li>Browsing data and usage information</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section id="usage" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide and manage healthcare services</li>
                  <li>Schedule and confirm appointments</li>
                  <li>Communicate important health information</li>
                  <li>Improve our services and website experience</li>
                </ul>
              </section>

              {/* Data Security */}
              <section id="security" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your personal information. 
                  Your data is stored securely and accessed only by authorized personnel.
                </p>
              </section>

              {/* Your Rights */}
              <section id="rights" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              {/* Contact Us */}
              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:info@drpriyankasclinic.com" className="text-pink-600 hover:underline">
                      info@drpriyankasclinic.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span>{' '}
                    <a href="tel:+9779819090115" className="text-pink-600 hover:underline">
                      +977 981 9090 115
                    </a>
                  </p>
                </div>
              </section>

              {/* Back to Home */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <Link 
                  to="/" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
