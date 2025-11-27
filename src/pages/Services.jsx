const ServiceItem = ({ service: s }) => (
  <div className="w-full h-full">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="service-thumb">
        <img 
          src={s.img} 
          alt={s.title} 
          className="w-full h-48 sm:h-56 md:h-48 lg:h-52 object-cover" 
          loading="lazy"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{s.title}</h3>
        <p className="text-sm text-slate-600 flex-1">{s.desc}</p>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <a 
            href="https://www.facebook.com/Doctor.Priyankas.Clinic" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full text-center px-4 py-2.5 rounded-full border-2 border-pink-600 text-pink-600 hover:bg-pink-50 text-sm font-medium transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Section = ({ small, title, items, isCustomGrid = false, customLayout = false }) => (
  <section className="py-12 sm:py-16 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-end mb-8 md:mb-10">
        <div className="md:col-span-2 relative">
          <img 
            src="/assets/section/section-back-icon.png" 
            alt="" 
            className="hidden md:block absolute -top-10 opacity-10 w-16 h-16 md:w-20 md:h-20 left-0" 
            aria-hidden="true"
          />
          {small && <h5 className="text-pink-600 text-sm sm:text-base font-medium mb-2">{small}</h5>}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">{title}</h2>
          <div className="mt-3">
            <img 
              src="/assets/shape/section-title-line.png" 
              alt="" 
              className="h-1.5 sm:h-2 w-auto" 
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="hidden md:flex justify-end pb-2">
          <a 
            href="https://www.facebook.com/Doctor.Priyankas.Clinic" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 sm:py-3 rounded-full transition-colors"
          >
            <span className="mr-2 text-lg">+</span>Book an Appointment
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-10">
        {isCustomGrid ? (
          <div className="space-y-8">
            {customLayout ? (
              // Custom layout for specific sections (3-1)
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((s, index) => (
                  <div 
                    key={s.title} 
                    className={`${index >= 3 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                  >
                    <ServiceItem service={s} />
                  </div>
                ))}
              </div>
            ) : (
              // Standard responsive grid
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((s) => (
                  <ServiceItem key={s.title} service={s} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s) => (
              <ServiceItem key={s.title} service={s} />
            ))}
          </div>
        )}
        
        {/* Mobile book appointment button */}
        <div className="mt-8 md:hidden text-center">
          <a 
            href="https://www.facebook.com/Doctor.Priyankas.Clinic" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-colors"
          >
            <span className="mr-2 text-lg">+</span>Book an Appointment
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default function Services() {
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
  }

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
  }

  const sec3 = {
    small: 'Obstetrics services',
    title: 'An obstetrician provides routine prenatal care to people who are pregnant. They also diagnose and treat complications during pregnancy.',
    items: [
      { title: 'Diagnostic Hysteroscopy', img: '/assets/services/Diagnostic-Hysteroscopy.jpg', desc: 'Minimally invasive procedure to examine the inside of the uterus.' },
      { title: 'MVA', img: '/assets/services/MVA.jpg', desc: 'Manual Vacuum Aspiration for early pregnancy management.' },
    ],
  }

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
  }

  return (
    <div>
      {/* Breadcrumb hero */}
      <section className="relative h-64 md:h-72 flex items-end" style={{backgroundImage: "url('/assets/home/slider/1.jpg')", backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="w-full bg-black/30 absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 pb-12 text-white grid md:grid-cols-3 items-end w-full">
          <div className="md:col-span-2">
            <p className="opacity-90 mb-2">We are here for your care.</p>
            <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          </div>
          <div className="flex md:justify-end mt-4 md:mt-0">
            <nav className="text-sm"><a href="/" className="hover:underline">Home</a> <span className="mx-1">/</span> <span>Services</span></nav>
          </div>
        </div>
      </section>

      {/* Intro blurb */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-end">
          <div className="relative order-2 md:order-1">
            <img src="/assets/section/section-back-icon.png" alt="section-back" className="absolute -top-10 right-0 opacity-10 w-20 h-20" />
            <h5 className="text-slate-500 mb-2">health care facility</h5>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Dedicated Services</h1>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-slate-700">From safe abortion practices to family planning and high-risk pregnancy management, we prioritize your safety and comfort. Our clinic is equipped to provide painless delivery and Cesarean delivery options, as well as genetic screening and STD diagnosis and management.</p>
          </div>
        </div>
      </section>

      {/* Sections matching source */}
      <Section {...sec1} />
      <Section {...sec2} isCustomGrid={true} />
      <Section {...sec3} />
      <Section {...sec4} isCustomGrid={true} customLayout={true} />
    </div>
  )
}
