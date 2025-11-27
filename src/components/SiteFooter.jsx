export default function SiteFooter() {
  return (
    <footer className="mt-16 relative overflow-hidden bg-gradient-to-b from-pink-50 to-amber-50">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 text-sm text-slate-700">
        {/* Column 1: About with Logo */}
        <div className="col-span-2 lg:col-span-2 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start mb-6">
            <img 
              src="/assets/logo/dr-priyankas-clinic-logo.png" 
              alt="Dr. Priyanka's Clinic Logo" 
              className="h-24 w-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-slate-900">Dr. Priyanka's Clinic</h2>
            <p className="text-pink-600 font-medium">Gynecology & Obstetrics Care</p>
          </div>
          <p className="text-slate-600 mb-4">
            Dr. Priyanka's Clinic is a leading healthcare provider in Birtamode, Jhapa, Nepal, offering comprehensive gynecological and obstetric care.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            <style jsx global>{`
              @media (max-width: 640px) {
                .social-icon {
                  width: 44px;
                  height: 44px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50%;
                  background: white;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                  transition: all 0.3s ease;
                }
                .social-icon:hover {
                  transform: translateY(-3px);
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
              }
            `}</style>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.86h2.74l-.44 2.9h-2.3V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
              </svg>
            </a>
            
            {/* Messenger */}
            <a href="https://m.me/" target="_blank" rel="noreferrer" aria-label="Messenger" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.3.57l.26 1.85c.05.37.4.62.77.53l2.16-.5c.22-.05.45-.15.65-.3 1.18-.8 2.61-1.28 4.15-1.28h.01c5.64 0 10.24-4.13 10.24-9.2C22 6.13 17.64 2 12 2zm6.44 7.06l-3.1 4.83c-.2.3-.57.39-.87.2l-2.6-1.5c-.3-.17-.7-.17-1 0l-3.85 2.51c-.25.16-.57.1-.75-.15l-1.24-1.9c-.2-.3-.15-.7.1-.95l6.15-6.33c.2-.2.5-.2.7 0l6.15 6.33c.3.3.3.75 0 1.06z"/>
              </svg>
            </a>
            
            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-5.238 0c0-1.24.96-2.25 2.16-2.6V9.66c-3.68.46-6.47 3.69-6.47 7.41 0 4.09 3.24 7.42 7.23 7.42 4.02 0 7.23-3.36 7.23-7.42V8.41c1.17.6 2.21 1.1 3.5 1.1.36 0 .7 0 1.02-.05V7.05c-.6.21-1.27.33-1.96.33-2.31 0-4.28-1.48-4.28-3.56V5.82z"/>
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22.46 6.01c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-1 pl-2 sm:pl-0">
          <h3 className="font-semibold text-slate-900 mb-3 text-lg text-left">Quick Links</h3>
          <ul className="space-y-2 pl-1">
            <li><a href="/" className="hover:text-pink-600 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-pink-600 transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-pink-600 transition-colors">Services</a></li>
            <li><a href="/gallery" className="hover:text-pink-600 transition-colors">Gallery</a></li>
            <li><a href="/contact" className="hover:text-pink-600 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Browse More */}
        <div className="lg:col-span-1 pl-2 sm:pl-0">
          <h3 className="font-semibold text-slate-900 mb-3 text-lg text-left">Browse More</h3>
          <div className="grid grid-cols-1 gap-y-2 text-sm pl-1">
            <a href="https://www.cancer.org/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors block">
              American Cancer Society
            </a>
            <a href="https://www.webmd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors block">
              Web MD
            </a>
            <a href="https://mohp.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors block">
              Ministry of Health, Nepal
            </a>
            <a href="https://dohs.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors block">
              Department Of Health Services
            </a>
            <a href="http://heoc.mohp.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors block">
              Health Emergency Operation Center
            </a>
            <a href="https://nhrc.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors block">
              Nepal Health Research Council
            </a>
          </div>
        </div>

        {/* Column 4: Contact & Book Appointment */}
        <div className="col-span-2 lg:col-span-1 text-left">
          <h3 className="font-semibold text-slate-900 mb-3 text-lg">Contact Us</h3>
          <ul className="space-y-3 mb-6 w-full">
            <li className="flex items-center gap-3 text-left">
              <svg className="w-5 h-5 text-pink-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">Birtamode-8, Jhapa, Nepal</span>
            </li>
            <li className="flex items-center gap-3 text-left">
              <svg className="w-5 h-5 text-pink-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+9779819090115" className="hover:text-pink-600 transition-colors text-sm">+977 981 9090 115</a>
            </li>
            <li className="flex items-center gap-3 text-left">
              <svg className="w-5 h-5 text-pink-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@drpriyankasclinic.com" className="hover:text-pink-600 transition-colors text-sm">info@drpriyankasclinic.com</a>
            </li>
          </ul>
          {/* Book Appointment Section */}
          <div className="mt-6">
            <h3 className="font-semibold text-slate-900 mb-3 text-lg">Book an Appointment</h3>
            <p className="text-slate-600 mb-3">
              We offer comprehensive gynecological and obstetric care, including family planning, ultrasound, and fertility treatments.
            </p>
            <a href="/services" className="inline-block text-pink-600 hover:text-pink-700 font-medium">
              View All Services →
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white/80 border-t border-pink-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-xs text-slate-600 space-y-2 md:space-y-0">
              <div className="text-center md:text-left mb-2 md:mb-0 font-medium">
                &copy; {new Date().getFullYear()} Dr. Priyanka's Clinic. Birtamode, Jhapa, Nepal
                
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 font-medium">
                <a href="/terms" className="hover:text-pink-600 transition-colors whitespace-nowrap">Terms of Service</a>
                <span className="hidden sm:inline">|</span>
                <a href="/privacy" className="hover:text-pink-600 transition-colors whitespace-nowrap">Privacy Policy</a>
                <span className="hidden sm:inline">|</span>
                <a href="/disclaimer" className="hover:text-pink-600 transition-colors whitespace-nowrap">Disclaimer</a>
                <span className="hidden sm:inline">|</span>
                <div className="text-center text-xs text-slate-500">
              Built with: <a href="https://broadpress.org/" target="_blank" rel="noopener noreferrer" className="font-medium text-pink-600 hover:underline">Broadpress</a>
            </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}