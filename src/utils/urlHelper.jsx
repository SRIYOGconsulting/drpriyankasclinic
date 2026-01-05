import { Link } from 'react-router-dom';

/**
 * Helper function to generate URLs that work in both development and production
 * @param {string} path - The path to navigate to (e.g., '/about')
 * @returns {string} - The full URL with the correct base path
 */
export const getUrl = (path) => {
  // Remove any leading/trailing slashes for consistency
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  
  // In development, the base URL is typically '/'
  // In production, it will be the base path where the app is deployed
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Ensure baseUrl ends with a single slash
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${normalizedBase}${cleanPath}`;
};

/**
 * Wrapper for react-router-dom's Link component that ensures proper URL handling
 * @param {Object} props - Props for the Link component
 * @param {string} props.to - The path to navigate to
 * @param {React.ReactNode} props.children - The content of the link
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @returns {JSX.Element} - A Link component with the correct URL
 */
export const AppLink = ({ to, children, className = '', onClick, ...props }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <Link 
      to={getUrl(to)} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};
