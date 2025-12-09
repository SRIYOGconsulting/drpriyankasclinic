import { useEffect, useMemo, useState } from 'react'

const slides = [
  {
    img: '/assets/home/slider/1.jpg',
    headingSmall: 'We are here for your care.',
    heading: 'Specialized Gynecology',
    text: 'We are dedicated to providing personalized care to each of our patients with comfort and confidentiality.',
  },
  {
    img: '/assets/home/slider/2.jpg',
    headingSmall: 'Welcome to Dr. Priyanka’s Clinic',
    heading: 'Your Health - Our Priority',
    text: 'Established on April 25, 2023, our clinic is committed to providing comprehensive healthcare services tailored specifically for women.',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const current = useMemo(() => slides[index % slides.length], [index])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full">
      <div className="relative h-[500px] md:h-[90vh] max-h-[800px] overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt="slide"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
    
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="max-w-6xl w-full mx-auto px-4 py-12 md:py-0">
            <div className="max-w-2xl text-white">
              {current.headingSmall && (
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  <span className="text-sm font-medium">{current.headingSmall}</span>
                </div>
              )}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {current.heading}
              </h2>
              {current.text && (
                <p className="mt-4 md:mt-6 text-base md:text-lg opacity-90 max-w-xl">
                  {current.text}
                </p>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book an Appointment
                </a>
                <a 
                  href="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 rounded-full text-base font-medium transition-colors duration-200"
                >
                  Our Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
       
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)} 
              className={`h-2 w-8 rounded-full transition-all duration-300 ${i === index ? 'bg-pink-500 w-10' : 'bg-white/50'}`} 
              aria-label={`Go to slide ${i+1}`} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
