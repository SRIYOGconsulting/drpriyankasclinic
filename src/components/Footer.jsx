import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { AppLink } from '../utils/urlHelper.jsx';

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-amber-50">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 text-base text-slate-700">
        {/* Column 1: About with Logo */}
        <div className="col-span-2 lg:col-span-2 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start mb-6">
            <img 
              src="/images/logo/dr-priyankas-clinic-logo.png" 
              alt="Dr. Priyanka's Clinic Logo" 
              className="h-24 w-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-slate-900">Dr. Priyanka's Clinic</h2>
            <p className="text-pink-600 font-medium">A Multi-speciality Womens' Health Clinic</p>
            <p className="text-pink-600 font-medium">Gynecology </p>
          </div>
          <p className="text-slate-700 mb-6 text-[15px] leading-relaxed">
            Dr. Priyanka's Clinic is a leading healthcare provider in Birtamode, Jhapa, Nepal, offering comprehensive gynecological and obstetric care.
          </p>
          <div className="flex items-center justify-start gap-5 mt-8 flex-wrap">
            <style jsx global>{`
              @media (max-width: 640px) {
                .social-icon {
                  width: 66px;
                  height: 66px;
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7.5 w-7.5">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.86h2.74l-.44 2.9h-2.3V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7.5 w-7.5">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7.5 w-7.5">
                <path d="M23.5 7.2c0-.2 0-.4-.1-.6-.1-.2-.2-.4-.4-.5-.2-.2-.4-.3-.6-.4-.2 0-.4-.1-.6-.1-2.7-.2-5.4-.3-8.1-.3-2.7 0-5.4.1-8.1.3-.2 0-.4.1-.6.1-.2.1-.4.3-.6.4-.2.2-.3.4-.4.6 0 .2-.1.4-.1.6v9.6c0 .2 0 .4.1.6.1.2.2.4.4.5.2.2.4.3.6.4.2 0 .4.1.6.1 2.7.2 5.4.3 8.1.3 2.7 0 5.4-.1 8.1-.3.2 0 .4-.1.6-.1.2-.1.4-.3.6-.4.2-.2.3-.4.4-.6 0-.2.1-.4.1-.6V7.2zm-13 7.7V8.2l6.8 3.4-6.8 3.3z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7.5 w-7.5">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.86-1.38-1.86-.88 0-1.87.61-1.87 3.26V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.65.94 3.65 4.2V19z"/>
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7.5 w-7.5">
                <path d="M22.46 6.01c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-1 pl-2 sm:pl-0">
          <h3 className="font-bold text-slate-900 mb-3 text-xl text-left">Quick Links</h3>
          <ul className="space-y-3 pl-1 text-[15px]">
            <li><AppLink to="/" className="hover:text-pink-600 transition-colors">Home</AppLink></li>
            <li><AppLink to="/services" className="hover:text-pink-600 transition-colors">Services</AppLink></li>
            <li><AppLink to="/gallery" className="hover:text-pink-600 transition-colors">Gallery</AppLink></li>
            <li><AppLink to="/faq" className="hover:text-pink-600 transition-colors">FAQ</AppLink></li>
            <li><AppLink to="/sitemap" className="hover:text-pink-600 transition-colors">Sitemap</AppLink></li>
            <li><AppLink to="/testimonials" className="hover:text-pink-600 transition-colors">Testimonials</AppLink></li>
            <li><AppLink to="/emergency" className="hover:text-pink-600 transition-colors">Emergency help</AppLink></li>
            <li><AppLink to="/blog" className="hover:text-pink-600 transition-colors">Blogs</AppLink></li>
          </ul>
        </div>

        {/* Column 3: Browse More */}
        <div className="lg:col-span-1 pl-2 sm:pl-0">
          <h3 className="font-bold text-slate-900 mb-3 text-xl text-left">Browse More</h3>
          <div className="grid grid-cols-1 gap-y-3 pl-1 text-[15px]">
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
          <h3 className="font-bold text-slate-900 mb-3 text-xl">Contact Us</h3>
          <ul className="space-y-4 mb-8 w-full text-[15px]">
            <li className="flex items-center gap-3 text-left">
              <svg className="h-6 w-6 text-pink-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Birtamode-8, Jhapa, Nepal</span>
            </li>
            <li className="flex items-center gap-3 text-left">
              <svg className="h-6 w-6 text-pink-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+9779819090115" className="hover:text-pink-600 transition-colors">+977 981 9090 115</a>
            </li>
            <li className="flex items-center gap-3 text-left">
              <svg className="h-6 w-6 text-pink-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@drpriyankasclinic.com" className="hover:text-pink-600 transition-colors">info@drpriyankasclinic.com</a>
            </li>
          </ul>
          {/* Book Appointment Section */}
          <div className="mt-8 mb-4">
            <h3 className="font-bold text-slate-900 mb-4 text-xl">Book an Appointment</h3>
            <div className="mt-3">
              <a 
                href="https://d.sriyog.com/priyanka"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 overflow-hidden text-sm sm:text-base font-medium text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full group hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 whitespace-nowrap"
              >
                <span className="relative">
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 -ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white/80 border-t border-pink-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col space-y-3 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-xs text-slate-700 space-y-2 md:space-y-0 w-full">
              <div className="text-center md:text-left mb-2 md:mb-0">
                <div className="font-medium text-slate-800">&copy; {new Date().getFullYear()} Dr. Priyanka's Clinic.</div>
                <div className="text-slate-600">Birtamode, Jhapa, Nepal</div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2">
                <Link to="/tos" className="text-slate-700/80 hover:text-pink-600 transition-colors whitespace-nowrap text-sm">Terms of Service</Link>
                <span className="text-slate-400/80">|</span>
                <Link to="/privacy" className="text-slate-700/80 hover:text-pink-600 transition-colors whitespace-nowrap text-sm">Privacy Policy</Link>
                <span className="text-slate-400/80">|</span>
                <Link to="/disclaimer" className="text-slate-700/80 hover:text-pink-600 transition-colors whitespace-nowrap text-sm">Disclaimer</Link>
              </div>
            </div>
            <div className="w-full text-center text-sm text-slate-600 pt-2 border-t border-slate-200">
              <span className="text-slate-700">Built with: </span>
              <a href="https://broadpress.org/" target="_blank" rel="noopener noreferrer" className="font-medium text-pink-600 hover:underline">BROADPRESS</a>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}