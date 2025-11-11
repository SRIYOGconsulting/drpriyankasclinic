export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3 text-sm text-slate-700">
        <div>
          <h3 className="font-semibold text-slate-900 mb-3">Contact</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-pink-600" href="https://drpriyankasclinic.com/cdn-cgi/l/email-protection">[emaila0protected]</a></li>
            <li><a className="hover:text-pink-600" href="https://drpriyankasclinic.com">drpriyankasclinic.com</a></li>
            <li>Birtamode, Jhapa, Nepal</li>
            <li><a className="hover:text-pink-600" href="tel:+9779819090115">+977 981 9090 115</a></li>
          </ul>
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
