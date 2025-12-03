import { useState, useEffect } from 'react';

// Sample images with different aspect ratios for masonry effect
const galleryItems = [
  { id: 1, src: '1.jpg', title: 'Clinic Interior', aspect: 'aspect-[4/3]' },
  { id: 2, src: '2.jpg', title: 'Medical Equipment', aspect: 'aspect-square' },
  { id: 3, src: '3.jpg', title: 'Waiting Area', aspect: 'aspect-[3/4]' },
  { id: 4, src: '5.jpg', title: 'Consultation Room', aspect: 'aspect-square' },
  { id: 5, src: '6.jpg', title: 'Patient Care', aspect: 'aspect-[4/3]' },
  { id: 6, src: '7.jpg', title: 'Modern Facilities', aspect: 'aspect-[3/4]' },
  { id: 7, src: '8.jpg', title: 'Diagnostic Center', aspect: 'aspect-square' },
  { id: 8, src: '9.jpg', title: 'Expert Staff', aspect: 'aspect-[4/3]' },
  { id: 9, src: '10.jpg', title: 'Treatment Room', aspect: 'aspect-square' },
  { id: 10, src: '11.jpg', title: 'Reception Area', aspect: 'aspect-[3/4]' },
  { id: 11, src: '12.jpg', title: 'Examination', aspect: 'aspect-[4/3]' },
  { id: 12, src: '13.jpg', title: 'Medical Team', aspect: 'aspect-square' },
  { id: 13, src: '14.jpg', title: 'Therapy Room', aspect: 'aspect-[3/4]' },
  { id: 14, src: '15.jpg', title: 'Patient Room', aspect: 'aspect-[4/3]' },
  { id: 15, src: 'slider1.jpg', title: 'Facility Tour', aspect: 'aspect-square' },
  { id: 16, src: 'slider2.jpg', title: 'Medical Staff', aspect: 'aspect-[3/4]' },
  { id: 17, src: 'slider3.jpg', title: 'Equipment', aspect: 'aspect-[4/3]' },
  { id: 18, src: 'slider4.jpg', title: 'Clinic Overview', aspect: 'aspect-square' },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group images into chunks of 5 for the masonry layout
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const imageChunks = chunkArray(galleryItems, isMobile ? 2 : 5);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <nav className="mb-6">
          <a href="/" className="text-pink-600 hover:text-pink-800 text-sm">
            Home
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Gallery</span>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Gallery</h1>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and compassionate care through our photo gallery
          </p>
        </header>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {imageChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="space-y-6">
              {chunk.map((item, itemIndex) => {
                const index = chunkIndex * (isMobile ? 2 : 5) + itemIndex;
                return (
                  <div 
                    key={item.id}
                    className={`relative group overflow-hidden rounded-lg shadow-md cursor-pointer ${item.aspect}`}
                    onClick={() => setOpenIndex(index)}
                  >
                    <img
                      src={`/assets/gallery/${item.src}`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {openIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            className="absolute top-6 right-6 text-white hover:text-pink-400 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img
              src={`/assets/gallery/${galleryItems[openIndex].src}`}
              alt={galleryItems[openIndex].title}
              className="max-h-[85vh] max-w-full object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-80">
              {galleryItems[openIndex].title} • {openIndex + 1} of {galleryItems.length}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-pink-600 text-white p-3 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((prev) => (prev + 1) % galleryItems.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-pink-600 text-white p-3 rounded-full transition-colors z-10"
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