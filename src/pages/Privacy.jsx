import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Dr. Priyanka\'s Clinic';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner 
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' }
        ]}
      />
      
      <div className="w-[80%] md:max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-pink max-w-none">

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters to Us</h2>
              <p className="text-gray-700 mb-4">
                At Dr. Priyanka's Clinic, we understand the importance of your personal and health information. This Privacy Policy outlines our commitment to protecting your privacy and the measures we take to secure your data.
              </p>
              <p className="text-gray-700">
                We are dedicated to maintaining the confidentiality of your personal and medical information in accordance with applicable privacy laws and healthcare regulations.
              </p>
            </section>

            <section className="mb-10 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">We collect various types of information to provide you with quality healthcare services:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-pink-200 pl-4">
                  <h3 className="font-semibold text-gray-800">Personal Information</h3>
                  <p className="text-gray-600 text-sm">Name, contact details, date of birth, and other identifying information.</p>
                </div>
                
                <div className="border-l-4 border-pink-200 pl-4">
                  <h3 className="font-semibold text-gray-800">Health Information</h3>
                  <p className="text-gray-600 text-sm">Medical history, treatment records, test results, and other health-related data.</p>
                </div>
                
                <div className="border-l-4 border-pink-200 pl-4">
                  <h3 className="font-semibold text-gray-800">Usage Data</h3>
                  <p className="text-gray-600 text-sm">Information about how you interact with our website and services.</p>
                </div>
              </div>
              
              <p className="mt-4 text-sm text-gray-500">
                We collect only the information necessary to provide you with healthcare services and improve your experience.
              </p>
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
  );
}