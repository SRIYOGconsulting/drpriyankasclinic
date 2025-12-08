import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  useEffect(() => {
    document.title = 'Disclaimer | Dr. Priyanka\'s Clinic';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Medical Disclaimer</h1>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-pink max-w-none">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">No Medical Advice</h2>
          <p className="text-slate-700 mb-6">
            The information provided on this website, including text, graphics, images, and other material, is for informational 
            purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding 
            a medical condition or treatment and before undertaking a new health care regimen.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">No Doctor-Patient Relationship</h2>
          <p className="text-slate-700 mb-6">
            Your use of this website does not create a doctor-patient relationship between you and Dr. Priyanka's Clinic. 
            No information on this website should be considered as medical advice or a substitute for a consultation with a healthcare professional.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Emergency Situations</h2>
          <p className="text-slate-700 mb-6">
            If you think you may have a medical emergency, call your doctor or your local emergency number immediately. 
            Do not rely on electronic communications or this website for assistance with urgent medical needs.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Accuracy of Information</h2>
          <p className="text-slate-700 mb-6">
            While we strive to provide accurate and up-to-date information, Dr. Priyanka's Clinic makes no representation or warranty 
            concerning the accuracy, reliability, or completeness of the information on this website. Medical information changes 
            rapidly, and some information may be out of date.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">No Endorsements</h2>
          <p className="text-slate-700 mb-6">
            Any links to other websites are provided for convenience only and do not imply endorsement of those sites or their content. 
            Dr. Priyanka's Clinic is not responsible for the content of linked third-party sites.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-slate-700 mb-6">
            In no event shall Dr. Priyanka's Clinic be liable for any direct, indirect, consequential, special, exemplary, or other 
            damages arising from the use or misuse of any information provided on this website.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Testimonials</h2>
          <p className="text-slate-700 mb-6">
            Testimonials and patient stories on this website represent individual experiences and do not guarantee similar outcomes. 
            Results may vary and are not guaranteed.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-700 mb-2">If you have any questions about this disclaimer, please contact us at:</p>
          <p className="text-slate-700 mb-6">
            Email: <a href="mailto:info@drpriyankasclinic.com" className="text-pink-600 hover:underline">info@drpriyankasclinic.com</a><br />
            Phone: <a href="tel:+9779819090115" className="text-pink-600 hover:underline">+977 981 9090 115</a>
          </p>

          <div className="mt-12 pt-6 border-t border-slate-200">
            <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium">
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
