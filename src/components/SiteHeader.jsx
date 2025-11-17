import { Link, NavLink } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="bg-slate-900 text-white text-sm hidden md:block">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+9779819090115" className="hover:underline">+977-9819090115</a>
            <a href="https://drpriyankasclinic.com/cdn-cgi/l/email-protection" className="hover:underline">Email</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white hover:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.86h2.74l-.44 2.9h-2.3V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
              </svg>
            </a>
          </div>
          <a href="/contact" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded">Book Appointment</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/logo/dr-priyankas-clinic-logo.png" alt="Dr. Priyanka's Clinic Logo" className="h-10 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 text-slate-700">
          <NavLink to="/" end className={({isActive})=>isActive? 'text-pink-600' : 'hover:text-pink-600'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'text-pink-600' : 'hover:text-pink-600'}>About</NavLink>
          <NavLink to="/services" className={({isActive})=>isActive? 'text-pink-600' : 'hover:text-pink-600'}>Services</NavLink>
          <NavLink to="/gallery" className={({isActive})=>isActive? 'text-pink-600' : 'hover:text-pink-600'}>Gallery</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'text-pink-600' : 'hover:text-pink-600'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
