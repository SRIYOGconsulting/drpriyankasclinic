import React from 'react';

const PageBanner = ({ 
  title, 
  description, 
  breadcrumbs = [], 
  bgImage = "/assets/gallery/slider2.jpg" 
}) => {
  return (
    <section className="relative bg-slate-900 text-white h-[300px] md:h-[380px] w-full mt-8 sm:mt-12 md:mt-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={bgImage} 
          alt={title}
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center center',
            filter: 'brightness(0.6) contrast(1.1)',
            width: '100%',
            height: '100%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 to-slate-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-6xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center pt-4 md:pt-8">
        <div className="text-center w-full">
          {breadcrumbs.length > 0 && (
            <nav className="flex flex-wrap justify-center text-sm md:text-base font-medium text-pink-200 mb-4">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="mx-2 text-pink-400">/</span>}
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="hover:text-white transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 px-2">
            {title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto rounded-full my-6"></div>
          {description && (
            <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto px-4">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
