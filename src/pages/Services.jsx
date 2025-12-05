import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ServiceItem = ({ service: s, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full h-full"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
        <div className="service-thumb overflow-hidden">
          <motion.img 
            src={s.img} 
            alt={s.title} 
            className="w-full h-48 sm:h-56 md:h-48 lg:h-52 object-cover"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <motion.h3 
            className="text-lg sm:text-xl font-semibold text-slate-900 mb-2"
            whileHover={{ color: '#DB2777' }}
          >
            {s.title}
          </motion.h3>
          <p className="text-sm text-slate-600 flex-1">{s.desc}</p>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <motion.a 
              href="https://www.facebook.com/Doctor.Priyankas.Clinic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center px-4 py-2.5 rounded-full border-2 border-pink-600 text-pink-600 hover:bg-pink-50 text-sm font-medium transition-colors"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: '#DB2777',
                color: 'white',
                borderColor: '#DB2777'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Book an Appointment
            </motion.a>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8 items-end mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="md:col-span-2 relative">
            <motion.img 
              src="/assets/section/section-back-icon.png" 
              alt="" 
              className="hidden md:block absolute -top-10 opacity-10 w-16 h-16 md:w-20 md:h-20 left-0" 
              aria-hidden="true"
              animate={inView ? { rotate: 360 } : {}}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
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
              transition={{ delay: 0.4 }}
            >
              {title}
            </motion.h2>
            <motion.div 
              className="mt-3"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
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
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="https://www.facebook.com/Doctor.Priyankas.Clinic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 sm:py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2 text-lg">+</span>Book an Appointment
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          {isCustomGrid ? (
            <div className="space-y-8">
              {customLayout ? (
                <div className="space-y-6">
                  {/* First row - 2 centered items */}
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ maxWidth: 'calc(66.666667% + 1.5rem)' }}>
                      {items.slice(0, 2).map((s, index) => (
                        <ServiceItem key={s.title} service={s} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  {/* Second row - 3 items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.slice(2, 5).map((s, index) => (
                      <ServiceItem key={s.title} service={s} index={index + 2} />
                    ))}
                  </div>
                  
                  {/* Third row - 3 items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.slice(5).map((s, index) => (
                      <ServiceItem key={s.title} service={s} index={index + 5} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((s, index) => (
                    <ServiceItem key={s.title} service={s} index={index} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((s, index) => (
                <ServiceItem key={s.title} service={s} index={index} />
              ))}
            </div>
          )}
          
          <motion.div 
            className="mt-8 md:hidden text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href="https://www.facebook.com/Doctor.Priyankas.Clinic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2 text-lg">+</span>Book an Appointment
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
      { title: 'HPV Vaccination', img: '/assets/services/HPV-vaccination.jpg', desc: 'The HPV (Human Papillomavirus) vaccination is a vital preventive measure against certain types of HPV that can cause cervical, anal, throat, and other cancers.' },
      { title: 'HPV DNA Test', img: '/assets/services/HPV-DNA-Test.jpg', desc: 'Medical screening used to detect the presence of high-risk types of Human Papillomavirus (HPV) that can lead to cervical cancer.' },
      { title: 'PAP Smear', img: '/assets/services/PAP-Smear.jpg', desc: 'A crucial screening tool for detecting cervical cancer and its precursors in women.' },
      { title: 'Colposcopy', img: '/assets/services/colposcopy.jpg', desc: 'Diagnostic procedure used to closely examine the cervix, vagina, and vulva for signs of disease.' },
      { title: 'LEEP', img: '/assets/services/LEEP.jpg', desc: 'Loop Electrosurgical Excision Procedure to remove abnormal or precancerous cells from the cervix.' },
      { title: 'CA 125, CEA, CA19-9 and other Blood Tests', img: '/assets/services/CA125-CEACA19-9test.jpg', desc: 'Tumor marker blood tests used to help detect and monitor certain types of cancers.' },
      { title: 'Breast USG', img: '/assets/services/Breast-USG.jpg', desc: 'Non-invasive imaging technique used to examine breast tissue for abnormalities.' },
      { title: 'TVS and USG', img: '/assets/services/TVS-USG.jpg', desc: 'Transvaginal Sonography (TVS) and Ultrasound (USG) imaging to visualize internal organs.' },
      { title: 'Cervical and Endometrial Biopsy', img: '/assets/services/Cervical-Endometrial-Biopsy.jpg', desc: 'Diagnostic procedures used to examine cervical and uterine lining tissues for disease.' },
    ],
  };

  const sec2 = {
    small: 'Obstetrics services',
    title: 'The Care of Women during Pregnancy and Childbirth',
    items: [
      { title: 'Prenatal, Antenatal and Postnatal Care and Counseling', img: '/assets/services/Prenatal-Antenatal-Postnatal-Care-Counseling.jpg', desc: 'Care and counseling focusing on the well-being of mother and baby during pregnancy, childbirth, and after delivery.' },
      { title: 'Safe Abortion Practices', img: '/assets/services/Safe-Abortion-Practices.jpg', desc: 'Medical procedures and guidelines designed to minimize risks and ensure health and well-being.' },
      { title: 'Family Planning and Counseling', img: '/assets/services/Family-Planning-Counseling.jpg', desc: 'Knowledge and resources for reproductive health and family size decisions.' },
      { title: 'High Risk Pregnancy', img: '/assets/services/High-Risk-Pregnancy.jpg', desc: 'Management of pregnancies with increased risks to mother or fetus.' },
      { title: 'Infertility Diagnosis and Treatment', img: '/assets/services/Infertility-Diagnosis-Treatment.jpg', desc: 'Diagnosis and treatment options for infertility.' },
      { title: 'Painless Delivery and Cesarean Delivery', img: '/assets/services/Painless-Delivery-Cesarean-Delivery.jpg', desc: 'Epidural anesthesia and Cesarean delivery options for safe childbirth.' },
      { title: 'Genetic Screening', img: '/assets/services/Genetic-Screening.jpg', desc: 'Identify risk of inherited genetic disorders or predispositions to diseases.' },
      { title: 'STD Diagnosis and Management', img: '/assets/services/STD-Diagnosis-Management.jpg', desc: 'Comprehensive approach to identifying and treating sexually transmitted infections.' },
    ],
  };

  const sec3 = {
    small: 'Obstetrics services',
    title: 'An obstetrician provides routine prenatal care to people who are pregnant. They also diagnose and treat complications during pregnancy.',
    items: [
      { title: 'Diagnostic Hysteroscopy', img: '/assets/services/Diagnostic-Hysteroscopy.jpg', desc: 'Minimally invasive procedure to examine the inside of the uterus.' },
      { title: 'MVA', img: '/assets/services/MVA.jpg', desc: 'Manual Vacuum Aspiration for early pregnancy management.' },
    ],
  };

  const sec4 = {
    small: 'Premium Care',
    title: 'Personalized healthcare with emotional support',
    items: [
      { 
        title: 'Personalized Care Plan', 
        img: '/assets/services/Infertility-Diagnosis-Treatment.jpg', 
        desc: 'Tailored healthcare plans designed specifically for your unique needs and health goals.'
      },
      { 
        title: '24/7 Doctor Support', 
        img: '/assets/services/Prenatal-Antenatal-Postnatal-Care-Counseling.jpg', 
        desc: 'Round-the-clock access to healthcare professionals for your peace of mind.'
      },
      { 
        title: 'Emotional Counseling', 
        img: '/assets/services/Family-Planning-Counseling.jpg', 
        desc: 'Professional support for emotional well-being during your healthcare journey.'
      },
      { 
        title: 'Wellness Programs', 
        img: '/assets/services/Genetic-Screening.jpg', 
        desc: 'Comprehensive programs focused on maintaining and improving overall health.'
      },
    ]
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div>
      {/* Hero Section with Animation */}
      <motion.section 
        className="relative h-64 md:h-72 flex items-end" 
        style={{
          backgroundImage: "url('/assets/home/slider/1.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-full bg-black/30 absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div 
          className="relative max-w-6xl mx-auto px-4 pb-12 text-white grid md:grid-cols-3 items-end w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="md:col-span-2">
            <p className="opacity-90 mb-2">We are here for your care.</p>
            <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          </div>
          <div className="flex md:justify-end mt-4 md:mt-0">
            <nav className="text-sm">
              <a href="/" className="hover:underline">Home</a> 
              <span className="mx-1">/</span> 
              <span>Services</span>
            </nav>
          </div>
        </motion.div>
      </motion.section>

      {/* Intro Section with Animation */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <motion.img 
              src="/assets/section/section-back-icon.png" 
              alt="section-back" 
              className="absolute -top-10 right-0 opacity-10 w-20 h-20" 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.h5 
              className="text-slate-500 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              health care facility
            </motion.h5>
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Dedicated Services
            </motion.h1>
            <motion.div 
              className="h-1 w-20 bg-pink-600 mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.p 
              className="text-slate-700 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              From safe abortion practices to family planning and high-risk pregnancy management, we prioritize your safety and comfort. Our clinic is equipped to provide painless delivery and Cesarean delivery options, as well as genetic screening and STD diagnosis and management.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Service Sections with Animations */}
      <Section {...sec1} />
      <Section {...sec2} customLayout isCustomGrid />
      <Section {...sec3} customLayout isCustomGrid />
      <Section {...sec4} />
      <FAQSection />
    </div>
  );
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of gynecological and obstetric services including cancer prevention, prenatal and postnatal care, family planning, infertility treatment, and more. Our services are designed to provide complete women's healthcare under one roof."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling our clinic directly, using our online booking system, or by visiting us in person. We recommend booking in advance to secure your preferred time slot, especially for routine check-ups and screenings."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Please contact our office with your insurance information to verify coverage before your appointment. Our staff will be happy to assist you with any insurance-related questions."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "For your first visit, please bring your insurance card, photo ID, list of current medications, and any relevant medical records or test results from previous providers. If you're coming for a specific concern, please have details about your symptoms and medical history ready."
    },
    {
      question: "How early should I arrive for my appointment?",
      answer: "We recommend arriving 15 minutes before your scheduled appointment time to complete any necessary paperwork and ensure a smooth check-in process. This helps us stay on schedule and provide the best possible care to all our patients."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              initial={false}
              animate={{ 
                borderColor: activeIndex === index ? '#DB2777' : '#E5E7EB',
                boxShadow: activeIndex === index ? '0 4px 6px -1px rgba(219, 39, 119, 0.1), 0 2px 4px -1px rgba(219, 39, 119, 0.06)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeIndex === index ? 'bg-pink-50' : 'bg-white hover:bg-gray-50'}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-medium text-slate-800">{faq.question}</span>
                {activeIndex === index ? 
                  <FiChevronUp className="w-5 h-5 text-pink-600" /> : 
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                }
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};