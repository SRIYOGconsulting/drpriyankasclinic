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
            <p className="mt-4 text-slate-700">Established on April 25, 2023, our clinic is committed to providing comprehensive healthcare services tailored specifically for women.</p>
            <div className="mt-6 flex gap-3">
              <a href="/contact" className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded">Book Appointment</a>
              <a href="/services" className="text-pink-700 font-medium">Our Services →</a>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/assets/home/specialized.jpg" alt="Specialized Gynecology" className="rounded-xl shadow-sm border border-pink-100 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Specialized Gynecology */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900">Specialized Gynecology</h2>
          <p className="mt-4 text-slate-700">Welcome to Dr. Priyanka's Clinic, a dedicated Obstetrics and Gynecology facility located in the heart of Birtamode, Jhapa, Nepal. We offer HPV vaccination, HPV DNA testing, PAP smears, colposcopy, CA 125/CEA/CA 19-9 blood tests, breast ultrasound, TVS, and cervical & endometrial biopsies.</p>
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
                      <a href="/contact" className="inline-flex justify-center items-center w-full px-4 py-3 rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50 text-sm font-medium">Book an Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4">Conducted in regulated environments</p>
        </div>
      </section>

      {/* Stats / Safe Abortion */}
      <section className="py-16 bg-pink-700 text-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3 items-start">
          <div className="bg-white/0 border border-white/20 rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Safe Abortion Practices</h3>
            <p className="mt-2 text-white/90">Safe procedures with care and privacy.
            </p>
            <a href="/contact" className="inline-block mt-4 bg-white text-pink-700 hover:bg-gray-100 px-4 py-2 rounded">Book an Appointment</a>
          </div>
          <div className="bg-white/0 border border-white/20 rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="text-white/90">Safe Abortions</div>
          </div>
          <div className="bg-white/0 border border-white/20 rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="text-white/90">Safe Parents</div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section title with decorations + blog button */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="mb-10 md:mb-0 text-left relative">
              <img src="/assets/section/section-back-icon.png" alt="section-back" className="absolute -top-10 opacity-10 w-20 h-20" />
              <h5 className="text-pink-600 mb-2">Blog</h5>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Updates</h1>
              <div className="mt-3">
                <img src="/assets/shape/section-title-line.png" alt="section-line" className="h-2 w-auto" />
              </div>
            </div>
            <div className="pb-2">
              <a href="https://drpriyankasclinic.com/blog.htm" className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full"><span className="mr-2 text-lg">+</span>our blog</a>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <a className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow" href="https://www.who.int/news/item/26-09-2022-ask-the-expert-10-questions-on-safe-abortion-care" target="_blank" rel="noreferrer">
              <h4 className="font-semibold text-slate-900">How to safe abortion care ?</h4>
              <p className="text-sm text-slate-700 mt-2">Accessing safe abortion services is crucial for preventing complications.</p>
            </a>
            <a className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow" href="https://www.cancer.org/cancer/types/breast-cancer/about/what-is-breast-cancer.html" target="_blank" rel="noreferrer">
              <h4 className="font-semibold text-slate-900">What is Breast Cancer?</h4>
              <p className="text-sm text-slate-700 mt-2">Breast cancers can start from different parts of the breast.</p>
            </a>
            <div className="space-y-3">
              <a className="block text-pink-700 font-medium" href="https://www.who.int/europe/news/item/11-09-2021-who-recommends-dna-testing-as-a-first-choice-screening-method-for-cervical-cancer-prevention" target="_blank" rel="noreferrer">Importance of HPV DNA Test</a>
              <a className="block text-pink-700 font-medium" href="https://www.cdc.gov/hpv/vaccines/reasons-to-get.html" target="_blank" rel="noreferrer">Why every female needs HPV Vaccination ?</a>
              <a className="block text-pink-700 font-medium" href="https://www.who.int/news-room/fact-sheets/detail/abortion" target="_blank" rel="noreferrer">Is abortion safe and legal ?</a>
            </div>
          </div>
          <div className="mt-10">
            <a href="/contact" className="bg-slate-900 text-white px-4 py-2 rounded">Make a Call</a>
            <p className="text-xs text-slate-500 mt-2">Emergency number <a className="underline" href="tel:+9779819090115">981 9090 115</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
