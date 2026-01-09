import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';

// Service data with detailed information
const serviceDetails = {
  'hpv-vaccination': {
    title: 'HPV Vaccination',
    image: '/images/services/hpv-vaccination.jpg',
    description: [
      'The HPV (Human Papillomavirus) vaccination is a vital preventive measure against certain types of HPV that can cause cervical, anal, throat, and other cancers. The vaccine is most effective when administered before exposure to the virus, typically recommended for preteens and young adults.',
      'It provides long-lasting protection and is a key component of cancer prevention strategies worldwide. The vaccine is safe, effective, and has been shown to significantly reduce the incidence of HPV-related cancers and genital warts.'
    ],
    keyPoints: [
      'Recommended for preteens (ages 11-12) but can be given as early as age 9',
      'Also recommended for everyone through age 26 if not vaccinated already',
      'Some adults aged 27-45 may benefit after consulting their doctor',
      'Given as a series of shots over 6-12 months',
      'Safe and effective with minimal side effects'
    ],
    relatedServices: ['hpv-dna-test', 'pap-smear']
  },
  'hpv-dna-test': {
    title: 'HPV DNA Test',
    image: '/images/services/hpv-dna-test.jpg',
    description: [
      'The HPV DNA test is a crucial diagnostic tool that detects high-risk HPV types that may cause cervical cancer. This test is more sensitive than a Pap smear in detecting precancerous changes.',
      'It is recommended for women over 30 as part of routine cervical cancer screening, or as a follow-up to an abnormal Pap test result. The test is quick, painless, and can help identify women at risk of developing cervical cancer before any abnormal cells are visible.'
    ],
    keyPoints: [
      'Recommended for women aged 30-65 as part of routine screening',
      'Can be done alone or with a Pap test (co-testing)',
      'Helps determine if further testing or treatment is needed',
      'More sensitive than Pap test alone in detecting cervical cancer risk',
      'Simple procedure similar to a Pap test'
    ],
    relatedServices: ['hpv-vaccination', 'colposcopy']
  },
  'pap-smear': {
    title: 'PAP Smear',
    image: '/images/services/pap-smear.jpg',
    description: [
      'A Pap smear is a screening procedure for cervical cancer that tests for the presence of precancerous or cancerous cells on the cervix. It is one of the most reliable and effective cancer screening tests available.',
      'Regular Pap tests can detect early changes in cervical cells, allowing for treatment before cancer develops. The procedure is quick, simple, and can be done during a routine pelvic exam. Early detection through regular screening is key to preventing cervical cancer.'
    ],
    keyPoints: [
      'Recommended every 3 years for women aged 21-65',
      'Can be done every 5 years when combined with HPV testing',
      'Helps detect cervical cancer at an early, treatable stage',
      'Quick procedure with minimal discomfort',
      'Most women need to be screened until age 65'
    ],
    relatedServices: ['hpv-vaccination', 'hpv-dna-test']
  },
  'colposcopy': {
    title: 'Colposcopy',
    image: '/images/services/colposcopy.jpg',
    description: [
      'A colposcopy is a diagnostic procedure that provides a magnified view of the cervix, vagina, and vulva to detect abnormal cells. It is typically performed when a Pap test shows abnormal results.',
      'During the procedure, the doctor may take a small tissue sample (biopsy) for further testing if needed. The procedure is usually done in the doctor\'s office and takes about 10-20 minutes. It allows for early detection and treatment of precancerous conditions.'
    ],
    keyPoints: [
      'Performed after an abnormal Pap test or HPV test',
      'Takes about 10-20 minutes in the doctor\'s office',
      'May include a biopsy if abnormal areas are found',
      'Mild discomfort but generally not painful',
      'Results typically available within 1-2 weeks'
    ],
    relatedServices: ['pap-smear', 'leep']
  },
  'leep': {
    title: 'LEEP Procedure',
    image: '/images/services/leep.jpg',
    description: [
      'A Loop Electrosurgical Excision Procedure (LEEP) uses a thin wire loop heated by electric current to remove abnormal cervical tissue. This outpatient procedure is both diagnostic and therapeutic.',
      'LEEP is typically performed after abnormal Pap test results and can effectively remove precancerous cells, helping to prevent cervical cancer. The procedure is done under local anesthesia and takes about 10-20 minutes, with minimal recovery time.'
    ],
    keyPoints: [
      'Performed under local anesthesia',
      'Takes about 10-20 minutes',
      'Minimal recovery time needed',
      'Effective at removing precancerous cells',
      'Follow-up appointments are important to monitor healing'
    ],
    relatedServices: ['colposcopy', 'hysteroscopy']
  },
  'hysteroscopy': {
    title: 'Hysteroscopy',
    image: '/images/services/diagnostic-hysteroscopy.jpg',
    description: [
      'A hysteroscopy is a minimally invasive procedure that allows direct visualization of the uterine cavity using a hysteroscope. It is used to diagnose and treat conditions like abnormal bleeding, polyps, fibroids, and uterine septum with minimal discomfort and quick recovery.',
      'The procedure is typically performed in an office setting with minimal anesthesia. It provides valuable diagnostic information and can often be used to treat certain conditions during the same procedure, reducing the need for additional surgeries.'
    ],
    keyPoints: [
      'Minimally invasive procedure',
      'Can be both diagnostic and therapeutic',
      'Performed in-office with minimal anesthesia',
      'Quick recovery time',
      'Can treat conditions like polyps and fibroids'
    ],
    relatedServices: ['mva', 'biopsy-procedures']
  },
  'mva': {
    title: 'Manual Vacuum Aspiration (MVA)',
    image: '/images/services/mva.jpg',
    description: [
      'Manual Vacuum Aspiration (MVA) is a safe and effective procedure for early pregnancy termination, management of incomplete miscarriage, or diagnostic sampling of the uterine lining.',
      'Performed under local anesthesia with minimal recovery time, MVA has a lower risk of complications compared to traditional methods. The procedure typically takes about 5-10 minutes and is associated with less pain and bleeding than other methods.'
    ],
    keyPoints: [
      'Safe and effective procedure',
      'Minimal recovery time',
      'Lower risk of complications',
      'Can be used for various gynecological conditions',
      'Performed in-office with local anesthesia'
    ],
    relatedServices: ['hysteroscopy', 'safe-abortion']
  },
  'biopsy-procedures': {
    title: 'Biopsy Procedures',
    image: '/images/services/cervical-endometrial-biopsy.jpg',
    description: [
      'Biopsy procedures involve the removal of tissue samples for diagnostic examination. We offer various biopsy techniques including core needle, fine needle aspiration, and excisional biopsies to ensure accurate diagnosis.',
      'Our team performs these procedures with precision and care, using imaging guidance when needed to target specific areas. The samples are analyzed by experienced pathologists to provide accurate diagnoses for appropriate treatment planning.'
    ],
    keyPoints: [
      'Various biopsy techniques available',
      'Performed with precision and care',
      'Imaging guidance used when necessary',
      'Minimal discomfort and quick recovery',
      'Accurate diagnosis by experienced pathologists'
    ],
    relatedServices: ['colposcopy', 'hysteroscopy']
  },
  'pregnancy-care': {
    title: 'Pregnancy Care',
    image: '/images/services/high-risk-pregnancy.jpg',
    description: [
      'Comprehensive prenatal care services to monitor the health of both mother and baby throughout pregnancy. Includes regular check-ups, ultrasounds, and personalized health guidance.',
      'Our approach focuses on preventive care, early detection of potential complications, and education to support a healthy pregnancy journey. We provide continuous support from conception through delivery and postpartum care.'
    ],
    keyPoints: [
      'Regular prenatal check-ups',
      'Ultrasound imaging',
      'Nutrition and lifestyle counseling',
      'High-risk pregnancy management',
      'Postpartum care and support'
    ],
    relatedServices: ['prenatal-care', 'genetic-testing']
  },
  'prenatal-care': {
    title: 'Prenatal, Antenatal and Postnatal Care',
    image: '/images/services/prenatal-antenatal-postnatal-care-counseling.jpg',
    description: [
      'Comprehensive care throughout pregnancy, delivery, and postpartum period. Includes regular check-ups, ultrasounds, nutritional guidance, and emotional support to ensure the health and well-being of both mother and baby.',
      'Our team provides personalized care plans tailored to each stage of pregnancy and beyond, addressing both physical and emotional needs. We focus on education and support to help mothers have a healthy pregnancy and confident transition into motherhood.'
    ],
    keyPoints: [
      'Complete pregnancy care from conception to postpartum',
      'Regular monitoring and check-ups',
      'Nutritional and lifestyle guidance',
      'Emotional and psychological support',
      'Postpartum recovery care'
    ],
    relatedServices: ['pregnancy-care', 'delivery-options']
  },
  'safe-abortion': {
    title: 'Safe Abortion Services',
    image: '/images/services/safe-abortion-practices.jpg',
    description: [
      'Safe and confidential medical services following all legal and ethical guidelines. Includes counseling, medical abortion options, and post-procedure care to ensure patient safety and well-being.',
      'Our clinic provides compassionate, non-judgmental care with a focus on patient safety, privacy, and emotional support. We offer comprehensive information about all available options to help women make informed decisions about their reproductive health.'
    ],
    keyPoints: [
      'Safe and confidential services',
      'Professional medical care',
      'Comprehensive counseling',
      'Follow-up care provided',
      'Emotional support available'
    ],
    relatedServices: ['family-planning', 'std-management']
  },
  'family-planning': {
    title: 'Family Planning and Counseling',
    image: '/images/services/family-planning-counseling.jpg',
    description: [
      'Personalized counseling on various contraceptive methods, fertility awareness, and reproductive health. We help individuals and couples make informed decisions about family planning and reproductive health.',
      'Our approach includes education about all available options, from natural family planning to long-acting reversible contraceptives. We provide unbiased information to help you choose the method that best fits your lifestyle, health needs, and future family planning goals.'
    ],
    keyPoints: [
      'Comprehensive contraceptive counseling',
      'All methods of birth control available',
      'Preconception counseling',
      'Fertility awareness education',
      'Personalized family planning'
    ],
    relatedServices: ['infertility-care', 'pregnancy-care']
  },
  'infertility-care': {
    title: 'Infertility Diagnosis and Treatment',
    image: '/images/services/infertility-diagnosis-treatment.jpg',
    description: [
      'Specialized evaluation and treatment for couples facing challenges with conception. Our comprehensive approach includes diagnostic testing and personalized treatment plans.',
      'We offer a range of fertility treatments from basic interventions to advanced reproductive technologies, supported by a team of experienced fertility specialists and embryologists.'
    ],
    keyPoints: [
      'Comprehensive fertility evaluation',
      'Ovulation induction',
      'Fertility medications',
      'Advanced reproductive technologies',
      'Supportive counseling'
    ],
    relatedServices: ['family-planning', 'genetic-testing']
  },
  'delivery-options': {
    title: 'Painless Delivery and Cesarean Delivery',
    image: '/images/services/painless-delivery-cesarean-delivery.jpg',
    description: [
      'Pain management options during labor including epidural anesthesia. We provide information and support to help expectant mothers make informed choices about their birth experience.',
      'Our team is experienced in both vaginal and cesarean deliveries, with a focus on patient comfort and safety. We offer various pain management options and work with you to create a birth plan that aligns with your preferences while ensuring the health of both mother and baby.'
    ],
    keyPoints: [
      'Epidural and pain management options',
      'Vaginal and cesarean delivery options',
      'Personalized birth plans',
      'Experienced delivery team',
      'Immediate newborn care'
    ],
    relatedServices: ['pregnancy-care', 'postnatal-care']
  },
  'genetic-testing': {
    title: 'Genetic Testing and Screening',
    image: '/images/services/genetic-screening.jpg',
    description: [
      'Advanced genetic screening and diagnostic testing to assess risk for inherited conditions and chromosomal abnormalities. Includes carrier screening and prenatal genetic testing options.',
      'Our genetic counseling services help interpret test results and provide guidance for family planning decisions and pregnancy management.'
    ],
    keyPoints: [
      'Carrier screening',
      'Prenatal genetic testing',
      'Chromosomal abnormality screening',
      'Preimplantation genetic diagnosis',
      'Comprehensive genetic counseling'
    ],
    relatedServices: ['pregnancy-care', 'infertility-care']
  },
  'std-management': {
    title: 'STD Diagnosis and Management',
    image: '/images/services/std-diagnosis-management.jpg',
    description: [
      'Confidential testing, diagnosis, and treatment of sexually transmitted infections. We provide comprehensive care including prevention counseling and partner notification services.',
      'Our approach focuses on education, early detection, and effective treatment to prevent complications and reduce transmission rates in the community.'
    ],
    keyPoints: [
      'Confidential testing',
      'Comprehensive STI screening',
      'Effective treatment options',
      'Partner notification services',
      'Prevention counseling'
    ],
    relatedServices: ['family-planning', 'hiv-testing']
  },
  'hiv-testing': {
    title: 'HIV Testing and Counseling',
    image: '/images/services/hiv-testing.jpg',
    description: [
      'Confidential HIV testing and counseling services. We provide pre-test and post-test counseling, rapid testing, and connections to care if needed.',
      'Our approach is non-judgmental and supportive, focusing on education, prevention, and early detection to improve health outcomes.'
    ],
    keyPoints: [
      'Confidential testing',
      'Rapid results available',
      'Prevention counseling',
      'Linkage to care',
      'Support services'
    ],
    relatedServices: ['std-management', 'family-planning']
  },
  'cancer-blood-tests': {
    title: 'Cancer Blood Tests',
    image: '/images/services/ca125-ceaca19-9test.jpg',
    description: [
      'Comprehensive blood tests that measure specific tumor markers to detect and monitor various types of cancers in women. These tests are crucial for early detection, diagnosis, and monitoring of treatment effectiveness.',
      'Our advanced testing includes markers such as CA-125 for ovarian cancer, CA 19-9 for pancreatic and gastrointestinal cancers, and CEA for colorectal cancer. These tests are often used in conjunction with other diagnostic methods to provide a complete picture of your health.'
    ],
    keyPoints: [
      'Measures specific tumor markers for various cancers',
      'Helps in early detection and diagnosis',
      'Monitors treatment effectiveness',
      'Guides treatment decisions',
      'Complements imaging and biopsy results',
      'Quick and minimally invasive'
    ],
    relatedServices: ['hpv-dna-test', 'biopsy-procedures', 'breast-usg']
  },
  'tvs-and-usg': {
    title: 'Transvaginal and Pelvic Ultrasound',
    image: '/images/services/tvs-usg.jpg',
    description: [
      'Advanced imaging techniques that provide clear, detailed visualization of the female reproductive organs. Transvaginal ultrasound (TVS) and pelvic ultrasound (USG) are non-invasive procedures that use high-frequency sound waves to create images of the uterus, ovaries, fallopian tubes, and surrounding structures.',
      'These imaging techniques are essential for diagnosing conditions such as ovarian cysts, uterine fibroids, ectopic pregnancy, and other gynecological concerns. They are also crucial for monitoring fetal development during pregnancy and evaluating infertility issues.'
    ],
    keyPoints: [
      'Detailed imaging of reproductive organs',
      'No radiation exposure',
      'Helps diagnose various gynecological conditions',
      'Essential for pregnancy monitoring',
      'Guides fertility treatments',
      'Quick procedure with immediate results'
    ],
    relatedServices: ['hysteroscopy', 'pregnancy-care', 'infertility-care']
  },
  'breast-usg': {
    title: 'Breast Ultrasound',
    image: '/images/services/breast-usg.jpg',
    description: [
      'A non-invasive imaging test that uses sound waves to examine breast tissue, helping to distinguish between solid masses and fluid-filled cysts. Breast ultrasound is particularly valuable for women with dense breast tissue where mammograms may be less effective.',
      'This procedure is often used as a follow-up to abnormal findings on a mammogram or physical exam. It helps in characterizing breast lumps, guiding biopsies, and monitoring known benign breast conditions. Unlike mammography, it does not use radiation, making it safe for women of all ages, including pregnant women.'
    ],
    keyPoints: [
      'Ideal for dense breast tissue',
      'No radiation exposure',
      'Helps evaluate breast abnormalities',
      'Guides needle biopsies',
      'Safe during pregnancy',
      'Painless and non-invasive'
    ],
    relatedServices: ['cancer-blood-tests', 'biopsy-procedures', 'mammography']
  },
  'high-risk-pregnancy': {
    title: 'High-Risk Pregnancy Care',
    image: '/images/services/high-risk-pregnancy.jpg',
    description: [
      'Specialized prenatal care for women with pregnancies that may involve increased health risks for the mother, baby, or both. Our comprehensive program is designed to monitor and manage conditions that could affect pregnancy outcomes.',
      'We provide advanced monitoring, specialized testing, and personalized care plans for conditions such as gestational diabetes, preeclampsia, multiple pregnancies, advanced maternal age, and previous pregnancy complications. Our team works closely with maternal-fetal medicine specialists to ensure the best possible outcomes for both mother and baby.'
    ],
    keyPoints: [
      'Specialized care for complex pregnancies',
      'Advanced fetal monitoring',
      'Maternal-fetal medicine specialists',
      'Personalized care plans',
      'Frequent monitoring and testing',
      'Coordination with pediatric specialists'
    ],
    relatedServices: ['pregnancy-care', 'genetic-testing', 'delivery-options']
  },
  '24-7-support': {
    title: '24/7 Medical Support',
    image: '/images/services/family-planning-counseling.jpg',
    description: [
      'Round-the-clock access to our team of healthcare professionals, ensuring you receive timely medical attention and support whenever you need it. Our 24/7 support service provides peace of mind, knowing that expert care is always just a call away.',
      'Whether you have urgent medical concerns, need clarification about your treatment, or require immediate assistance, our dedicated team is available 24 hours a day, 7 days a week. We prioritize your health and well-being by providing continuous access to medical guidance and support.'
    ],
    keyPoints: [
      '24/7 access to healthcare providers',
      'Emergency consultation services',
      'Immediate medical guidance',
      'Continuity of care',
      'Rapid response to urgent concerns',
      'Coordination with emergency services when needed'
    ],
    relatedServices: ['care-plans', 'pregnancy-care', 'emergency-services']
  },
  'care-plans': {
    title: 'Personalized Care Plans',
    image: '/images/services/prenatal-antenatal-postnatal-care-counseling.jpg',
    description: [
      'Tailored healthcare strategies designed specifically for your unique health needs, conditions, and goals. Our comprehensive care plans are developed through a collaborative process involving you and our team of healthcare professionals.',
      'We take a holistic approach to your health, considering all aspects of your well-being to create a customized plan that addresses your specific conditions, lifestyle, and personal health objectives. Your care plan will evolve with your needs, ensuring you receive the most appropriate and effective care throughout your healthcare journey.'
    ],
    keyPoints: [
      'Personalized treatment strategies',
      'Multidisciplinary approach to care',
      'Long-term health management plans',
      'Regular progress tracking and adjustments',
      'Coordination between healthcare providers',
      'Education and self-management support'
    ],
    relatedServices: ['24-7-support', 'family-planning', 'prenatal-care']
  },
  'counseling': {
    title: 'Counseling Services',
    image: '/images/services/family-planning-counseling.jpg',
    description: [
      'Professional counseling services to support mental and emotional well-being. We offer individual, couples, and family counseling in a supportive environment.',
      'Our licensed therapists provide evidence-based therapies to help manage stress, anxiety, depression, and other mental health concerns.'
    ],
    keyPoints: [
      'Individual therapy',
      'Couples counseling',
      'Family therapy',
      'Stress and anxiety management',
      'Supportive environment'
    ],
    relatedServices: ['wellness', 'postpartum-care']
  },
  'postpartum-care': {
    title: 'Postpartum Care',
    image: '/images/services/prenatal-antenatal-postnatal-care-counseling.jpg',
    description: [
      'Comprehensive care for new mothers after childbirth, focusing on physical recovery, emotional well-being, and newborn care education.',
      'Our postpartum care includes follow-up visits, breastfeeding support, mental health screening, and guidance on newborn care and recovery.'
    ],
    keyPoints: [
      'Post-delivery check-ups',
      'Breastfeeding support',
      'Postpartum depression screening',
      'Birth control counseling',
      'Newborn care education'
    ],
    relatedServices: ['pregnancy-care', 'counseling']
  },
  'wellness': {
    title: 'Wellness Services',
    image: '/images/services/genetic-screening.jpg',
    description: [
      'Holistic wellness programs to promote overall health and well-being. Our services include nutrition counseling, stress management, and lifestyle coaching.',
      'We believe in a proactive approach to health, focusing on prevention and optimal wellness through personalized plans tailored to your unique needs and goals.'
    ],
    keyPoints: [
      'Nutrition counseling',
      'Stress management',
      'Lifestyle coaching',
      'Preventive health',
      'Holistic approach',
      'Personalized plans'
    ],
    relatedServices: ['counseling', 'family-planning']
  },
  'preventive-care': {
    title: 'Preventive Health Care',
    image: '/images/services/genetic-screening.jpg',
    description: [
      'Comprehensive preventive health services including routine check-ups, screenings, and immunizations to maintain optimal health and prevent disease.',
      'Our preventive care focuses on early detection and risk reduction through regular health assessments, cancer screenings, and lifestyle counseling.'
    ],
    keyPoints: [
      'Annual well-woman exams',
      'Cancer screenings',
      'Vaccinations',
      'Health risk assessments',
      'Lifestyle counseling'
    ],
    relatedServices: ['wellness', 'family-planning']
  }
}; // Closing brace for serviceDetails object

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Function to get related services
  const getRelatedServices = () => {
    // Get all service keys except the current one
    const allServiceIds = Object.keys(serviceDetails).filter(id => id !== serviceId);
    
    // Get defined related services
    let relatedServices = [];
    if (service.relatedServices && service.relatedServices.length > 0) {
      relatedServices = service.relatedServices
        .map(id => serviceDetails[id])
        .filter(service => service); // Filter out any undefined services
    }
    
    // If we have fewer than 3 related services, add more from other services
    if (relatedServices.length < 3) {
      // Find services that are not already in relatedServices and not the current service
      const additionalServices = allServiceIds
        .filter(id => !relatedServices.some(s => s.title === serviceDetails[id].title))
        .slice(0, 3 - relatedServices.length)
        .map(id => serviceDetails[id]);
      
      relatedServices = [...relatedServices, ...additionalServices];
    }
    
    // Ensure we don't show more than 3 services
    relatedServices = relatedServices.slice(0, 3);
    
    if (relatedServices.length === 0) return null;
    
    return (
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((relatedService, index) => (
            <Link 
              key={index} 
              to={`/services/${Object.keys(serviceDetails).find(key => serviceDetails[key].title === relatedService.title)}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={relatedService.image} 
                  alt={relatedService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/services/placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {relatedService.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {relatedService.description[0]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageBanner 
        title={service.title} 
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: service.title, href: `#` }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 lg:w-2/5">
              <div className="h-full">
                <img 
                  className="w-full h-full object-cover" 
                  src={service.image} 
                  alt={service.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/services/placeholder.jpg';
                  }}
                />
              </div>
            </div>
            
            <div className="p-8 md:w-1/2 lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Our Services
                  </span>
                </div>
                
                <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  {service.title}
                </h1>
                
                <div className="mt-6 space-y-6 text-gray-600">
                  {service.description.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900">Key Benefits:</h3>
                  <ul className="mt-4 space-y-3">
                    {service.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://d.sriyog.com/priyanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book an appointment"
                    className="flex items-center px-4 py-2.5 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 active:scale-95"
                  >
                    <svg 
                      className="w-5 h-5 mr-2 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="whitespace-nowrap">Book an Appointment</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <div className="mt-12">
            {getRelatedServices()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
