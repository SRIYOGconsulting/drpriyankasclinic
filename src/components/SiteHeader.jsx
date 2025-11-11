import { Link, NavLink } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="bg-slate-900 text-white text-sm hidden md:block">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+9779819090115" className="hover:underline">+977-9819090115</a>
            <a href="https://drpriyankasclinic.com/cdn-cgi/l/email-protection" className="hover:underline">Email</a>
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
