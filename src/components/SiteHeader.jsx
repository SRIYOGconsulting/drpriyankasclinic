import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
      <div className="bg-[#1a1a1a] text-white text-sm py-3 md:py-2">
        <div className="w-full max-w-[95%] mx-auto px-2 md:px-4 flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <a href="tel:+9779819090115" className="flex items-center text-sm hover:text-pink-400 transition-colors w-full justify-center md:justify-start md:w-auto">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            +977-9819090115
          </a>
          <a href="mailto:info@drpriyankasclinic.com" className="flex items-center text-sm hover:text-pink-400 transition-colors w-full justify-center md:justify-start md:w-auto">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            info@drpriyankasclinic.com
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="w-full max-w-[95%] mx-auto px-2 md:px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo/dr-priyankas-clinic-logo.png" 
              alt="Dr. Priyanka's Clinic Logo" 
              className="h-14 sm:h-16 md:h-20 w-auto max-w-[180px] md:max-w-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 ml-auto">
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
            <div className="ml-1 sm:ml-2 md:ml-4">
              <Link 
                to="/appointment"
                className="relative inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 overflow-hidden text-sm sm:text-base font-medium text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full group hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 whitespace-nowrap"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
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
                <span>Book an Appointment</span>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2">
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
              className="h-20 w-auto"  // Increased from h-16 to h-20 to match header logo
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
            <button
              className="w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between"
              onClick={(e) => {
                e.preventDefault();
                setIsServicesOpen(!isServicesOpen);
              }}
            >
              <span>Services</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${isServicesOpen ? 'max-h-60' : 'max-h-0'}`}>
              <div className="ml-4 space-y-1 py-1">
                <a 
                  href="/services#gynecology" 
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gynecology Services
                </a>
                <a 
                  href="/services#obstetrics" 
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Obstetrics Care
                </a>
                <a 
                  href="/services#family-planning" 
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Family Planning
                </a>
                <a 
                  href="/services#infertility" 
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Infertility Treatment
                </a>
              </div>
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
          
          {/* Mobile appointment CTA - Matches desktop style */}
          <div className="px-4 mt-auto py-3 border-t border-gray-100">
            <Link 
              to="/appointment"
              className="inline-flex justify-center items-center w-full px-3 py-2 text-sm rounded-full border border-pink-600 bg-pink-600 text-white hover:bg-pink-700 hover:border-pink-700 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg 
                className="w-5 h-5 mr-2" 
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
              Book an Appointment
            </Link>
          </div>
        </div>
        </div>
      </div>
      
    </header>
  )
}
