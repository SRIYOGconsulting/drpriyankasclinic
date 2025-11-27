import { useState } from 'react';

const files = [
  '1.jpg', '2.jpg', '3.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',
  '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
  'slider1.jpg', 'slider2.jpg', 'slider3.jpg', 'slider4.jpg',
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/" className="hover:text-pink-600">Home</a> / Photo Gallery
      </nav>
      
      <header className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Photo Gallery</h1>
        <p className="text-slate-600 max-w-2xl">Explore our clinic through these beautiful moments and see the care and expertise we provide to our patients.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main featured image - spans 2 columns on large screens */}
        <div className="lg:col-span-2">
          <div 
            className="relative group aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setOpenIndex(0)}
          >
            <img
              src={`/assets/gallery/${files[0]}`}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold">Our Clinic</h3>
                <p className="text-sm opacity-90">Modern facilities for your comfort</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of 4 smaller images - spans 1 column on large screens */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {files.slice(1, 5).map((file, idx) => (
            <div 
              key={file} 
              className="relative group aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => setOpenIndex(idx + 1)}
            >
              <img
                src={`/assets/gallery/${file}`}
                alt={`Gallery ${idx + 2}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Remaining images in a 3-column grid */}
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {files.slice(5).map((file, idx) => (
            <div 
              key={file} 
              className="relative group aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => setOpenIndex(idx + 5)}
            >
              <img
                src={`/assets/gallery/${file}`}
                alt={`Gallery ${idx + 6}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {openIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-4xl w-full">
            <img
              src={`/assets/gallery/${files[openIndex]}`}
              alt={`Gallery ${openIndex + 1}`}
              className="max-h-[90vh] w-auto mx-auto"
            />
            <div className="text-white text-center mt-4">
              Image {openIndex + 1} of {files.length}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((openIndex - 1 + files.length) % files.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((openIndex + 1) % files.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}