import React from 'react';

const PageBanner = ({ 
  title, 
  description, 
  breadcrumbs = [], 
  bgImage = "/assets/gallery/slider2.jpg" 
}) => {
  return (
    <section className="relative bg-slate-900 text-white h-[280px] sm:h-[320px] md:h-[380px] w-full mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={bgImage.startsWith('http') ? bgImage : bgImage}
          alt={title}
          width="100%"
          height="100%"
          className="object-cover w-full h-full"
          style={{
            objectPosition: 'center center',
            filter: 'brightness(0.5) contrast(1.1)'
          }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-6xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center pt-16 md:pt-8">
        <div className="text-center w-full px-2">
          {breadcrumbs.length > 0 && (
            <nav className="flex flex-wrap justify-center text-xs sm:text-sm md:text-base font-medium text-pink-100/90 mb-3 sm:mb-4">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="mx-2 text-pink-300/70">/</span>}
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="hover:text-white transition-colors whitespace-nowrap drop-shadow-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white font-semibold whitespace-nowrap drop-shadow-sm">
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4 px-2 text-shadow-lg">
            {title}
          </h1>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto rounded-full my-4 sm:my-6"></div>
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed text-shadow-sm">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
