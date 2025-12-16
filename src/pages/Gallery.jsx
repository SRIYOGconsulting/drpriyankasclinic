import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';

// Gallery images with aspect ratios
const galleryItems = [
  { id: 1, src: '1.jpg', aspect: 'aspect-[4/3]' },
  { id: 2, src: '2.jpg', aspect: 'aspect-square' },
  { id: 3, src: '3.jpg', aspect: 'aspect-[3/4]' },
  { id: 4, src: '5.jpg', aspect: 'aspect-square' },
  { id: 5, src: '6.jpg', aspect: 'aspect-[4/3]' },
  { id: 6, src: '7.jpg', aspect: 'aspect-[3/4]' },
  { id: 7, src: '8.jpg', aspect: 'aspect-square' },
  { id: 8, src: '9.jpg', aspect: 'aspect-[4/3]' },
  { id: 9, src: '10.jpg', aspect: 'aspect-square' },
  { id: 10, src: '11.jpg', aspect: 'aspect-[3/4]' },
  { id: 11, src: '12.jpg', aspect: 'aspect-[4/3]' },
  { id: 12, src: '13.jpg', aspect: 'aspect-square' },
  { id: 13, src: '14.jpg', aspect: 'aspect-[3/4]' },
  { id: 14, src: '15.jpg', aspect: 'aspect-[4/3]' },
  { id: 15, src: 'slider1.jpg', aspect: 'aspect-square' },
  { id: 16, src: 'slider2.jpg', aspect: 'aspect-[3/4]' },
  { id: 17, src: 'slider3.jpg', aspect: 'aspect-[4/3]' },
  { id: 18, src: 'slider4.jpg', aspect: 'aspect-square' },
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

  // No need for chunking with columns layout

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageBanner 
        title="Our Gallery"
        description="Explore our state-of-the-art facilities and compassionate care through our photo gallery"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery' }
        ]}
        bgImage="/assets/home/slider/1.jpg"
      />
      
      <div className="w-[80%] max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Masonry Gallery with Columns */}
        <div className="px-4 sm:px-0">
          <div className="space-y-6 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className={`relative group overflow-hidden rounded-lg shadow-md cursor-pointer mb-6 break-inside-avoid ${item.aspect}`}
                onClick={() => setOpenIndex(index)}
              >
                <img
                  src={`/assets/gallery/${item.src}`}
                  alt="Clinic photo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              alt="Clinic photo"
              className="max-h-[85vh] max-w-full object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-80">
              {openIndex + 1} of {galleryItems.length}
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