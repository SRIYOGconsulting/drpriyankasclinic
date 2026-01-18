import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import { FiImageOff } from 'react-icons/fi';

// Gallery images with aspect ratios
const galleryItems = [
  { id: 1, src: '1.jpg', aspect: 'aspect-[4/3]' },
  { id: 2, src: '2.jpg', aspect: 'aspect-square' },
  { id: 3, src: '3.jpg', aspect: 'aspect-[3/4]' },
  { id: 4, src: '5.jpg', aspect: 'aspect-[4/3]' },
  { id: 5, src: '6.jpg', aspect: 'aspect-[4/3]' },
  { id: 6, src: '7.jpg', aspect: 'aspect-[3/4]' },
  { id: 7, src: '8.jpg', aspect: 'aspect-square' },
  { id: 8, src: '9.jpg', aspect: 'aspect-[4/3]' },
  { id: 9, src: '10.jpg', aspect: 'aspect-[3/4]' },
  { id: 10, src: '11.jpg', aspect: 'aspect-square' },
  { id: 11, src: '12.jpg', aspect: 'aspect-[4/3]' },
  { id: 12, src: '13.jpg', aspect: 'aspect-square' },
  { id: 13, src: '14.jpg', aspect: 'aspect-[3/4]' },
  { id: 14, src: '15.jpg', aspect: 'aspect-[4/3]' },
  { id: 15, src: '16.jpg', aspect: 'aspect-square' },
  { id: 16, src: '17.jpg', aspect: 'aspect-[3/4]' },
  { id: 17, src: '18.jpg', aspect: 'aspect-[4/3]' },
  { id: 18, src: '19.png', aspect: 'aspect-square' },
  { id: 19, src: '20.jpg', aspect: 'aspect-square' },
  { id: 20, src: '27.jpg', aspect: 'aspect-square' },
    { id: 21, src: '28.jpg', aspect: 'aspect-square' },
    { id: 22, src: '22.jpg', aspect: 'aspect-[3/4]' },
  { id: 23, src: '29.jpg', aspect: 'aspect-[3/4]' },
  { id: 24, src: 'slider1.jpg', aspect: 'aspect-[4/3]' },
  { id: 25, src: 'slider2.jpg', aspect: 'aspect-square' },
  { id: 26, src: 'slider3.jpg', aspect: 'aspect-[3/4]' },
  { id: 27, src: 'slider4.jpg', aspect: 'aspect-[4/3]' },
  { id: 28, src: '21.jpg', aspect: 'aspect-[3/4]' },
  { id: 29, src: '23.png', aspect: 'aspect-[3/4]' },
  { id: 30, src: '24.png', aspect: 'aspect-square' },
  { id: 31, src: '25.png', aspect: 'aspect-[3/4]' },
  { id: 32, src: '26.png', aspect: 'aspect-[3/4]' },
{ id: 33, src: '30.png', aspect: 'aspect-[3/4]' },
];

const ImageWithFallback = ({ src, alt, aspect, onError, ...props }) => {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (e) => {
    setImgError(true);
    if (onError) onError(e);
  };

  return (
    <div className={`relative ${aspect} w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center`}>
      {imgError ? (
        <div className="flex flex-col items-center justify-center text-gray-400 p-4">
          <FiImageOff className="w-12 h-12 mb-2" />
          <span className="text-sm">Image not found</span>
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
          )}
          <img
            src={`/images/gallery/${src}`}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            onError={handleError}
            loading="lazy"
            {...props}
          />
        </>
      )}
    </div>
  );
};

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageLoaded = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

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
        bgImage="/images/home/slider/1.jpg"
      />
      
      <div className="w-[80%] max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="px-2 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className="group cursor-pointer transition-all duration-300 hover:opacity-90"
                onClick={() => setOpenIndex(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <ImageWithFallback
                    src={item.src}
                    alt={`Clinic photo ${item.id}`}
                    aspect={item.aspect}
                    onError={(e) => console.error(`Error loading image: ${item.src}`, e)}
                    onLoad={() => handleImageLoaded(item.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full">
                      <div className="h-0.5 w-10 bg-white mb-3 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300"></div>
                      <h3 className="text-white font-medium text-lg mb-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title || `Photo ${item.id}`}
                      </h3>
                      <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        Click to view
                      </p>
                    </div>
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
              src={`/images/gallery/${galleryItems[openIndex].src}`}
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