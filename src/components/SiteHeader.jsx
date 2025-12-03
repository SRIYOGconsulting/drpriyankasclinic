import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AppointmentModal from './AppointmentForm';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      {/* Top bar with contact info - mobile optimized */}
      <div className="bg-[#1a1a1a] text-white text-xs py-2.5 md:py-1.5">
        <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <div className="w-full flex flex-col items-center space-y-1.5 md:flex-row md:space-y-0 md:space-x-6 md:justify-start">
            <a href="tel:+9779819090115" className="flex items-center text-xs hover:text-pink-400 transition-colors w-full justify-center md:justify-start md:w-auto">
              <svg className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +977-9819090115
            </a>
            <a href="mailto:info@drpriyankasclinic.com" className="flex items-center text-xs hover:text-pink-400 transition-colors w-full justify-center md:justify-start md:w-auto">
              <svg className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              info@drpriyankasclinic.com
            </a>
          </div>
          {/* Social icons - hidden on mobile, visible on md and up */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white hover:text-pink-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.86h2.74l-.44 2.9h-2.3V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white hover:text-pink-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11.001A5.5 5.5 0 0 1 12 7.5Zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7.001Zm5-2.25a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2.001Z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-white hover:text-pink-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.19 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.5 8.5 0 0 0 2.087-2.166z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
<div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center ml-1 sm:ml-2 md:ml-0">
            <img 
              src="/assets/logo/dr-priyankas-clinic-logo.png" 
              alt="Dr. Priyanka's Clinic Logo" 
              className="h-14 sm:h-16 w-auto"  // Increased from h-10 sm:h-12 to h-14 sm:h-16
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink 
              to="/" 
              end 
              className={({isActive}) => `px-5 py-3 text-base font-medium transition-colors ${isActive ? 'text-pink-600' : 'text-gray-800 hover:text-pink-600'}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => `px-5 py-3 text-base font-medium transition-colors ${isActive ? 'text-pink-600' : 'text-gray-800 hover:text-pink-600'}`}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({isActive}) => `px-5 py-3 text-base font-medium transition-colors ${isActive ? 'text-pink-600' : 'text-gray-800 hover:text-pink-600'}`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({isActive}) => `px-5 py-3 text-base font-medium transition-colors ${isActive ? 'text-pink-600' : 'text-gray-800 hover:text-pink-600'}`}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => `px-5 py-3 text-base font-medium transition-colors ${isActive ? 'text-pink-600' : 'text-gray-800 hover:text-pink-600'}`}
            >
              Contact
            </NavLink>
            <div className="ml-4">
              <button 
                onClick={() => setIsAppointmentModalOpen(true)}
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-base font-medium text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full group hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              >
                <span className="relative">
                  <svg 
                    className="w-5 h-5 mr-2 -ml-1" 
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
              </button>
            </div>
          </nav>

          {/* Mobile menu button and appointment CTA */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => {
                setIsAppointmentModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="md:hidden inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-full hover:bg-pink-600 transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Appointment
            </button>
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-pink-600 focus:outline-none menu-button transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      </div>

      {/* Mobile menu drawer */}
      <div 
        className={`md:hidden mobile-menu fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-2xl border-r border-pink-100 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="pt-6 pb-6 h-full overflow-y-auto flex flex-col">
          {/* Logo */}
          <div className="px-4 pt-2 pb-3 border-b border-gray-100 bg-pink-50 flex justify-center">
            <img 
              src="/assets/logo/dr-priyankas-clinic-logo.png" 
              alt="Dr. Priyanka's Clinic Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="px-4 py-3 space-y-2 flex-1">
          <NavLink 
            to="/" 
            end 
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <div className="space-y-1">
            <NavLink 
              to="/services" 
              className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </NavLink>
            <div className="ml-4 space-y-1">
              <a href="/services#gynecology" className="block px-4 py-2 text-base text-gray-700 hover:bg-pink-50 rounded-lg">Gynecology Services</a>
              <a href="/services#obstetrics" className="block px-4 py-2 text-base text-gray-700 hover:bg-pink-50 rounded-lg">Obstetrics Care</a>
              <a href="/services#family-planning" className="block px-4 py-2 text-base text-gray-700 hover:bg-pink-50 rounded-lg">Family Planning</a>
              <a href="/services#infertility" className="block px-4 py-2 text-base text-gray-700 hover:bg-pink-50 rounded-lg">Infertility Treatment</a>
            </div>
          </div>
          <NavLink 
            to="/gallery" 
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          
          {/* Mobile appointment CTA - Moved to bottom */}
          <div className="px-4 py-3 mt-2">
            <button 
              onClick={() => {
                setIsAppointmentModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-full hover:from-pink-600 hover:to-pink-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book an Appointment
            </button>
          </div>
        </div>
        </div>
      </div>
      
      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </header>
  )
}
