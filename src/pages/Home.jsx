import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import OptimizedImage from '../components/OptimizedImage';

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);
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
              <div className="flex flex-col items-start text-left w-full mt-6">
                <div className="flex items-center gap-4">
                  <OptimizedImage
                    src={`/assets/home/drpriyanka.png`}
                    alt="Dr. Priyanka Katwal - Gynecologist"
                    width={128}
                    height={128}
                    className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full border-4 border-pink-200 object-cover shadow-md hover:scale-105 transition-transform duration-300 flex-shrink-0"
                    containerClassName=""
                  />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Dr. Priyanka Katwal</h2>
                    <p className="text-pink-600 font-medium">Gynecologist</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center w-full mt-5 gap-3 max-w-md mx-auto">
                <a 
                  href="/appointment" 
                  aria-label="Book an appointment with Dr. Priyanka"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book an Appointment
                </a>
                <a 
                  href="/services" 
                  className="text-pink-700 hover:text-white border border-pink-200 hover:bg-pink-600 font-medium flex items-center justify-center gap-1 group transition-all rounded-full px-8 py-3 w-full text-center"
                >
                  Our Services
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <OptimizedImage
              src={`${import.meta.env.BASE_URL}assets/home/specialized.jpg`}
              alt="Specialized Gynecology Services"
              width={600}
              height={400}
              className="rounded-xl shadow-sm border border-pink-100 w-full h-auto hover:scale-[1.02] transition-transform duration-500"
              containerClassName="w-full h-full"
            />
          </div>
        </div>
      </section>

     

      {/* Services grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section title with decorations */}
          <div className="mb-12 text-center">
            <div className="relative inline-block">
              <h5 className="text-pink-600 text-lg font-medium mb-2">Our Services</h5>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Women's Health Care</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
            {/* Single column on mobile, full width */}
            <style jsx global>{`
              @media (max-width: 640px) {
                .service-card {
                  width: 100%;
                  max-width: 100%;
                  margin: 0 auto 1.5rem;
                  height: auto;
                  display: flex;
                  flex-direction: column;
                }
                .service-card .service-thumb {
                  flex: 0 0 auto;
                  height: auto;
                }
                .service-card .service-thumb img {
                  width: 100%;
                  height: auto;
                }
              }
            `}</style>
            {[
              {title:'HPV Vaccination', img:`${import.meta.env.BASE_URL}assets/services/hpv-vaccination.jpg`, desc:'The HPV (Human Papillomavirus) vaccination is a vital preventive measure against certain types of HPV.'},
              {title:'HPV DNA Test', img:`${import.meta.env.BASE_URL}assets/services/hpv-dna-test.jpg`, desc:'The HPV screening is a vital diagnostic method for detecting high-risk types of HPV.'},
              {title:'PAP Smear', img:`${import.meta.env.BASE_URL}assets/services/pap-smear.jpg`, desc:'The cervical cancer screening is a vital method for detecting cervical cancer and its precursors.'},
              {title:'Colposcopy', img:`${import.meta.env.BASE_URL}assets/services/colposcopy.jpg`, desc:'The cervical diagnostic procedure is a vital method for examining the cervix, vagina, and vulva for disease.'},
              {title:'Breast USG', img:`${import.meta.env.BASE_URL}assets/services/breast-usg.jpg`, desc:'The breast imaging technique is a vital non-invasive method for examining breast tissue for abnormalities.'},
              {title:'Endometrial Biopsy', img:`${import.meta.env.BASE_URL}assets/services/cervical-endometrial-biopsy.jpg`, desc:'The uterine diagnostic procedure is a vital method for examining the cervix and uterine lining tissues.'},
            ].map((s)=> (
              <div key={s.title} className="service-card bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-center">
                <div className="service-thumb">
                  <OptimizedImage
                    src={s.img}
                    alt={s.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    containerClassName="w-full h-48"
                  />
                </div>
                <div className="p-4 sm:p-5 -mt-3 sm:-mt-8 flex-1 flex flex-col">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex-1 flex flex-col">
                    <h3 className={`text-base sm:text-lg font-semibold text-slate-900 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] leading-tight flex items-center justify-center`}>
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mb-3 sm:mb-4 line-clamp-3 min-h-[3.5rem] sm:min-h-[4.5rem] flex items-center">
                      {s.desc}
                    </p>
                    <div className="mt-auto pt-2 sm:pt-3">
                      <Link 
                        to={`/appointment?service=${encodeURIComponent(s.title)}`}
                        aria-label={`Book an appointment for ${s.title}`}
                        className="inline-flex justify-center items-center w-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50 hover:text-pink-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
                      >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Book an Appointment
                      </Link>
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
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Safe Abortion Practices</h2>
      <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
          <Link
            to="/appointment"
            className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Book an Appointment
          </Link>
    </div>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
      {/* Main Info Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-100 shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-slate-800">Safe Abortion Practices</h3>
        <p className="text-slate-600 mb-4">Safe procedures with care and privacy.</p>
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
          {/* Section title with decorations */}
          <div className="text-center mb-12">
            <h5 className="text-pink-600 text-sm font-medium mb-2">BLOG</h5>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Latest Updates</h1>
            <div className="w-12 h-1 bg-pink-500 mx-auto"></div>
            
            <div className="mt-8">
              <a 
                href="https://drpriyankasclinic.com/blog.html" 
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
                <p className="text-sm text-slate-600 mb-4">Accessing safe abortion services is crucial for preventing complications and ensuring women's health. Our clinic provides confidential and professional care with the highest medical standards. Our experienced team ensures your safety and comfort throughout the process.</p>
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
                <p className="text-sm text-slate-600 mb-4">Breast cancers can start from different parts of the breast and understanding them is key to prevention. Early detection through regular screenings and self-exams significantly improves treatment outcomes. Our clinic offers comprehensive breast health services including mammograms and ultrasounds.</p>
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
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Emergency Contact</h4>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm text-slate-600 mb-2">Call Now</p>
                    <a 
                      href="tel:+9779819090115" 
                      className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-base font-medium transition-colors whitespace-nowrap w-full sm:w-auto"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      +977 981-9090115
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">24/7 Emergency Services Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
