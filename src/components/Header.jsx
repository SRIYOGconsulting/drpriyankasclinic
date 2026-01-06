import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClinicLogo from './ClinicLogo';


export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.mobile-menu');
      const menuButton = document.querySelector('.menu-button');
      
      if (isMenuOpen && menu && menuButton && 
          !menu.contains(event.target) && 
          !menuButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Close menu on route change
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Close menu on scroll for better mobile experience
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Use both mousedown and touchstart for better mobile support
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('scroll', handleScroll, { passive: true });
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [isMenuOpen]);

  return (
    <header className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      {/* Top bar with contact info - mobile optimized */}
      <div className="bg-[#1a1a1a] text-white text-sm py-2 w-full">
        <div className="mx-auto w-[80%] max-w-[1600px] flex flex-col items-center md:flex-row md:justify-between md:items-center px-0">
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
      <div className="bg-white border-b border-gray-100 w-full">
        <div className="mx-auto w-[80%] max-w-[1600px] flex items-center justify-between py-3 px-0">
          <Link to="/" className="z-50">
            <ClinicLogo className="h-14 md:h-16 lg:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation - Show on larger screens */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 ml-auto">
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
              <a 
                href="https://d.sriyog.com/priyanka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an appointment"
                className="hidden lg:flex items-center px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 active:scale-95"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="whitespace-nowrap">Book an Appointment</span>
              </a>
            </div>
          </nav>

          {/* Mobile menu button - Show on smaller screens */}
          <div className="lg:hidden flex items-center space-x-2 z-50">
            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-pink-600 focus:outline-none menu-button transition-colors"
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

      {/* Mobile menu overlay with click handler */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={(e) => {
          // Only close if clicking directly on the overlay, not on the menu itself
          if (e.target === e.currentTarget) {
            setIsMenuOpen(false);
          }
        }}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Mobile menu drawer */}
      <div 
        className={`lg:hidden mobile-menu fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-2xl border-r border-pink-100 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="pt-6 pb-6 h-full overflow-y-auto flex flex-col">
          {/* Logo */}
          <div className="px-4 py-3 border-b border-gray-100 bg-pink-50 flex justify-center">
            <img 
              src="/images/logo/dr-priyankas-clinic-logo.png" 
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
                  href="/services"
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
            <a 
              href="https://d.sriyog.com/priyanka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book an appointment"
              className="flex items-center justify-center w-full px-4 py-3.5 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 active:scale-[0.98]"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg 
                className="w-5 h-5 mr-2.5 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Book an Appointment</span>
            </a>
          </div>
        </div>
        </div>
      </div>
      
    </header>
  )
}
