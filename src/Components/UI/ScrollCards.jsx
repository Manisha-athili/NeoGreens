import React, { useEffect, useRef } from "react";

const ScrollCards = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    const getIntersectionRatio = (element) => {
      const a = [window.scrollY, window.scrollY + window.innerHeight];
      const b = [element.offsetTop, element.offsetTop + element.clientHeight];

      const max = Math.max(a[0], b[0]);
      const min = Math.min(a[1], b[1]);
      return Math.max(0, (min - max) / (b[1] - b[0]));
    };

    const onScroll = () => {
      boxes.forEach((box) => {
        const intersection = getIntersectionRatio(box);
        const top = box.offsetTop - window.pageYOffset < 0;

        const inner = box.querySelector(".inner-box");
        inner.style.transformOrigin = top ? "center center" : "top center";
        inner.style.position = top ? "fixed" : "absolute";
        inner.style.transform = `scale(${intersection})`;
        inner.style.opacity = intersection;
      });
      requestAnimationFrame(onScroll);
    };

    requestAnimationFrame(onScroll);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-4" />
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (boxesRef.current[i] = el)}
          className="relative w-[400px] h-[200px] text-white mb-6 box"
        >
          <div className="absolute top-0 flex flex-col justify-between w-[400px] h-[200px] bg-gradient-to-tr from-[#3d45b1] to-[#844efc] p-4 rounded-2xl shadow-lg inner-box overflow-hidden will-change-transform">
            {/* SVG Background */}
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute bottom-0 left-0 w-full h-full"
            >
              <defs>
                <linearGradient id={`linear-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f079ba" />
                  <stop offset="100%" stopColor="#e34a82" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#linear-${i})`}
                fillOpacity="1"
                d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,197.3C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>

            {/* Card Content */}
            <div className="font-semibold text-lg">Bank</div>

            <div className="flex justify-between text-sm">
              <div>
                <div className="font-bold text-xs mb-1 uppercase tracking-wider opacity-80">
                  Card Holder Name
                </div>
                <div>Colin van Eenige</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xs mb-1 uppercase tracking-wider opacity-80">
                  Expiry Date
                </div>
                <div>05/25</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollCards;
