import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | Dr. Priyanka\'s Clinic';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'services', title: 'Services Provided' },
    { id: 'disclaimer', title: 'Medical Disclaimer' },
    { id: 'appointments', title: 'Appointments' },
    { id: 'privacy', title: 'Privacy' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
<div className="min-h-screen bg-gray-50">
      <PageBanner 
        title="Terms of Service"
        description="Please read our terms and conditions carefully before using our services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service' }
        ]}
      />
      
      <div className="w-[80%] md:max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto">
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
                Welcome to Dr. Priyanka's Clinic. These Terms of Service ("Terms") govern your access to and use of our website and services. 
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            {/* Services Provided */}
            <section id="services" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <p className="text-gray-700">
                Dr. Priyanka's Clinic provides comprehensive healthcare services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>Gynecological consultations and treatments</li>
                <li>Obstetric care and pregnancy services</li>
                <li>Family planning and contraceptive counseling</li>
                <li>Preventive healthcare and screening</li>
                <li>Other women's health services</li>
              </ul>
            </section>

            {/* Medical Disclaimer */}
            <section id="disclaimer" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The information provided on our website is for general informational purposes only and is not intended as medical advice. 
                It is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-gray-700">
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </section>

            {/* Appointments and Cancellations */}
            <section id="appointments" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointments and Cancellations</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Scheduling</h3>
                  <p className="text-gray-700">
                    Appointments can be scheduled through our online booking system or by contacting our office directly during business hours.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Cancellation Policy</h3>
                  <p className="text-gray-700">
                    We require at least 24 hours' notice for appointment cancellations. Failure to provide sufficient notice may result in a cancellation fee.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Late Arrivals</h3>
                  <p className="text-gray-700">
                    Patients arriving more than 15 minutes late may need to reschedule their appointment.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our{' '}
                <Link to="/privacy" className="text-pink-600 hover:underline">
                  Privacy Policy
                </Link>{' '}
                to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700">
                All content on this website, including text, graphics, logos, and images, is the property of Dr. Priyanka's Clinic or its 
                content suppliers and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation-liability" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                Dr. Priyanka's Clinic shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting 
                from the use or inability to use our services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            {/* Changes to Terms */}
            <section id="changes" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. 
                Your continued use of our services after any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising under or in connection 
                with these Terms shall be subject to the exclusive jurisdiction of the courts located in Jhapa, Nepal.
              </p>
            </section>

            {/* Contact Us */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have any questions about these Terms, please contact us:</p>
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
  );
}