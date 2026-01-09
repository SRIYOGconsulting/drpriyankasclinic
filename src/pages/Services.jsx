import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const ServiceItem = ({ service: s, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate if the title is long (more than 30 characters)
  const isLongTitle = s.title.length > 30;
  
  // Short description for each service
  const shortDescriptions = {
    'HPV Vaccination': 'Vaccination to prevent HPV-related cancers and infections.',
    'HPV DNA Test': 'Advanced testing for high-risk HPV types that may cause cervical cancer.',
    'PAP Smear': 'Screening test for cervical cancer and precancerous conditions.',
    'Colposcopy': 'Diagnostic procedure to examine the cervix for abnormal cells.',
    'LEEP': 'Procedure to remove abnormal cervical tissue with minimal discomfort.',
    'Cancer Blood Tests': 'Comprehensive blood tests for early cancer detection and monitoring.',
    'CA 125, CEA, CA19-9 and other Blood Tests': 'Tumor marker tests for various types of cancer.',
    'Breast USG': 'Ultrasound imaging for breast tissue evaluation and diagnosis.',
    'Biopsy Procedures': 'Tissue sampling for accurate diagnosis of various conditions.',
    'Pregnancy Care': 'Comprehensive care for expectant mothers and their babies.',
    'Safe Abortion': 'Safe and confidential medical services with proper care.',
    'Family Planning': 'Expert guidance on contraceptive options and reproductive health.',
    'Infertility Care': 'Specialized evaluation and treatment for conception challenges.',
    'Delivery Options': 'Personalized birth planning and delivery care.',
    'Genetic Testing': 'Advanced screening for inherited conditions and abnormalities.',
    'STD Management': 'Confidential testing and treatment for sexually transmitted infections.',
    'Hysteroscopy': 'Minimally invasive procedure to diagnose and treat uterine conditions.',
    'Care Plans': 'Personalized healthcare strategies for optimal well-being.',
    '24/7 Support': 'Round-the-clock access to medical advice and assistance.',
    'Counseling': 'Professional support for mental and emotional well-being.',
    'Wellness': 'Holistic programs for overall health and lifestyle improvement.'
  };

  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Function to get the correct image path
  const getImagePath = (imgPath) => {
    // If the image path is already absolute, return it as is
    if (imgPath.startsWith('http') || imgPath.startsWith('data:')) {
      return imgPath;
    }
    // Otherwise, ensure it points to the public directory correctly
    return imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
  };
  
  // Placeholder image (a small, blurry version of the image or a solid color)
  const placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMTkyIiB2aWV3Qm94PSIwIDAgNDAwIDE5MiI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIgLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2E3YjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pgo8L3N2Zz4=';

  // Create a URL-friendly ID for the service
  const serviceId = s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full flex flex-col"
    >
      <Link to={`/services/${serviceId}`} className="block h-full">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
          <div className="h-48 flex-shrink-0 relative">
            <motion.div 
              className="w-full h-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gray-100">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse w-full h-full bg-gray-200"></div>
                  </div>
                )}
                <img
                  src={getImagePath(s.img || '/images/services/placeholder.jpg')}
                  alt={s.title}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </motion.div>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
              {s.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
              {s.desc}
            </p>
            <div className="mt-auto pt-2 border-t border-gray-100">
              <span className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center">
                Read More <span className="ml-1">→</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Section = ({ small, title, items, isCustomGrid = false, customLayout = false, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section 
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-16 bg-slate-50 scroll-mt-16"
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
    id: 'gynecology',
    small: 'Gynaecology',
    title: 'Cancer Prevention, Screening and Diagnosis',
    items: [
      { title: 'HPV Vaccination', img: '/images/services/hpv-vaccination.jpg', desc: 'Preventive measure against HPV types that can cause cervical, anal, and throat cancers. Recommended for preteens and young adults.' },
      { title: 'HPV DNA Test', img: '/images/services/hpv-dna-test.jpg', desc: 'Detects high-risk HPV types that may lead to cervical cancer. More sensitive than Pap smears for early detection of precancerous changes.' },
      { title: 'PAP Smear', img: '/images/services/pap-smear.jpg', desc: 'Screening test for cervical cancer that detects abnormal cells before they become cancerous. Recommended every 3-5 years for women.' },
      { title: 'Colposcopy', img: '/images/services/colposcopy.jpg', desc: 'Detailed examination of the cervix to identify abnormal cells. Performed when Pap test results are abnormal.' },
      { title: 'LEEP', img: '/images/services/leep.jpg', desc: 'Procedure to remove abnormal cervical tissue using a thin wire loop with electrical current. Helps prevent cervical cancer progression.' },
      { title: 'Cancer Blood Tests', img: '/images/services/ca125-ceaca19-9test.jpg', desc: 'Measures tumor markers to detect and monitor various cancers in women. Helps in early detection and treatment monitoring.' },
      { title: 'Breast USG', img: '/images/services/breast-usg.jpg', desc: 'Imaging test using sound waves to examine breast tissue. Helps distinguish between solid masses and fluid-filled cysts.' },
      { title: 'TVS and USG', img: '/images/services/tvs-usg.jpg', desc: 'Imaging techniques for clear visualization of female reproductive organs. Used for diagnosis and monitoring of various conditions.' },
      { title: 'Biopsy Procedures', img: '/images/services/cervical-endometrial-biopsy.jpg', desc: 'Tissue sampling to diagnose cervical and uterine conditions. Helps detect cancer and other abnormalities accurately.' },
    ],
  };

  const sec2 = {
    id: 'obstetrics',
    small: 'Obstetrics services',
    title: 'The Care of Women during Pregnancy and Childbirth',
    items: [
      { title: 'Pregnancy Care', img: '/images/services/prenatal-antenatal-postnatal-care-counseling.jpg', desc: 'Comprehensive care through all stages of pregnancy and postpartum recovery. Includes regular check-ups and monitoring.' },
      { title: 'Safe Abortion', img: '/images/services/safe-abortion-practices.jpg', desc: 'Safe and confidential medical services following all legal guidelines. Includes counseling and post-procedure care.' },
      { title: 'Family Planning', img: '/images/services/family-planning-counseling.jpg', desc: 'Guidance on contraceptive options and reproductive health management. Personalized to meet individual needs.' },
      { title: 'High Risk Pregnancy', img: '/images/services/high-risk-pregnancy.jpg', desc: 'Specialized care for pregnancies with potential complications. Includes advanced monitoring and support.' },
      { title: 'Infertility Care', img: '/images/services/infertility-diagnosis-treatment.jpg', desc: 'Evaluation and treatment options for couples facing fertility challenges. Comprehensive diagnostic testing available.' },
      { title: 'Delivery Options', img: '/images/services/painless-delivery-cesarean-delivery.jpg', desc: 'Support for both natural and cesarean delivery with pain management. Personalized birth plans available.' },
      { title: 'Genetic Testing', img: '/images/services/genetic-screening.jpg', desc: 'Screening for genetic conditions and birth defects during pregnancy. Includes counseling and support.' },
      { title: 'STD Management', img: '/images/services/std-diagnosis-management.jpg', desc: 'Confidential testing and treatment for sexually transmitted infections. Prevention and education services.' },
    ],
    isCustomGrid: true,
    customLayout: true
  };

  const sec3 = {
    id: 'advanced-procedures',
    small: 'Advanced Procedures',
    title: 'Specialized Diagnostic and Therapeutic Services',
    items: [
      { title: 'Hysteroscopy', img: '/images/services/diagnostic-hysteroscopy.jpg', desc: 'Minimally invasive procedure to examine the uterus and treat conditions. Used for diagnosis and treatment.' },
      { title: 'MVA', img: '/images/services/mva.jpg', desc: 'Manual Vacuum Aspiration for early pregnancy management and diagnosis. Safe and effective procedure.' },
    ],
  };

  const sec4 = {
    id: 'premium-care',
    small: 'Premium Care',
    title: 'Personalized Healthcare Services',
    items: [
      { 
        title: 'Care Plans', 
        img: '/images/services/infertility-diagnosis-treatment.jpg', 
        desc: 'Tailored healthcare strategies designed for your specific health needs and goals.'
      },
      { 
        title: '24/7 Support', 
        img: '/images/services/prenatal-antenatal-postnatal-care-counseling.jpg', 
        desc: 'Round-the-clock access to medical professionals for urgent concerns and advice.'
      },
      { 
        title: 'Counseling', 
        img: '/images/services/family-planning-counseling.jpg', 
        desc: 'Emotional and psychological support for overall well-being and mental health.'
      },
      { 
        title: 'Wellness', 
        img: '/images/services/genetic-screening.jpg', 
        desc: 'Programs focused on maintaining and improving your health and lifestyle.'
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
      <Section {...sec1} id={sec1.id} />
      <Section {...sec2} id={sec2.id} customLayout isCustomGrid />
      <Section {...sec3} id={sec3.id} customLayout isCustomGrid />
      <Section {...sec4} id={sec4.id} />
     
   </div>
  );
}
