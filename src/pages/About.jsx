export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-600 mb-6">Home / About Us</nav>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About Dr. Priyanka’s Clinic.</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <div className="relative">
            <img src="/assets/home/specialized.jpg" alt="Clinic" className="rounded-xl border shadow-sm" />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h5 className="text-sm uppercase tracking-wider text-slate-500">Welcome to Dr. Priyanka’s Clinic</h5>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Specialized Gynecology</h2>
          </div>
          <p className="text-slate-700">Welcome to Dr. Priyanka's Clinic, a dedicated Obstetrics and Gynecology facility located in the heart of Birtamode, Jhapa, Nepal. Established on April 25, 2023, our clinic is committed to providing comprehensive healthcare services tailored specifically for women.</p>
          <p className="text-slate-700 mt-3">At Dr. Priyanka's Clinic, we offer a wide range of Gynecological Services, including cancer prevention, screening, and diagnosis. Our services encompass HPV vaccination, HPV DNA testing, PAP smears, and colposcopy, along with advanced diagnostic tests like CA 125, CEA, CA 19-9 blood tests, breast ultrasound, transvaginal sonography (TVS), and cervical and endometrial biopsies.</p>
          <div className="flex items-center gap-4 mt-6">
            <img src="/assets/home/drpriyanka.png" alt="Dr Priyanka" className="h-16 w-16 rounded-full border" />
            <div>
              <div className="font-semibold text-slate-900">Dr. Priyanka Katwal</div>
              <div className="text-slate-600 text-sm">Gynecologist</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-slate-900">10,000+</div>
          <div className="text-slate-600">Happy Patients</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-slate-900">2453+</div>
          <div className="text-slate-600">Successful Delivery</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-slate-900">1200+</div>
          <div className="text-slate-600">HPV Vaccination</div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-2 text-slate-700">Providing comprehensive women’s healthcare and promoting cancer prevention.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-2 text-slate-700">To be a leading gynecology clinic delivering compassionate care in Nepal.</p>
        </div>
      </div>
    </div>
  )
}
