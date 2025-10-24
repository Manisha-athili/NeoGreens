// ProductBadgeCarousel.jsx
import React, { useRef, useState, useEffect } from "react";

const ITEMS = [
  { img: "https://neogreens.com/wp-content/uploads/2025/06/zero.svg", title: "No Gums" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/organic.svg", title: "No Synthetic Vitamins" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/vegan.svg", title: "Allergen-conscious" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/gluten-free.svg", title: "Gluten-free" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/zero.svg", title: "100% Vegan" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/organic.svg", title: "Organic" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/vegan.svg", title: "No Gums" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/Organic-1-1.svg", title: "Gluten-free" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/100-Vegan-1-1.svg", title: "100% Vegan" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/Zero-Synthetic-Nutrients-1-1.svg", title: "Organic" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/Organic-1-1.svg", title: "No Gums" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/organic.svg", title: "Gluten-free" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/vegan.svg", title: "100% Vegan" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/gluten-free.svg", title: "Organic" }
];

export default function ProductBadgeCarousel() {
  const scrollerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(ITEMS.length);
  const isScrollingRef = useRef(false);

  // Create tripled array for infinite scroll
  const infiniteItems = [...ITEMS, ...ITEMS, ...ITEMS];

  // measure a single slide width (+ gap) after mount & on resize
  useEffect(() => {
    function measure() {
      const sc = scrollerRef.current;
      if (!sc) return;
      const first = sc.querySelector("[data-slide]");
      if (first) {
        const style = window.getComputedStyle(first);
        const w = first.getBoundingClientRect().width;
        const mr = parseFloat(style.marginRight || 0);
        setItemWidth(Math.round(w + mr));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Set initial scroll position to middle set
  useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc || !itemWidth) return;
    sc.scrollLeft = ITEMS.length * itemWidth;
  }, [itemWidth]);

  // Handle infinite scroll loop
  useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc || !itemWidth) return;

    function onScroll() {
      if (isScrollingRef.current) return;
      
      const scrollPos = sc.scrollLeft;
      const idx = Math.round(scrollPos / itemWidth);
      
      // Check if we've scrolled to the first or last set
      if (idx <= 0) {
        isScrollingRef.current = true;
        sc.scrollLeft = ITEMS.length * itemWidth;
        setTimeout(() => { isScrollingRef.current = false; }, 50);
      } else if (idx >= infiniteItems.length - 1) {
        isScrollingRef.current = true;
        sc.scrollLeft = ITEMS.length * itemWidth;
        setTimeout(() => { isScrollingRef.current = false; }, 50);
      }
      
      // Update active index (mod by ITEMS.length for dot indicator)
      setActiveIndex(idx % ITEMS.length);
    }
    
    sc.addEventListener("scroll", onScroll, { passive: true });
    return () => sc.removeEventListener("scroll", onScroll);
  }, [itemWidth, infiniteItems.length]);

  function scrollToIndex(i) {
    const sc = scrollerRef.current;
    if (!sc) return;
    // Map to middle set + requested index
    const targetIndex = ITEMS.length + (i % ITEMS.length);
    sc.scrollTo({ left: targetIndex * (itemWidth || 0), behavior: "smooth" });
  }

  function prev() {
    const sc = scrollerRef.current;
    if (!sc) return;
    const currentScroll = sc.scrollLeft;
    sc.scrollTo({ left: currentScroll - itemWidth, behavior: "smooth" });
  }
  
  function next() {
    const sc = scrollerRef.current;
    if (!sc) return;
    const currentScroll = sc.scrollLeft;
    sc.scrollTo({ left: currentScroll + itemWidth, behavior: "smooth" });
  }

  return (
    <section className="product_ban_list_section py-6">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Arrows (desktop) */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow text-gray-700 z-20"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 md:gap-4 py-2 px-2 md:px-6"
          role="list"
        >
          {infiniteItems.map((it, idx) => (
            <div
              key={idx}
              data-slide
              role="listitem"
              className="swiper-slide snap-center flex-shrink-0 w-[320px] md:w-[320px] mr-3 md:mr-4"
              aria-label={`${(idx % ITEMS.length) + 1} / ${ITEMS.length}`}
            >
              <div className="product_ban_list_wrap bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 flex items-center justify-center mb-4">
                  <img src={it.img} alt={it.title} className="max-w-full max-h-full" />
                </div>
                <h5 className="text-sm md:text-base font-medium text-gray-100">{it.title}</h5>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow text-gray-700 z-20"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Arrows (mobile) */}
        <div className="flex md:hidden justify-between mt-3 px-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow text-gray-700"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow text-gray-700"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* pagination / dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full ${i === activeIndex ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}