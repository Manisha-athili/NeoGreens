import React, { useRef, useState } from "react";
import testimonials from '../../Data/LandingPageData/testimonialsData'


export default function Testimonials() {
  const scrollerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(2);
  const [modalVideoId, setModalVideoId] = useState(null);

  const scrollBy = (direction = "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".testimonial-card")?.offsetWidth ?? 260;
    const gap = 24;
    const amount = cardWidth + gap;
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const children = Array.from(el.children);
    const centerX = el.scrollLeft + el.offsetWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    children.forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(childCenter - centerX);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveIdx(best);
  };

  return (
    <section className="mt-2  relative py-16 lg:py-28 overflow-hidden">
      <div className="mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="text-3xl md:text-4xl font-serif text-primary-teal font-semibold font-stretch-ultra-condensed">
            What Choosing Better Looks Like
          </h3>
          <p className="text-gray-600 mt-3">Every Scoop, A Step Towards Better Living.</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Previous testimonials"
            onClick={() => scrollBy("prev")}
            className="opacity-0 md:opacity-100 p-2 rounded-full bg-white shadow hover:shadow-md disabled:opacity-50 z-10"
          >
            <svg className="w-5 h-5 text-emerald-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="relative flex-1 h-[100%] overflow-x-auto no-scrollbar scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex gap-6 items-stretch pb-2">
              {testimonials.map((t, idx) => (
                <article
                  key={t.id}
                  className="flex-shrink-0 w-58 md:w-58 lg:w-58 h-100 md:h-[32rem] bg-white rounded-xl border border-[#e6e6e6] cursor-pointer p-6 shadow-md m-3 flex flex-col justify-between"
                  style={{ scrollSnapAlign: "center" }}
                  onClick={() => t.videoId && setModalVideoId(t.videoId)}
                >
                  <div>
                    <img
                      src="https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/quote.svg"
                      alt="quote"
                      className="w-6 h-6 opacity-80 mb-3 "
                      loading="lazy"
                    />

                    <h4 className="text-sm md:text-base font-normal text-[#172223] mb-3 py-8">{t.title}</h4>
                    <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">{t.text}</p>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            aria-label="Next testimonials"
            onClick={() => scrollBy("next")}
            className=" opacity-0 md:opacity-100 p-2 rounded-full bg-white shadow hover:shadow-md disabled:opacity-50 z-10"
          >
            <svg className="w-5 h-5 text-emerald-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {modalVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-label="Testimonial video"
          onClick={() => setModalVideoId(null)}
        >
          <div className="relative w-full max-w-3xl bg-transparent" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalVideoId(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow z-10"
              aria-label="Close video"
            >
              <svg className="w-5 h-5 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <iframe
                title="Testimonial video"
                src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1&rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .testimonials_section::before {
          content: "";
          position: absolute;
          bottom: -10%;
          left: -7%;
          width: 400px;
          height: 460px;
          background: url('https://neogreens.com/wp-content/themes/neogreen/assets/img/testimonials/test-vec.svg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          pointer-events: none;
          opacity: 0.95;
          z-index: 0;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}