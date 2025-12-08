import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | Dr. Priyanka\'s Clinic';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-pink max-w-none">
          <p className="text-slate-700 mb-6">
            Welcome to Dr. Priyanka's Clinic. These Terms of Service ("Terms") govern your access to and use of our website and services. 
            By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Services Provided</h2>
          <p className="text-slate-700 mb-6">
            Dr. Priyanka's Clinic provides healthcare services including but not limited to gynecological consultations, 
            obstetric care, and other women's health services as described on our website.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Medical Disclaimer</h2>
          <p className="text-slate-700 mb-6">
            The information provided on our website is for general informational purposes only and is not intended as medical advice. 
            It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician 
            or other qualified health provider with any questions you may have regarding a medical condition.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Appointments and Cancellations</h2>
          <p className="text-slate-700 mb-4">
            To schedule an appointment, you may use our online booking system or contact our office directly. We require at least 24 hours' 
            notice for appointment cancellations. Failure to provide sufficient notice may result in a cancellation fee.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Privacy</h2>
          <p className="text-slate-700 mb-6">
            Your privacy is important to us. Please review our <Link to="/privacy" className="text-pink-600 hover:underline">Privacy Policy</Link> to understand how we collect, 
            use, and protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-slate-700 mb-6">
            All content on this website, including text, graphics, logos, and images, is the property of Dr. Priyanka's Clinic or its 
            content suppliers and is protected by copyright and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="text-slate-700 mb-6">
            Dr. Priyanka's Clinic shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting 
            from the use or inability to use our services, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Changes to Terms</h2>
          <p className="text-slate-700 mb-6">
            We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. 
            Your continued use of our services after any changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Governing Law</h2>
          <p className="text-slate-700 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising under or in connection 
            with these Terms shall be subject to the exclusive jurisdiction of the courts located in Jhapa, Nepal.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Contact Us</h2>
          <p className="text-slate-700 mb-2">If you have any questions about these Terms, please contact us at:</p>
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
