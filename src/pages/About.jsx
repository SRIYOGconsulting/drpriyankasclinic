import PageBanner from '../components/PageBanner';

export default function About() {
  return (
    <div className="bg-white">
      <PageBanner 
        title="Our Story"
        description="Discover the compassionate care and expertise that defines Dr. Priyanka's Clinic"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
        bgImage="/assets/home/slider/1.jpg"
      />
      
      <div className="w-4/5 mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <div className="relative">
              <img src="/assets/home/specialized.jpg" alt="Clinic" className="rounded-xl border-2 border-slate-300 shadow-xl" />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h5 className="text-sm uppercase tracking-wider text-slate-500">Welcome to Dr. Priyanka’s Clinic</h5>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Specialized Gynecology</h2>
            </div>
            <p className="text-slate-700">Welcome to Dr. Priyanka's Clinic, a dedicated Obstetrics and Gynecology facility located in the heart of Birtamode, Jhapa, Nepal. Established on April 25, 2023, our clinic is committed to providing comprehensive healthcare services tailored specifically for women.</p>
            <p className="text-slate-700 mt-3">At Dr. Priyanka's Clinic, we offer a wide range of Gynecological Services, including cancer prevention, screening, and diagnosis. Our services encompass HPV vaccination, HPV DNA testing, PAP smears, and colposcopy, along with advanced diagnostic tests like CA 125, CEA, CA 19-9 blood tests, breast ultrasound, transvaginal sonography (TVS), and cervical and endometrial biopsies.</p>
            <div className="flex flex-col items-start mt-8">
              <img 
                src="/assets/home/drpriyanka.png" 
                alt="Dr. Priyanka Katwal" 
                className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-pink-100 shadow-lg" 
              />
              <div className="mt-4">
                <div className="font-semibold text-xl text-slate-900">Dr. Priyanka Katwal</div>
                <div className="text-pink-600 font-medium">Gynecologist</div>
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
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-pink-50">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-3.866 0-7 2.462-7 5.5S8.134 19 12 19s7-2.462 7-5.5S15.866 8 12 8zm0 0V5m0 14v2m-4-2s.5 2 4 2 4-2 4-2" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-2 text-slate-700">Providing comprehensive women’s healthcare and promoting cancer prevention.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-amber-50">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l2.09 6.41H20l-5.045 3.666L16.18 21 12 17.897 7.82 21l1.225-5.924L4 11.41h5.91L12 5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
              <p className="mt-2 text-slate-700">To be a leading gynecology clinic delivering compassionate care in Nepal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
