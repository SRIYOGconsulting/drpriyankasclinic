import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function Disclaimer() {
  useEffect(() => {
    document.title = 'Disclaimer | Dr. Priyanka\'s Clinic';
    window.scrollTo(0, 0);
  }, []);

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

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Medical Information</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                The information provided on this website, including text, graphics, images, and other material, is intended to support, not replace, 
                the relationship that exists between a patient/site visitor and their healthcare provider.
              </p>
              <p className="text-gray-700">
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition 
                or treatment before making any changes to your healthcare regimen.
              </p>
            </section>

            <section className="mb-10 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Online Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">No Doctor-Patient Relationship</h3>
                    <p className="mt-1 text-gray-600">
                      Using this website or contacting us through it does not establish a doctor-patient relationship. 
                      A proper relationship is only established through an in-person consultation at our clinic.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="flex-shrink-0 h-6 w-6 text-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">Medical Information Only</h3>
                    <p className="mt-1 text-gray-600">
                      The content on this site is for general informational purposes only and is not intended to be medical advice. 
                      Always consult with a qualified healthcare provider for diagnosis and treatment.
                    </p>
                  </div>
                </div>
              </div>
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