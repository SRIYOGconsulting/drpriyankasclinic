import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Common pages for quick navigation
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Our Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/appointment', label: 'Book Appointment' },
  ];

  return (
    <div className="bg-white">
      <PageBanner 
        title="404 - Page Not Found"
        description="Oops! The page you're looking for doesn't exist or has been moved."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: '404' }
        ]}
        bgImage="/assets/home/slider/1.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mb-12">
          <h2 className="text-6xl font-bold text-pink-600 mb-4">404</h2>
          <h3 className="text-3xl font-semibold text-slate-800 mb-4">Page Not Found</h3>
          <p className="text-lg text-slate-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          {/* Search Form */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our website..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                aria-label="Search"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Search
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h4 className="text-xl font-medium text-slate-800 mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-pink-600 hover:bg-pink-50 hover:border-pink-100 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
