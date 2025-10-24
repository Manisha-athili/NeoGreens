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
      {/* ✅ Consistent width and alignment with Navbar/Hero/BannerCards */}
      <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <div className="nature_content text-center md:text-left">
                <h2 className="text-4xl lg:text-5xl font-semibold text-[#172223] leading-tight font-serif">
                  Backed by Nature. Built for Your Routine.
                </h2>
                <p className="text-lg lg:text-xl text-[#677071] py-6">
                  NeoGreens goes where you go — from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
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
          <div className="w-full lg:w-1/2 lg:ml-auto space-y-4">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`nature_card bg-white rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-500 transform ${
                  activeCard === index
                    ? "scale-100 shadow-xl border-1 border-green-100"
                    : "scale-95 border-0"
                }`}
                style={{ position: "sticky", top: "20vh", zIndex: 1000 + index }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <img src={card.icon} alt="" className="w-12 h-12 flex-shrink-0" />
                  <div className="text-center md:text-left">
                    <h5 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h5>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </div>

                {/* Responsive images */}
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
