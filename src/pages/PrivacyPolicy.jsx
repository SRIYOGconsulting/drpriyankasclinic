import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Dr. Priyanka\'s Clinic';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-pink max-w-none">
          <p className="text-slate-700 mb-6">
            At Dr. Priyanka's Clinic, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-slate-700 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Health information relevant to your treatment</li>
            <li>Demographic information</li>
            <li>IP address and browsing behavior on our website</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-slate-700 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Provide and manage your healthcare services</li>
            <li>Process appointments and send you reminders</li>
            <li>Improve our services and website experience</li>
            <li>Send promotional emails about new services, special offers, or other information we think you may find interesting</li>
            <li>Contact you for market research purposes</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Data Security</h2>
          <p className="text-slate-700 mb-6">
            We are committed to ensuring that your information is secure. We have implemented suitable physical, electronic, 
            and managerial procedures to safeguard and secure the information we collect online and offline.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Sharing Your Information</h2>
          <p className="text-slate-700 mb-6">
            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated 
            demographic information not linked to any personal identification information regarding visitors and users with our 
            business partners, trusted affiliates, and advertisers.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-slate-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Request access to your personal information</li>
            <li>Request correction of your personal information</li>
            <li>Request erasure of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request restriction of processing your personal information</li>
            <li>Request transfer of your personal information</li>
            <li>Withdraw consent</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-slate-700 mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
            on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-700 mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
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
