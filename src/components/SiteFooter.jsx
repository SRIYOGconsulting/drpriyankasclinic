export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3 text-sm text-slate-700">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/assets/logo/dr-priyankas-clinic-logo.png" alt="Clinic Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-slate-900 font-semibold">Emergency number</div>
            <a href="tel:+9779819090115" className="text-pink-700 font-medium">981 9090 115</a>
          </div>
          <p className="text-slate-700 mb-3">Our clinic also features state-of-the-art Surgical Facilities, ensuring personalized healthcare with emotional support.</p>
          <ul className="space-y-1">
            <li><a className="hover:text-pink-600" href="https://drpriyankasclinic.com/cdn-cgi/l/email-protection">Email</a></li>
            <li><a className="hover:text-pink-600" href="/">drpriyankasclinic.com</a></li>
            <li>Birtamode, Jhapa, Nepal</li>
          </ul>
          <div className="mt-5 flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-600 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.86h2.74l-.44 2.9h-2.3V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-600 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11.001A5.5 5.5 0 0 1 12 7.5Zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7.001Zm5-2.25a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2.001Z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.7H9.34V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.36ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.09 20.45H3.6V9h3.49v11.45Z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-3">Health Blogs</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-pink-600" href="https://www.mayoclinic.org" target="_blank" rel="noreferrer">Mayo Clinic</a></li>
            <li><a className="hover:text-pink-600" href="https://www.health.harvard.edu/blog" target="_blank" rel="noreferrer">Harvard Health Blog</a></li>
            <li><a className="hover:text-pink-600" href="https://nutritionfacts.org/blog/" target="_blank" rel="noreferrer">Nutrition Facts</a></li>
            <li><a className="hover:text-pink-600" href="https://www.dietdoctor.com" target="_blank" rel="noreferrer">Diet Doctor</a></li>
            <li><a className="hover:text-pink-600" href="https://stralayoga.com/blog/" target="_blank" rel="noreferrer">Strala Yoga</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-3">Browse More</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-pink-600" href="https://www.cancer.org" target="_blank" rel="noreferrer">American Cancer Society</a></li>
            <li><a className="hover:text-pink-600" href="https://www.webmd.com/default.htm" target="_blank" rel="noreferrer">Web MD</a></li>
            <li><a className="hover:text-pink-600" href="https://mohp.gov.np/en/" target="_blank" rel="noreferrer">Ministry of Health, Nepal</a></li>
            <li><a className="hover:text-pink-600" href="http://dohs.gov.np" target="_blank" rel="noreferrer">Department Of Health Services</a></li>
            <li><a className="hover:text-pink-600" href="https://heoc.mohp.gov.np" target="_blank" rel="noreferrer">Health Emergency Operation Center</a></li>
            <li><a className="hover:text-pink-600" href="https://nhrc.gov.np" target="_blank" rel="noreferrer">Nepal Health Research Council</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-600 py-6 border-t border-gray-100">Copyright Dr. Priyanka's Clinic. Birtamode, Jhapa, Nepal</div>
    </footer>
  )
}
