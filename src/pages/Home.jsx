import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About snippet */}
      <section className="bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <p className="uppercase tracking-wide text-sm text-pink-600">Welcome to Dr. Priyanka’s Clinic</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Your Health - Our Priority</h1>
            <p className="mt-4 text-slate-700">Welcome to Dr. Priyanka's Clinic, a dedicated Obstetrics and Gynecology facility located in the heart of Birtamode, Jhapa, Nepal. Established on April 25, 2023, our clinic is committed to providing comprehensive healthcare services tailored specifically for women. Our experienced team understands the unique health needs of women at every stage of life, offering compassionate care in a welcoming environment.</p>

            <p className="mt-4 text-slate-700">At Dr. Priyanka's Clinic, we offer a wide range of Gynecological Services, including cancer prevention, screening, and diagnosis. Our services encompass HPV vaccination, HPV DNA testing, PAP smears, and colposcopy, along with advanced diagnostic tests like CA 125, CEA, CA 19-9 blood tests, breast ultrasound, transvaginal sonography (TVS), and cervical and endometrial biopsies.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/home/drpriyanka.png" 
                  alt="Dr. Priyanka Katwal - Gynecologist" 
                  className="h-16 w-16 rounded-full border-2 border-pink-200 object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">Dr. Priyanka Katwal</div>
                  <div className="text-slate-600 text-sm">Gynecologist & Obstetrician</div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="/contact" 
                  className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
                >
                  Book Appointment
                </a>
                <a 
                  href="/services" 
                  className="text-pink-700 hover:text-pink-800 font-medium flex items-center gap-1 group transition-colors"
                >
                  Our Services
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/assets/home/specialized.jpg" alt="Specialized Gynecology" className="rounded-xl shadow-sm border border-pink-100 w-full h-auto" />
          </div>
        </div>
      </section>

     

      {/* Services grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section title with decorations */}
          <div className="mb-12 text-center relative">
            <div className="relative inline-block">
              <img src="/assets/section/section-back-icon.png" alt="section-back" className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-10 w-20 h-20" />
              <h5 className="text-pink-600 mb-2">Departments</h5>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Gynaecology Services</h1>
              <div className="mt-3 flex items-center justify-center">
                <img src="/assets/shape/section-title-line.png" alt="section-line" className="h-2 w-auto" />
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {title:'HPV Vaccination', img:'/assets/services/HPV-vaccination.jpg', desc:'The HPV (Human Papillomavirus) vaccination is a vital preventive measure against certain types of HPV.'},
              {title:'HPV DNA Test', img:'/assets/services/HPV-DNA-Test.jpg', desc:'A screening used to detect high-risk types of HPV that can lead to cervical cancer.'},
              {title:'PAP Smear', img:'/assets/services/PAP-Smear.jpg', desc:'A crucial screening tool for detecting cervical cancer and its precursors.'},
              {title:'Colposcopy', img:'/assets/services/colposcopy.jpg', desc:'Diagnostic procedure to examine the cervix, vagina, and vulva for disease.'},
              {title:'Breast USG', img:'/assets/services/Breast-USG.jpg', desc:'Non-invasive imaging technique to examine breast tissue for abnormalities.'},
              {title:'Endometrial Biopsy', img:'/assets/services/Cervical-Endometrial-Biopsy.jpg', desc:'Diagnostic procedures to examine cervix and uterine lining tissues.'},
            ].map((s)=> (
              <div key={s.title} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-center flex flex-col h-full">
                <div className="service-thumb">
                  <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
                </div>
                <div className="px-6 pb-6 -mt-4 flex-1 flex">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col w-full">
                    <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                    <p className="text-sm text-slate-700 mt-2">{s.desc}</p>
                    <div className="mt-auto pt-4">
                      <a href="https://www.facebook.com/Doctor.Priyankas.Clinic" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-full px-4 py-3 rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50 text-sm font-medium">Book an Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4">Conducted in regulated environments</p>
        </div>
      </section>

      {/* Safe Abortion Practices */}
<section className="py-16 bg-gradient-to-b from-pink-50 to-amber-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-6">
      {/* Main Info Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-100 shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-slate-800">Safe Abortion Practices</h3>
        <p className="text-slate-600 mb-4">Safe procedures with care and privacy.</p>
        <a 
          href="https://www.facebook.com/Doctor.Priyankas.Clinic" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          Book an Appointment
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>

      {/* Stats Cards */}
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pink-100 text-center">
        <div className="text-4xl font-bold mb-1 text-pink-600">100+</div>
        <div className="text-slate-700 font-medium">Safe Abortions</div>
        <p className="text-slate-600 text-sm mt-2">Safe abortion practices refer to medical procedures and guidelines designed to terminate a pregnancy in a way that minimizes risks and ensures the health and well-being of the individual.</p>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pink-100 text-center">
        <div className="text-4xl font-bold mb-1 text-pink-600">100+</div>
        <div className="text-slate-700 font-medium">Safe Parents</div>
        <p className="text-slate-600 text-sm mt-2">Safe abortion can be performed through medication or surgical methods, depending on the gestational age and the specific circumstances of the patient.</p>
      </div>
    </div>
  </div>
</section>

      {/* Latest Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section title with decorations + blog button */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <h5 className="text-pink-600 text-sm font-medium mb-2">BLOG</h5>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Updates</h1>
              <div className="w-12 h-1 bg-pink-500 mt-3"></div>
            </div>
            <div>
              <a 
                href="https://drpriyankasclinic.com/blog.htm" 
                className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Our Blog
              </a>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/assets/services/image.png" 
                  alt="Safe abortion care" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How to safe abortion care ?</h3>
                <p className="text-sm text-slate-600 mb-4">Accessing safe abortion services is crucial for preventing complications and ensuring women's health.</p>
                <a 
                  href="https://www.who.int/news/item/26-09-2022-ask-the-expert-10-questions-on-safe-abortion-care" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/assets/services/image copy.png" 
                  alt="Breast Cancer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What is Breast Cancer?</h3>
                <p className="text-sm text-slate-600 mb-4">Breast cancers can start from different parts of the breast and understanding them is key to prevention.</p>
                <a 
                  href="https://www.cancer.org/cancer/types/breast-cancer/about/what-is-breast-cancer.html" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.who.int/europe/news/item/11-09-2021-who-recommends-dna-testing-as-a-first-choice-screening-method-for-cervical-cancer-prevention" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block group"
                >
                  <div className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                    <div className="bg-pink-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="text-slate-700 group-hover:text-pink-600">Importance of HPV DNA Test</span>
                  </div>
                </a>
                
                <a 
                  href="https://www.cdc.gov/hpv/vaccines/reasons-to-get.html" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block group"
                >
                  <div className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                    <div className="bg-pink-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <span className="text-slate-700 group-hover:text-pink-600">Why every female needs HPV Vaccination ?</span>
                  </div>
                </a>
                
                <a 
                  href="https://www.who.int/news-room/fact-sheets/detail/abortion" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block group"
                >
                  <div className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                    <div className="bg-pink-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="text-slate-700 group-hover:text-pink-600">Is abortion safe and legal ?</span>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-slate-900 mb-2">Emergency Contact</h4>
                  <a 
                    href="tel:+9779819090115" 
                    className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Make a Call
                  </a>
                  <p className="text-xs text-slate-500 mt-2">Emergency number <a href="tel:+9779819090115" className="text-pink-600 hover:underline">981 9090 115</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
