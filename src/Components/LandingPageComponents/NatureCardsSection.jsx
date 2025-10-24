import React, { useState, useRef, useEffect } from "react";
import cards from "../../Data/LandingPageData/NatureCardsData";

const NatureCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsRef = useRef([]);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer only for desktop
  useEffect(() => {
    if (isMobile) return; // Skip observer on mobile

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1) setActiveCard(index);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => cardsRef.current.forEach((card) => card && observer.unobserve(card));
  }, [isMobile]);

  return (
    <section className="py-20 bg-[#fdfcf9] 
    bg-[url(https://neogreens.com/wp-content/themes/neogreen/assets/img/home/nature/vec-nature.svg)] bg-no-repeat bg-center bg-contain bg-fixed">
    
      <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-24">
              <div className="text-center md:text-left">
                <h2 className="text-[#172223] text-[32px] md:text-[40px] leading-tight font-semibold" 
                style={{ fontFamily: '"Playfair Display"' }}>
                  Backed by Nature. Built for Your Routine.
                </h2>
                <p className="text-lg lg:text-xl text-[#677071] py-6">
                  NeoGreens goes where you go — from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
                </p>
                <a
                  href="https://neogreens.com/product-page/"
                  className="inline-flex items-center px-8 py-4 bg-[#fdfcf9] border border-[#2c4143] rounded-full font-semibold text-gray-700 cursor-pointer opacity-50"
                >
                  Coming Soon
                </a>
                <img
                  src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
                  alt="Nature background"
                  className="mt-12 w-full max-w-md lg:max-w-full mx-auto lg:mx-0"
                />
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-1/2 lg:ml-auto space-y-4">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`nature_card bg-white rounded-2xl p-4 lg:p-8 shadow-lg transition-all duration-500 ${
                  !isMobile && activeCard === index
                    ? "scale-100 shadow-xl"
                    : !isMobile && "scale-95"
                }`}
                style={!isMobile ? { position: "sticky", top: "20vh", zIndex: 1000 + index } : {}}
              >
                <div className="flex items-start space-x-2 md:space-x-4 mb-6">
                  <img src={card.icon} alt="" className="w-12 h-12 flex-shrink-0" />
                  <div className="text-start md:text-left">
                    <h5 className="text-xl md:text-2xl tracking-tight font-bold text-gray-900 mb-2 font-serif">{card.title}</h5>
                    <p className="text-md md:text-lg text-gray-500 leading-6 md:leading-7">{card.description}</p>
                  </div>
                </div>

                {/* Responsive images */}
                <img
                  className="hidden lg:block w-full rounded-lg transition-transform duration-500"
                  src={card.desktopImage}
                  alt={card.title}
                />
                <img
                  className="block lg:hidden w-full rounded-lg transition-transform duration-500"
                  src={card.mobileImage}
                  alt={card.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureCards;


// import React, { useState, useRef, useEffect } from "react";
// import cards from "../../Data/LandingPageData/NatureCardsData";

// const NatureCards = () => {
//   const [activeCard, setActiveCard] = useState(0);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = cardsRef.current.indexOf(entry.target);
//             if (index !== -1) setActiveCard(index);
//           }
//         });
//       },
//       { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
//     );

//     cardsRef.current.forEach((card) => card && observer.observe(card));
//     return () => cardsRef.current.forEach((card) => card && observer.unobserve(card));
//   }, []);

//   return (
//     <section className=" py-20 bg-[#fdfcf9] 
//     bg-[url(https://neogreens.com/wp-content/themes/neogreen/assets/img/home/nature/vec-nature.svg)] bg-no-repeat bg-center bg-contain bg-fixed ">
    
//       <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Content */}
//           <div className="w-full lg:w-5/12 mb-12 lg:mb-0 ">
//             <div className="sticky top-24">
//               <div className=" text-center md:text-left">
//                 <h2 className=" text-[#172223] text-[40px] leading-tight font-semibold" 
//                 style={{ fontFamily: '"Playfair Display"',
//                  }}
//                 >
//                   Backed by Nature. Built for Your Routine.
//                 </h2>
//                 <p className="text-lg lg:text-xl text-[#677071] py-6">
//                   NeoGreens goes where you go — from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
//                 </p>
//                 <a
//                   href="https://neogreens.com/product-page/"
//                   className="inline-flex items-center px-8 py-4 bg-[#fdfcf9] border border-[#2c4143] rounded-full font-semibold text-gray-700 cursor-pointer opacity-50"
//                 >
//                   Coming Soon
//                 </a>
//                 <img
//                   src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
//                   alt="Nature background"
//                   className="mt-12 w-full max-w-md lg:max-w-full mx-auto lg:mx-0"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Cards */}
//           <div className="w-full lg:w-1/2 lg:ml-auto space-y-4">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 className={`nature_card bg-white rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-500 transform ${
//                   activeCard === index
//                     ? "scale-100 shadow-xl  "
//                     : "scale-95 "
//                 }`}
//                 style={{ position: "sticky", top: "20vh", zIndex: 1000 + index }}
//               >
//                 <div className="flex items-start space-x-4 mb-6">
//                   <img src={card.icon} alt="" className="w-12 h-12 flex-shrink-0" />
//                   <div className="text-center md:text-left">
//                     <h5 className="text-xl font-bold text-gray-900 mb-2 font-serif">{card.title}</h5>
//                     <p className="text-md md:text-lg text-gray-500 leading-7 ">{card.description}</p>
//                   </div>
//                 </div>

//                 {/* Responsive images */}
//                 <img
//                   className="hidden lg:block w-full rounded-lg transition-transform duration-500 "
//                   src={card.desktopImage}
//                   alt={card.title}
//                 />
//                 <img
//                   className="block lg:hidden w-full rounded-lg transition-transform duration-500 "
//                   src={card.mobileImage}
//                   alt={card.title}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NatureCards;