import { useEffect, useState } from 'react'
const files = [
  '1.jpg','2.jpg','3.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg',
  '10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
  'slider1.jpg','slider2.jpg','slider3.jpg','slider4.jpg',
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    function onKey(e) {
      if (openIndex === null) return
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? null : (i + 1) % files.length))
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? null : (i - 1 + files.length) % files.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex])
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-600 mb-6">Home / Photo Gallery</nav>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Photo Gallery</h1>
      <p className="text-slate-600 mb-8">Explore our clinic through these beautiful moments</p>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {files.map((f, idx) => (
            <div key={f} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <button
                type="button"
                onClick={() => setOpenIndex(idx)}
                className="block w-full h-full"
              >
                <img 
                  src={`/assets/gallery/${f}`} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium bg-pink-600 px-4 py-2 rounded-full">View</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e)=>e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close"
              className="absolute -top-10 right-0 text-white/80 hover:text-white"
              onClick={() => setOpenIndex(null)}
            >
              ✕
            </button>
            <img
              src={`/assets/gallery/${files[openIndex]}`}
              alt={files[openIndex]}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20"
                onClick={() => setOpenIndex((i)=> (i - 1 + files.length) % files.length)}
              >
                ← Prev
              </button>
              <span className="text-white/80 text-sm">{openIndex + 1} / {files.length}</span>
              <button
                type="button"
                className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20"
                onClick={() => setOpenIndex((i)=> (i + 1) % files.length)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
