
// import React, { useState, useRef, useEffect } from 'react';

// const cards = [
//   {
//     icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
//     title: "Feel Foggy or Unfocused?",
//     description: "Designed to support mental clarity with B12 and adaptogens.",
//     desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png",
//     mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-4.png",
//   },
//   {
//     icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
//     title: "Bloating or Indigestion?",
//     description: "Aids digestion with probiotics and digestive enzymes.",
//     desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png",
//     mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-2-1.png",
//   },
//   {
//     icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
//     title: "Constant Energy Crashes?",
//     description: "Supports sustained energy with clean, plant-based nutrients.",
//     desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png",
//     mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-3-1.png",
//   },
//   {
//     icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
//     title: "Busy Routines messing up nutrition?",
//     description: "One simple scoop a day keeps your essentials covered.",
//     desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png",
//     mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-4-1.png",
//   },
//   {
//     icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
//     title: "Too many supplements to choose from?",
//     description: "NeoGreens simplifies it all. Just one powder, once a day.",
//     desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png",
//     mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-5-1.png",
//   },
//   {
//     icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-4.svg",
//     title: "Frequent body pains and aches?",
//     description: "Takes care of essential vitamin deficiencies.",
//     desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-6.png",
//     mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-6-1.png",
//   },
// ];

// export default function NatureCardsSection() {
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
//     <section className="nature_section py-16 bg-white">
//       <div className="container mx-auto px-4 nature_container">
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Content */}
//           <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
//             <div className="nature_wrap sticky top-24">
//               <div className="nature_content">
//                 <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                   Backed by Nature. Built for Your Routine.
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                   NeoGreens goes where you go - from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
//                 </p>
//                 <a 
//                   href="https://neogreens.com/product-page/" 
//                   target="_self" 
//                   className="btnwhite secondarybtn disabledBtn inline-block bg-gray-200 text-gray-500 px-8 py-4 rounded-lg font-semibold cursor-not-allowed transition-colors duration-300"
//                 >
//                   <span>Coming Soon</span>
//                 </a>
//                 <img 
//                   src="https://neogreens.com/wp-content/uploads/2025/09/nature.png" 
//                   alt="Nature background" 
//                   className="mt-12 w-full max-w-md mx-auto lg:mx-0"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Cards */}
//           <div className="w-full lg:w-6/12 lg:ml-auto">
//             <div className="nature_cards space-y-8">
//               {cards.map((card, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (cardsRef.current[index] = el)}
//                   className={`nature_card bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 ease-in-out transform ${
//                     activeCard === index 
//                       ? 'scale-105 shadow-xl border-2 border-green-100' 
//                       : 'scale-95 opacity-70'
//                   }`}
//                   style={{
//                     position: 'sticky',
//                     top: '40vh',
//                     zIndex: 1000 + index
//                   }}
//                 >
//                   <div className="card_title_wrap flex items-start space-x-4 mb-6">
//                     <img 
//                       src={card.icon} 
//                       alt="" 
//                       className="w-12 h-12 flex-shrink-0"
//                     />
//                     <div className="card_title flex-1">
//                       <h5 className="text-xl font-bold text-gray-900 mb-2">
//                         {card.title}
//                       </h5>
//                       <p className="text-gray-600 leading-relaxed">
//                         {card.description}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <img 
//                     className="hidden lg:block w-full rounded-lg transition-transform duration-500 hover:scale-105"
//                     src={card.desktopImage} 
//                     alt={card.title}
//                   />
//                   <img 
//                     className="block lg:hidden w-full rounded-lg transition-transform duration-500 hover:scale-105"
//                     src={card.mobileImage} 
//                     alt={card.title}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NatureCards;


import React, { useState, useRef, useEffect } from "react";

const cards = [
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg",
    title: "Feel Foggy or Unfocused?",
    description: "Designed to support mental clarity with B12 and adaptogens.",
    desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png",
    mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-1-4.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4961.svg",
    title: "Bloating or Indigestion?",
    description: "Aids digestion with probiotics and digestive enzymes.",
    desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-2.png",
    mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-2-1.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-1.svg",
    title: "Constant Energy Crashes?",
    description: "Supports sustained energy with clean, plant-based nutrients.",
    desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-3.png",
    mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-3-1.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-2.svg",
    title: "Busy Routines messing up nutrition?",
    description: "One simple scoop a day keeps your essentials covered.",
    desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-4.png",
    mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-4-1.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-3.svg",
    title: "Too many supplements to choose from?",
    description: "NeoGreens simplifies it all. Just one powder, once a day.",
    desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-5.png",
    mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-5-1.png",
  },
  {
    icon: "https://neogreens.com/wp-content/uploads/2025/06/Group-4962-4.svg",
    title: "Frequent body pains and aches?",
    description: "Takes care of essential vitamin deficiencies.",
    desktopImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-6.png",
    mobileImage: "https://neogreens.com/wp-content/uploads/2025/09/Image-6-1.png",
  },
];

const NatureCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
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
  }, []);

  return (
    <section className="nature_section py-20 bg-[#fdfcf9]">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <div className="nature_content">
                <h2 className="text-4xl lg:text-5xl font-semibold text-[#172223] leading-tight">
                  Backed by Nature. Built for Your Routine.
                </h2>
                <p className="text-lg lg:text-xl text-[#677071] py-6">
                  NeoGreens goes where you go - from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
                </p>
                <a
                  href="https://neogreens.com/product-page/"
                  className="inline-flex items-center px-8 py-4 bg-[#fdfcf9] border border-[#2c4143] rounded-full font-semibold text-gray-700 cursor-not-allowed opacity-50"
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
          <div className="w-full lg:w-7/12 lg:ml-auto space-y-8">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`nature_card bg-white rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-500 transform ${
                  activeCard === index ? "scale-105 shadow-xl border-2 border-green-100" : "scale-95 opacity-70"
                }`}
                style={{ position: "sticky", top: "40vh", zIndex: 1000 + index }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <img src={card.icon} alt="" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h5 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h5>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </div>
                <img
                  className="hidden lg:block w-full rounded-lg transition-transform duration-500 hover:scale-105"
                  src={card.desktopImage}
                  alt={card.title}
                />
                <img
                  className="block lg:hidden w-full rounded-lg transition-transform duration-500 hover:scale-105"
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
