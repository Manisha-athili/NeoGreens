import React, { useState, useEffect } from 'react';

export default function HeaderHero() {
  const slides = Array.from({ length: 14 }).map((_, i) => `https://neogreens.com/wp-content/uploads/2025/09/product.png`);
  const [index, setIndex] = useState(0);

  // Optional: autoplay (comment out if you don't want it)
  useEffect(() => {
    const t = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }
  function goTo(i) {
    setIndex(i);
  }

  return (
    <header className="bg-[#223635] text-cream-50 px-18 lg:px-32 h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT: Text content */}
          <div className="text-left  items-center">
            <h1 className="text-6xl lg:text-7xl font-serif text-cream-50 leading-tight">NeoGreens</h1>

            <div className="flex items-center gap-4 mt-6">
              {/* star rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current text-yellow-300' : 'stroke-current text-yellow-300'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1.5l2.59 5.25L18.5 7.5l-4.25 3.9L15.5 18 10 15.2 4.5 18l1.25-6.6L1.5 7.5l5.91-.75L10 1.5z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-cream-50">4.5/5</span>
            </div>

            <div className="inline-block mt-4 bg-[#3f5450] text-[#d7e6e1] px-4 py-2 rounded-md text-sm">
              60+ Nutrients in One Scoop
            </div>

            <p className="mt-8 max-w-xl text-lg text-[#e8efe9] leading-relaxed">
              NeoGreens is thoughtfully crafted with greens, nutrients, and probiotics that help you feel better, one scoop at a time.
            </p>

            <div className="mt-8">
              <button className="bg-[#efe9cf] text-[#0e221f] px-8 py-3 rounded-full text-lg font-medium shadow-sm hover:shadow-md transition">
                View Nutrient Information
              </button>
            </div>

            <div className="mt-10 text-sm text-[#e8efe9]">
              <div>Also Find Us on :</div>
              <div className="flex items-center gap-4 mt-3">
                <img src="/icons/amazon.svg" alt="amazon" className="w-8 h-8" />
                <img src="/icons/flipkart.svg" alt="flipkart" className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* RIGHT: Carousel with 14 slides */}
          <div className="flex items-center justify-center h-[900px]">
            <div className="relative bg-[#e9e9e9] rounded-lg p-6 w-full max-w-lg shadow-lg">

              {/* left arrow */}
              <button onClick={prev} aria-label="prev" className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* visible slide */}
              <div className="flex justify-center items-center h-96">
                <img
                  src={slides[index]}
                  alt={`slide ${index + 1}`}
                  className="max-h-[99%] object-contain transform transition-transform duration-500"
                />
              </div>

              {/* right arrow */}
              <button onClick={next} aria-label="next" className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* dots / thumbnails */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full ${i === index ? 'bg-[#0e221f]' : 'bg-white/70'} border border-white/40`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

