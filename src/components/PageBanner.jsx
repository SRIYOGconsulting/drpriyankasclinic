import React from 'react';

const PageBanner = ({ title, description, breadcrumbs = [], bgImage = "/assets/gallery/slider2.jpg" }) => {
  return (
    <section className="relative bg-slate-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center 30%',
            filter: 'brightness(0.6) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 to-slate-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <nav className="flex justify-center text-sm font-medium text-pink-200 mb-4">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-2 text-pink-400">/</span>}
                {item.href ? (
                  <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{title}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto rounded-full"></div>
          {description && (
            <p className="mt-6 text-lg text-pink-100 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
