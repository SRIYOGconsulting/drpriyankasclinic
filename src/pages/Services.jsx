import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';

const ServiceItem = ({ service: s, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate if the title is long (more than 30 characters)
  const isLongTitle = s.title.length > 30;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="w-full h-full flex flex-col"
    >
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-center hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <div className="service-thumb h-40 sm:h-48 flex-shrink-0 relative">
          <motion.div 
            className="w-full h-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={s.img}
              alt={s.title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="p-4 sm:p-5 -mt-3 sm:-mt-4 flex-1 flex flex-col">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex-1 flex flex-col">
            <h3 className={`${isLongTitle ? 'text-sm sm:text-base' : 'text-base sm:text-lg'} font-semibold text-slate-900 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] leading-tight flex items-center justify-center`}>
              {s.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mb-3 sm:mb-4 line-clamp-3 min-h-[3.5rem] sm:min-h-[4.5rem] flex items-center">
              {s.desc}
            </p>
            <div className="mt-auto pt-2 sm:pt-3">
              <a 
                href={`/services#${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex justify-center items-center w-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50 hover:text-pink-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
                aria-label={`Read more about ${s.title}`}
              >
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Section = ({ small, title, items, isCustomGrid = false, customLayout = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-16 bg-slate-50"
    >
      <div className="w-[80%] mx-auto px-4 sm:px-6">
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8 items-end mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="md:col-span-2">
            {small && <motion.h5 
              className="text-pink-600 text-sm sm:text-base font-medium mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {small}
            </motion.h5>}
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h2>
            <motion.div 
              className="mt-3"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <img 
                src="/assets/shape/section-title-line.png" 
                alt="" 
                className="h-1.5 sm:h-2 w-full" 
                aria-hidden="true"
              />
            </motion.div>
          </div>
          <motion.div 
            className="hidden md:flex justify-end pb-2"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.a 
              href="/appointment"
              className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 sm:py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book an Appointment
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
        >
          {/* Mobile View (unchanged) */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s, index) => (
              <div key={`mobile-${s.title}`} className="w-full">
                <ServiceItem service={s} index={index} />
              </div>
            ))}
          </div>
          
          {/* Desktop View */}
          {isCustomGrid && customLayout ? (
            <div className="hidden md:block">
              {/* First row - 2 centered cards */}
              <div className="flex justify-center w-full mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" style={{ maxWidth: '66.666667%' }}>
                  {items.slice(0, 2).map((s, index) => (
                    <div key={s.title} className="w-full">
                      <ServiceItem service={s} index={index} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Second row - 3 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {items.slice(2, 5).map((s, index) => (
                  <div key={s.title} className="w-full">
                    <ServiceItem service={s} index={index + 2} />
                  </div>
                ))}
              </div>
              
              {/* Third row - 3 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.slice(5).map((s, index) => (
                  <div key={s.title} className="w-full">
                    <ServiceItem service={s} index={index + 5} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((s, index) => (
                <div key={`desktop-${s.title}`} className="w-full">
                  <ServiceItem service={s} index={index} />
                </div>
              ))}
            </div>
          )}
          
          <motion.div 
            className="mt-8 md:hidden text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="/appointment"
              className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book an Appointment
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};


export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sec1 = {
    small: 'Gynaecology',
    title: 'Cancer Prevention, Screening and Diagnosis',
    items: [
      { title: 'HPV Vaccination', img: '/images/services/hpv-vaccination.jpg', desc: 'The HPV (Human Papillomavirus) vaccination is a vital preventive measure against certain types of HPV that can cause cervical, anal, throat, and other cancers.' },
      { title: 'HPV DNA Test', img: '/images/services/hpv-dna-test.jpg', desc: 'HPV DNA test detects high-risk HPV types that may cause cervical cancer. A key screening tool for early risk identification and women\'s health protection.' },
      { title: 'PAP Smear', img: '/images/services/pap-smear.jpg', desc: 'A vital test that helps identify cervical cancer early by detecting abnormal cell changes and HPV risk, supporting timely care and better health outcomes.' },
      { title: 'Colposcopy', img: '/images/services/colposcopy.jpg', desc: 'A diagnostic exam that closely inspects the cervix, vagina, and vulva to detect abnormal cells, infections, or early signs of disease for timely treatment.' },
      { title: 'LEEP', img: '/images/services/leep.jpg', desc: 'A procedure that uses a thin electrified loop to remove abnormal or precancerous cervical cells, helping prevent cervical cancer and support early treatment.' },
      { title: 'CA 125, CEA, CA19-9 and other Blood Tests', img: '/images/services/ca125-ceaca19-9test.jpg', desc: 'Blood tests that measure specific tumor markers to help detect, track, and monitor various cancers, supporting early diagnosis and treatment planning.' },
      { title: 'Breast USG', img: '/images/services/breast-usg.jpg', desc: 'A non-invasive imaging method that examines breast tissue to identify lumps, changes, or other abnormalities for early detection and improved breast health.' },
      { title: 'TVS and USG', img: '/images/services/tvs-usg.jpg', desc: 'Imaging techniques like TVS and USG that provide clear visualization of internal organs, helping detect abnormalities and support accurate medical diagnosis.' },
      { title: 'Cervical and Endometrial Biopsy', img: '/images/services/cervical-endometrial-biopsy.jpg', desc: 'Diagnostic procedures that evaluate cervical and uterine lining tissues to identify abnormalities, detect disease early, and guide appropriate treatment.' },
    ],
  };

  const sec2 = {
    small: 'Obstetrics services',
    title: 'The Care of Women during Pregnancy and Childbirth',
    items: [
      { title: 'Prenatal, Antenatal and Postnatal Care and Counseling', img: '/images/services/prenatal-antenatal-postnatal-care-counseling.jpg', desc: 'Care and counseling that support the health of mother and baby through pregnancy, childbirth, and postpartum, ensuring safety, guidance, and overall well-being.' },
      { title: 'Safe Abortion Practices', img: '/images/services/safe-abortion-practices.jpg', desc: 'Safe medical protocols focused on reducing risks, protecting health, and promoting overall well-being through proper guidance and standardized care.' },
      { title: 'Family Planning and Counseling', img: '/images/services/family-planning-counseling.jpg', desc: 'Trusted information and support for reproductive health, empowering individuals to make informed decisions about family planning and future goals.' },
      { title: 'High Risk Pregnancy', img: '/images/services/high-risk-pregnancy.jpg', desc: 'Specialized care for high-risk pregnancies, ensuring safety for both mother and baby through close monitoring and advanced medical support.' },
      { title: 'Infertility Diagnosis and Treatment', img: '/images/services/infertility-diagnosis-treatment.jpg', desc: 'Comprehensive evaluation and modern treatments for infertility, helping individuals and couples achieve healthy and informed paths to parenthood.' },
      { title: 'Painless Delivery and Cesarean Delivery', img: '/images/services/painless-delivery-cesarean-delivery.jpg', desc: 'Safe childbirth support through epidural pain relief and Cesarean delivery options, ensuring comfort and medical safety for mothers.' },
      { title: 'Genetic Screening', img: '/images/services/genetic-screening.jpg', desc: 'Genetic screening to detect inherited conditions and disease risks, enabling early guidance, prevention, and informed health decisions' },
      { title: 'STD Diagnosis and Management', img: '/images/services/std-diagnosis-management.jpg', desc: 'Complete STI care, from accurate detection to effective treatment, ensuring protection, awareness, and long-term sexual health' },
    ],
    isCustomGrid: true,
    customLayout: true
  };

  const sec3 = {
    small: 'Obstetrics services',
    title: 'An obstetrician provides routine prenatal care to people who are pregnant. They also diagnose and treat complications during pregnancy.',
    items: [
      { title: 'Diagnostic Hysteroscopy', img: '/images/services/diagnostic-hysteroscopy.jpg', desc: 'A gentle, minimally invasive method to view the uterus, aiding diagnosis and improving treatment decisions with reduced discomfort.' },
      { title: 'MVA', img: '/images/services/mva.jpg', desc: 'A safe, quick, and minimally invasive procedure using Manual Vacuum Aspiration for effective early pregnancy care and management.' },
    ],
  };

  const sec4 = {
    small: 'Premium Care',
    title: 'Personalized healthcare with emotional support',
    items: [
      { 
        title: 'Personalized Care Plan', 
        img: '/images/services/infertility-diagnosis-treatment.jpg', 
        desc: 'Personalized healthcare plans crafted to match your unique needs, lifestyle, and long-term wellness goals for better health outcomes.'
      },
      { 
        title: '24/7 Doctor Support', 
        img: '/images/services/prenatal-antenatal-postnatal-care-counseling.jpg', 
        desc: '24/7 access to trusted healthcare professionals, ensuring constant support, timely guidance, and complete peace of mind.'
      },
      { 
        title: 'Emotional Counseling', 
        img: '/images/services/family-planning-counseling.jpg', 
        desc: 'Dedicated emotional support from trained professionals to help you stay balanced, confident, and supported throughout your healthcare journey.'
      },
      { 
        title: 'Wellness Programs', 
        img: '/images/services/genetic-screening.jpg', 
        desc: 'Wide-ranging health programs designed to maintain wellness, prevent illness, and support long-term improvements in your overall health.'
      },
    ]
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageBanner 
        title="Our Services"
        description="Comprehensive gynecological and obstetric care tailored for women's health"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
        bgImage="/images/home/slider/1.jpg"
      />

      {/* Intro Section with Animation */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-[80%] max-w-6xl mx-auto px-4">
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:flex-1">
              <motion.h5 
                className="text-slate-500 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                health care facility
              </motion.h5>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                Dedicated Services
              </motion.h1>
              <motion.div 
                className="h-1 w-20 bg-pink-600 mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              />
              <motion.p 
                className="text-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                From safe abortion practices to family planning and high-risk pregnancy management, we prioritize your safety and comfort. Our clinic is equipped to provide painless delivery and Cesarean delivery options, as well as genetic screening and STD diagnosis and management.
              </motion.p>
            </div>
            
            {/* 100% Satisfaction Badge - Right Side */}
            <motion.div 
              className="mt-8 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 border-4 border-pink-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 rounded-full border-8 border-pink-200 border-opacity-30 animate-pulse"></div>
                <div className="text-center p-4">
                  <span className="block text-3xl md:text-4xl font-bold text-pink-600">100%</span>
                  <span className="block text-base font-medium text-slate-700">Satisfaction</span>
                  <span className="block text-xs text-slate-500 mt-0.5">Guaranteed</span>
                </div>
                <div className="absolute -bottom-3 bg-pink-600 text-white text-[10px] font-semibold px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  Our Promise
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Sections with Animations */}
      <Section {...sec1} />
      <Section {...sec2} customLayout isCustomGrid />
      <Section {...sec3} customLayout isCustomGrid />
      <Section {...sec4} />
     
   </div>
  );
}

