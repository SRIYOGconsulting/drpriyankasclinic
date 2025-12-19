import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SitemapPage = () => {
  // Current date in YYYY-MM-DD format
  const lastMod = new Date().toISOString().split('T')[0];
  
  // List of main pages with their last modified dates
  const pages = [
    { path: '/', title: 'Home', priority: '1.0', changefreq: 'daily' },
    { path: '/about', title: 'About Us', priority: '0.9', changefreq: 'weekly' },
    { path: '/services', title: 'Our Services', priority: '0.9', changefreq: 'weekly' },
    { path: '/gallery', title: 'Gallery', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact', title: 'Contact Us', priority: '0.8', changefreq: 'weekly' },
    { path: '/book-appointment', title: 'Book an Appointment', priority: '0.9', changefreq: 'weekly' },
    { path: '/faq', title: 'FAQs', priority: '0.6', changefreq: 'monthly' },
  ];

  // Service pages
  const services = [
    'HPV Vaccination',
    'HPV DNA Test',
    'PAP Smear',
    'Colposcopy',
    'Breast USG',
    'Endometrial Biopsy',
    'Prenatal Care',
    'Family Planning',
    'Infertility Treatment',
    'Menopause Management',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Sitemap - Dr. Priyanka's Clinic</title>
        <meta name="description" content="Complete sitemap of Dr. Priyanka's Clinic website. Find all our pages and services in one place." />
        <link rel="canonical" href="https://drpriyankasclinic.com/sitemap" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Sitemap
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Find all the pages on our website
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-12">
          <div className="px-4 py-5 sm:px-6 bg-pink-50">
            <h2 className="text-lg font-medium text-gray-900">Main Pages</h2>
            <p className="mt-1 text-sm text-gray-500">
              Browse through our main website sections
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {pages.map((page) => (
                <li key={page.path} className="px-6 py-4">
                  <div className="flex items-center">
                    <Link 
                      to={page.path} 
                      className="text-pink-600 hover:text-pink-800 text-lg font-medium"
                    >
                      {page.title}
                    </Link>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    <span>Last updated: {lastMod}</span>
                    <span className="mx-2">•</span>
                    <a 
                      href={page.path} 
                      className="text-pink-600 hover:text-pink-800"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View page →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-pink-50">
            <h2 className="text-lg font-medium text-gray-900">Our Services</h2>
            <p className="mt-1 text-sm text-gray-500">
              Explore our specialized gynecological services
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {services.map((service) => (
                <div key={service} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-pink-500 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Link 
                    to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="ml-3 text-gray-700 hover:text-pink-600"
                  >
                    {service}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: {lastMod}</p>
          <p className="mt-2">
            <Link to="/" className="text-pink-600 hover:text-pink-800 font-medium">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
