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
      <div className="relative h-[360px] md:h-[520px] overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt="slide"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-xl text-white">
              {current.headingSmall && (
                <h5 className="text-sm md:text-base mb-2">{current.headingSmall}</h5>
              )}
              <h2 className="text-2xl md:text-5xl font-bold leading-tight">{current.heading}</h2>
              {current.text && (
                <p className="mt-3 md:mt-4 text-sm md:text-base opacity-90">{current.text}</p>
              )}
              <div className="mt-5 flex items-center gap-3">
                <a href="/contact" className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded">
                  <span className="mr-1 text-lg">+</span> Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2 w-8 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`} aria-label={`Go to slide ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
