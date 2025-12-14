import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function Disclaimer() {
  useEffect(() => {
    document.title = 'Disclaimer | Dr. Priyanka\'s Clinic';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'medical-advice', title: 'No Medical Advice' },
    { id: 'doctor-patient', title: 'No Doctor-Patient Relationship' },
    { id: 'emergency', title: 'Emergency Situations' },
    { id: 'accuracy', title: 'Accuracy of Information' },
    { id: 'endorsements', title: 'No Endorsements' },
    { id: 'testimonials', title: 'Testimonials' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
<div className="min-h-screen bg-gray-50">
      <PageBanner 
        title="Medical Disclaimer"
        description="Please read our medical disclaimer carefully before using our services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Disclaimer' }
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

            {/* No Medical Advice */}
            <section id="medical-advice" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Medical Advice</h2>
              <p className="text-gray-700">
                The information provided on this website, including text, graphics, images, and other material, is for informational 
                purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-gray-700 mt-2">
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding 
                a medical condition or treatment and before undertaking a new health care regimen.
              </p>
            </section>

            {/* No Doctor-Patient Relationship */}
            <section id="doctor-patient" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Doctor-Patient Relationship</h2>
              <p className="text-gray-700">
                Your use of this website does not create a doctor-patient relationship between you and Dr. Priyanka's Clinic. 
                No information on this website should be considered as medical advice or a substitute for a consultation with a healthcare professional.
              </p>
            </section>

            {/* Emergency Situations */}
            <section id="emergency" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Situations</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      If you think you may have a medical emergency, call your doctor or your local emergency number immediately. 
                      Do not rely on electronic communications or this website for assistance with urgent medical needs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Accuracy of Information */}
            <section id="accuracy" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Information</h2>
              <p className="text-gray-700">
                While we strive to provide accurate and up-to-date information, Dr. Priyanka's Clinic makes no representation or warranty 
                concerning the accuracy, reliability, or completeness of the information on this website. Medical information changes 
                rapidly, and some information may be out of date.
              </p>
            </section>

            {/* No Endorsements */}
            <section id="endorsements" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Endorsements</h2>
              <p className="text-gray-700">
                Any links to other websites are provided for convenience only and do not imply endorsement of those sites or their content. 
                Dr. Priyanka's Clinic is not responsible for the content of linked third-party sites.
              </p>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Testimonials</h2>
              <p className="text-gray-700">
                Testimonials and examples on this website are not intended to represent or guarantee that anyone will achieve the same or 
                similar results. Each individual's success depends on various factors, including their specific circumstances.
              </p>
            </section>

            {/* Contact Us */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have any questions about this Disclaimer, please contact us:</p>
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