import React from 'react';
import cards from '../../Data/LandingPageData/BannerCards';

export default function BannerCardsSection() {
  return (
    <section className="bg-[#efecd6] py-4 md:py-6">
      <div className="max-w-[960px] mx-auto px-4 flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-2 md:gap-3 px-4 md:px-8">
              <img src={card.icon} alt={card.title} className="h-8 md:h-10 w-auto" />
              <h5 className="text-base md:text-lg font-semibold text-[#2C4143]">{card.title}</h5>
            </div>
            {index < cards.length - 1 && (
              <div className="hidden md:flex items-center px-4">
                <div className="w-1 h-1 rounded-full bg-[#2C4143] opacity-80"></div>
              </div>
              
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
