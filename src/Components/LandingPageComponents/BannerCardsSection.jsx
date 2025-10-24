import React from 'react';
import cards from '../../Data/LandingPageData/BannerCards';

export default function BannerCardsSection() {
  return (
  <section className="bg-[#efecd6] py-6 md:py-2">
  <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
    {/* Mobile: 2x2 Grid */}
    <div className="grid grid-cols-2 gap-6 md:hidden">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center gap-2 text-center">
          <img src={card.icon} alt={card.title} className="h-10 w-auto" />
          <h5 className="text-sm text-[#2C4143] leading-tight">{card.title}</h5>
        </div>
      ))}
    </div>
    
    {/* Desktop: Horizontal Row with Dots */}
    <div className="hidden md:flex flex-wrap justify-start">
      {cards.map((card, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-3 px-8 m-2">
            <img src={card.icon} alt={card.title} className="h-10 w-auto" />
            <h5 className="text-lg text-[#2C4143]">{card.title}</h5>
          </div>
          {index < cards.length - 1 && (
            <div className="flex items-center px-4">
              <div className="w-1 h-1 rounded-full bg-[#2C4143] opacity-80"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

  );
}