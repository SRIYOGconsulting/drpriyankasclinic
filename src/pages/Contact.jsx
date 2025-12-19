import PageBanner from '../components/PageBanner';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageBanner 
        title="Get In Touch"
        description="We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as possible."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
        bgImage="/assets/home/slider/1.jpg"
      />

      <div className="w-[80%] max-w-7xl mx-auto px-4 py-12">
        {/* Contact Info Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Location</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8">
            Visit us at our clinic in Birtamode, Jhapa. We're here to provide you with the best care and service.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
              <a href="tel:+9779819090115" className="text-pink-600 hover:text-pink-700">+977 981 9090 115</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
              <a href="mailto:info@drpriyankasclinic.com" className="text-pink-600 hover:text-pink-700">info@drpriyankasclinic.com</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">Birtamode, Jhapa, Nepal</p>
            </div>
          </div>
          
          <a 
            href="https://www.google.com/maps/place/Dr.+Priyanka%27s+Clinic/@26.6436135,87.9814993,17z/data=!3m1!4b1!4m6!3m5!1s0x39e5bbcde566d25f:0x5eabfe22d7b19755!8m2!3d26.6436135!4d87.9840742!16s%2Fg%2F11t1yq1r4y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
          >
            <span>View on Google Maps</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
        
        {/* Map Section */}
        <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.521701076097!2d87.98149932270604!3d26.64141861196977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bbcde566d25f%3A0x5eabfe22d7b19755!2sDr.%20Priyanka&#39;s%20Clinic!5e0!3m2!1sen!2snp!4v1763707328394!5m2!1sen!2snp" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Priyanka's Clinic Location"
            className="w-full h-full"
          ></iframe>
        </div>
        
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Schedule an Appointment?</h3>
          <p className="text-slate-600 mb-6">Contact us today to book your consultation or ask any questions.</p>
          <a
            href="/appointment"
            className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  )
}
