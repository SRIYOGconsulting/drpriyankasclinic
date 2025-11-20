export default function SiteFooter() {
  return (
    <footer className="mt-16 relative overflow-hidden bg-gradient-to-b from-pink-50 to-amber-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full -mt-32 -mr-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full -mb-40 -ml-40"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-3 text-sm text-slate-700 relative z-10">
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
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-600 hover:text-pink-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.86h2.74l-.44 2.9h-2.3V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-600 hover:text-pink-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11.001A5.5 5.5 0 0 1 12 7.5Zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7.001Zm5-2.25a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2.001Z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-slate-600 hover:text-pink-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.19 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.5 8.5 0 0 0 2.087-2.166z"/>
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
      <div className="relative z-10 text-center text-xs text-slate-600 py-6 border-t border-pink-100 bg-white/30 backdrop-blur-sm">Copyright Dr. Priyanka's Clinic. Birtamode, Jhapa, Nepal</div>
    </footer>
  )
}