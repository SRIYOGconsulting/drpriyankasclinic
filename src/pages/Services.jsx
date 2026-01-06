import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';

const ServiceItem = ({ service: s, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate if the title is long (more than 30 characters)
  const isLongTitle = s.title.length > 30;
  
  // Full descriptions with two paragraphs for each service
  const fullDescriptions = {
    'HPV Vaccination': [
      'The HPV (Human Papillomavirus) vaccination is a vital preventive measure against certain types of HPV that can cause cervical, anal, throat, and other cancers. The vaccine is most effective when administered before exposure to the virus, typically recommended for preteens and young adults.',
      'It provides long-lasting protection and is a key component of cancer prevention strategies worldwide. The vaccine is safe, effective, and has been shown to significantly reduce the incidence of HPV-related cancers and genital warts.'
    ],
    'HPV DNA Test': [
      'The HPV DNA test is a crucial diagnostic tool that detects high-risk HPV types that may cause cervical cancer. This test is more sensitive than a Pap smear in detecting precancerous changes.',
      'It is recommended for women over 30 as part of routine cervical cancer screening, or as a follow-up to an abnormal Pap test result. The test is quick, painless, and can help identify women at risk of developing cervical cancer before any abnormal cells are visible.'
    ],
    'PAP Smear': [
      'A Pap smear is a screening procedure for cervical cancer that tests for the presence of precancerous or cancerous cells on the cervix. It is one of the most reliable and effective cancer screening tests available.',
      'Regular Pap tests can detect early changes in cervical cells, allowing for treatment before cancer develops. The procedure is quick, simple, and can be done during a routine pelvic exam. Early detection through regular screening is key to preventing cervical cancer.'
    ],
    'Colposcopy': [
      'A colposcopy is a diagnostic procedure that provides a magnified view of the cervix, vagina, and vulva to detect abnormal cells. It is typically performed when a Pap test shows abnormal results.',
      'During the procedure, the doctor may take a small tissue sample (biopsy) for further testing if needed. The procedure is usually done in the doctor\'s office and takes about 10-20 minutes. It allows for early detection and treatment of precancerous conditions.'
    ],
    'LEEP': [
      'A Loop Electrosurgical Excision Procedure (LEEP) uses a thin wire loop heated by electric current to remove abnormal cervical tissue. This outpatient procedure is both diagnostic and therapeutic.',
      'LEEP is typically performed after abnormal Pap test results and can effectively remove precancerous cells, helping to prevent cervical cancer. The procedure is done under local anesthesia and takes about 10-20 minutes, with minimal recovery time.'
    ],
    'Cancer Blood Tests': [
      'Comprehensive blood tests that measure various tumor markers to detect and monitor different types of cancers. Includes CA 125 for ovarian cancer, CEA for colorectal cancer, and CA19-9 for pancreatic cancer.',
      'These tests are valuable tools for early detection, monitoring treatment effectiveness, and detecting potential recurrence. While not diagnostic on their own, they provide crucial information when combined with other diagnostic procedures and clinical evaluation.'
    ],
    'CA 125, CEA, CA19-9 and other Blood Tests': [
      'These blood tests measure specific tumor markers that can indicate various cancers. CA 125 is associated with ovarian cancer, CEA with colorectal cancer, and CA19-9 with pancreatic cancer.',
      'These tests help in early detection, monitoring treatment effectiveness, and detecting recurrence. While not diagnostic on their own, they provide valuable information when used in conjunction with other diagnostic tests and clinical evaluation.'
    ],
    'Breast USG': [
      'Breast ultrasound is a non-invasive imaging technique that uses sound waves to examine breast tissue. It is particularly useful for evaluating breast lumps found during a physical exam or mammogram.',
      'This test helps distinguish between solid masses (which may need biopsy) and fluid-filled cysts (which are typically benign). It is often used as a follow-up to an abnormal mammogram and is especially helpful for women with dense breast tissue where mammograms may be less effective.'
    ],
    'Biopsy Procedures': [
      'Biopsy procedures involve the removal of tissue samples for diagnostic examination. We offer various biopsy techniques including core needle, fine needle aspiration, and excisional biopsies to ensure accurate diagnosis.',
      'Our team performs these procedures with precision and care, using imaging guidance when needed to target specific areas. The samples are analyzed by experienced pathologists to provide accurate diagnoses for appropriate treatment planning.'
    ],
    'Pregnancy Care': [
      'Comprehensive prenatal care services to monitor the health of both mother and baby throughout pregnancy. Includes regular check-ups, ultrasounds, and personalized health guidance.',
      'Our approach focuses on preventive care, early detection of potential complications, and education to support a healthy pregnancy journey. We provide continuous support from conception through delivery and postpartum care.'
    ],
    'Safe Abortion': [
      'Safe and legal abortion services provided with the highest standards of medical care and confidentiality. We offer both medical and surgical options based on individual circumstances.',
      'Our compassionate team provides comprehensive counseling, thorough medical evaluation, and follow-up care to ensure patient safety and well-being throughout the process.'
    ],
    'Family Planning': [
      'Expert guidance on contraceptive options and family planning methods tailored to individual needs and health considerations. We help you make informed decisions about your reproductive health.',
      'Services include counseling on various contraceptive methods, fertility awareness, and long-term family planning strategies to support your reproductive goals and overall well-being.'
    ],
    'Infertility Care': [
      'Specialized evaluation and treatment for couples facing challenges with conception. Our comprehensive approach includes diagnostic testing and personalized treatment plans.',
      'We offer a range of fertility treatments from basic interventions to advanced reproductive technologies, supported by a team of experienced fertility specialists and embryologists.'
    ],
    'Delivery Options': [
      'Personalized birth planning with options for natural birth, water birth, and cesarean section when medically necessary. Our focus is on safe delivery and positive birth experiences.',
      'We provide comprehensive labor support, pain management options, and immediate newborn care to ensure the best possible start for both mother and baby.'
    ],
    'Genetic Testing': [
      'Advanced genetic screening and diagnostic testing to assess risk for inherited conditions and chromosomal abnormalities. Includes carrier screening and prenatal genetic testing options.',
      'Our genetic counseling services help interpret test results and provide guidance for family planning decisions and pregnancy management.'
    ],
    'STD Management': [
      'Confidential testing, diagnosis, and treatment of sexually transmitted infections. We provide comprehensive care including prevention counseling and partner notification services.',
      'Our approach focuses on education, early detection, and effective treatment to prevent complications and reduce transmission rates in the community.'
    ],
    'Hysteroscopy': [
      'Minimally invasive procedure to diagnose and treat uterine conditions. Used to investigate abnormal bleeding, polyps, fibroids, and other uterine abnormalities.',
      'This outpatient procedure allows for both diagnosis and treatment during the same session, often eliminating the need for more invasive surgery and reducing recovery time.'
    ],
    'Care Plans': [
      'Personalized healthcare plans designed to address your specific health needs and wellness goals. We create comprehensive strategies for managing both acute and chronic conditions.',
      'Our care plans integrate medical treatments, lifestyle modifications, and preventive care to optimize your health outcomes and quality of life.'
    ],
    '24/7 Support': [
      'Round-the-clock access to medical advice and support from our healthcare team. We ensure you have the guidance you need, whenever you need it.',
      'Our dedicated support line connects you with healthcare professionals who can provide immediate assistance, answer questions, and direct you to appropriate care.'
    ],
    'Counseling': [
      'Professional counseling services to support mental and emotional well-being. We offer individual, couples, and family counseling in a supportive environment.',
      'Our licensed therapists provide evidence-based therapies to help manage stress, anxiety, depression, and other mental health concerns.'
    ],
    'Wellness': [
      'Holistic wellness programs focused on preventive care and healthy lifestyle choices. We offer nutrition counseling, fitness guidance, and stress management techniques.',
      'Our wellness initiatives are designed to help you achieve optimal health through balanced living, regular health screenings, and personalized wellness strategies.'
    ],
    'TVS and USG': [
      'Transvaginal ultrasound (TVS) and pelvic ultrasound provide detailed images of the female reproductive organs. These imaging techniques help diagnose conditions like fibroids, ovarian cysts, and other pelvic abnormalities.',
      'TVS provides a clearer image of the uterus and ovaries by using a probe inserted into the vagina, while pelvic ultrasound is done externally. Both procedures are safe, painless, and use no radiation, making them ideal for routine examinations and pregnancy monitoring.'
    ],
    'Cervical and Endometrial Biopsy': [
      'An endometrial biopsy is a procedure to remove a small sample of tissue from the uterine lining. It is used to diagnose abnormal uterine bleeding, check for endometrial cancer, or evaluate the uterine lining in women with infertility.',
      'The procedure is typically done in the doctor\'s office and provides valuable information about hormonal effects on the endometrium. While it may cause some cramping, the discomfort is usually brief and can be managed with over-the-counter pain relievers.'
    ],
    'Prenatal, Antenatal and Postnatal Care and Counseling': [
      'Comprehensive care throughout pregnancy, delivery, and postpartum period. Includes regular check-ups, ultrasounds, nutritional guidance, and emotional support to ensure the health and well-being of both mother and baby.',
      'Our team provides personalized care plans tailored to each stage of pregnancy and beyond, addressing both physical and emotional needs. We focus on education and support to help mothers have a healthy pregnancy and confident transition into motherhood.'
    ],
    'Safe Abortion Practices': [
      'Safe and confidential medical services following all legal and ethical guidelines. Includes counseling, medical abortion options, and post-procedure care to ensure patient safety and well-being.',
      'Our clinic provides compassionate, non-judgmental care with a focus on patient safety, privacy, and emotional support. We offer comprehensive information about all available options to help women make informed decisions about their reproductive health.'
    ],
    'Family Planning and Counseling': [
      'Personalized counseling on various contraceptive methods, fertility awareness, and reproductive health. We help individuals and couples make informed decisions about family planning and reproductive health.',
      'Our approach includes education about all available options, from natural family planning to long-acting reversible contraceptives. We provide unbiased information to help you choose the method that best fits your lifestyle, health needs, and future family planning goals.'
    ],
    'High Risk Pregnancy': [
      'Specialized care for pregnancies with potential complications. Includes advanced monitoring, specialized testing, and coordination with maternal-fetal medicine specialists when needed.',
      'We develop personalized care plans for high-risk pregnancies, which may include more frequent monitoring, specialized ultrasounds, and consultations with specialists. Our goal is to ensure the best possible outcomes for both mother and baby throughout the pregnancy and delivery.'
    ],
    'Infertility Diagnosis and Treatment': [
      'Comprehensive fertility assessment and evidence-based treatments. Includes ovulation induction, fertility medications, and guidance on assisted reproductive technologies when needed.',
      'Our approach to fertility care includes a thorough evaluation of both partners, personalized treatment plans, and emotional support throughout the process. We offer a range of treatments from basic fertility medications to advanced reproductive technologies, always with a focus on the physical and emotional well-being of our patients.'
    ],
    'Painless Delivery and Cesarean Delivery': [
      'Pain management options during labor including epidural anesthesia. We provide information and support to help expectant mothers make informed choices about their birth experience.',
      'Our team is experienced in both vaginal and cesarean deliveries, with a focus on patient comfort and safety. We offer various pain management options and work with you to create a birth plan that aligns with your preferences while ensuring the health of both mother and baby.'
    ],
    'Genetic Screening': [
      'Advanced screening for genetic conditions and birth defects. Includes carrier screening, non-invasive prenatal testing (NIPT), and detailed counseling about results and options.',
      'Our genetic counseling services help you understand your risk factors, test results, and available options. We provide support and guidance to help you make informed decisions about your pregnancy and your baby\'s health.'
    ],
    'STD Diagnosis and Management': [
      'Confidential testing, diagnosis, and treatment of sexually transmitted infections. Includes partner notification services, prevention counseling, and long-term management of chronic conditions.',
      'We provide a safe, non-judgmental environment for STD testing and treatment. Our approach includes education about prevention, regular screening recommendations, and comprehensive care for both common and complex sexually transmitted infections.'
    ],
    'Diagnostic Hysteroscopy': [
      'A minimally invasive procedure that allows direct visualization of the uterine cavity using a hysteroscope. Used to diagnose and treat conditions like abnormal bleeding, polyps, fibroids, and uterine septum with minimal discomfort and quick recovery.',
      'The procedure is typically performed in an office setting with minimal anesthesia. It provides valuable diagnostic information and can often be used to treat certain conditions during the same procedure, reducing the need for additional surgeries.'
    ],
    'MVA': [
      'Manual Vacuum Aspiration (MVA) is a safe and effective procedure for early pregnancy termination, management of incomplete miscarriage, or diagnostic sampling of the uterine lining.',
      'Performed under local anesthesia with minimal recovery time, MVA has a lower risk of complications compared to traditional methods. The procedure typically takes about 5-10 minutes and is associated with less pain and bleeding than other methods.'
    ],
    'Personalized Care Plan': [
      'Personalized healthcare plans crafted to match your unique needs, lifestyle, and long-term wellness goals for better health outcomes.',
      'We take a holistic approach to your health, considering all aspects of your well-being. Your personalized plan may include preventive care, lifestyle recommendations, and targeted treatments to help you achieve and maintain optimal health.'
    ],
    '24/7 Doctor Support': [
      '24/7 access to trusted healthcare professionals, ensuring constant support, timely guidance, and complete peace of mind.',
      'Our team is available around the clock to address your concerns, whether you have questions about your treatment plan, need medical advice, or require urgent care. We\'re committed to being there when you need us.'
    ],
    'Emotional Counseling': [
      'Dedicated emotional support from trained professionals to help you stay balanced, confident, and supported throughout your healthcare journey.',
      'We understand that physical health is deeply connected to emotional well-being. Our counseling services provide a safe space to discuss concerns, manage stress, and develop coping strategies for the challenges that may arise during medical treatment or life changes.'
    ],
    'Wellness Programs': [
      'Wide-ranging health programs designed to maintain wellness, prevent illness, and support long-term improvements in your overall health.',
      'Our evidence-based programs address nutrition, exercise, stress management, and lifestyle factors that impact your health. We work with you to create sustainable habits that support your long-term well-being and quality of life.'
    ]
  };

  // Function to get the correct image path
  const getImagePath = (imgPath) => {
    // If the image path is already absolute, return it as is
    if (imgPath.startsWith('http') || imgPath.startsWith('data:')) {
      return imgPath;
    }
    // Otherwise, ensure it points to the public directory correctly
    return imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="w-full h-full"
    >
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-center h-full flex flex-col">
        <div className="service-thumb h-48 flex-shrink-0">
          <motion.div 
            className="w-full h-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={getImagePath(s.img)}
              alt={s.title}
              width={400}
              height={192}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback to a default image if the main image fails to load
                e.target.onerror = null;
                // Try to use a default service image, if that fails, use a placeholder
                const defaultImages = [
                  '/images/services/image.png',
                  'https://via.placeholder.com/400x192?text=Image+Not+Found',
                  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22192%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20192%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a1b8d7e8f%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a1b8d7e8f%22%3E%3Crect%20width%3D%22400%22%20height%3D%22192%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22147.296875%22%20y%3D%22104.1%22%3E400x192%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                ];
                
                let currentIndex = 0;
                const tryNextFallback = () => {
                  if (currentIndex < defaultImages.length) {
                    e.target.src = defaultImages[currentIndex++];
                  }
                };
                
                e.target.onerror = tryNextFallback;
                tryNextFallback();
              }}
            />
          </motion.div>
        </div>
        <div className="p-4 sm:p-5 -mt-3 sm:-mt-8 flex-1 flex flex-col">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex-1 flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] leading-tight flex items-center justify-center">
              {s.title}
            </h3>
            <div className="flex-1 flex flex-col">
              <p className="text-xs sm:text-sm text-slate-700 mb-3 sm:mb-4 line-clamp-3 min-h-[3.5rem] sm:min-h-[4.5rem] flex items-center text-left">
                {s.desc}
              </p>
              {isExpanded && fullDescriptions[s.title] && (
                <div className="mt-2 text-xs sm:text-sm text-slate-600 text-left space-y-2">
                  {fullDescriptions[s.title].map((paragraph, idx) => (
                    <p key={idx} className="mb-2">{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-auto pt-2 sm:pt-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex justify-center items-center w-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50 hover:text-pink-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
                aria-label={isExpanded ? `Show less about ${s.title}` : `Read more about ${s.title}`}
              >
                {isExpanded ? (
                  <>
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    Read More
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
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
