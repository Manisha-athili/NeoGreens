import React from 'react';

const items = [
  { img: "https://neogreens.com/wp-content/uploads/2025/06/increase.svg", text: "Increased energy levels" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/improved.svg", text: "Improved gut health" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/boosted.svg", text: "Boosted Immunity" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/natural-1.svg", text: "Natural Detox" },
  { img: "https://neogreens.com/wp-content/uploads/2025/06/daily.svg", text: "Daily nourishment" },
];

const BenefitSection = () => {
  return (
    <section className="increase_section py-10 bg-[#efecd6]">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-18">
          {items.map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-3">
              <img src={item.img} alt={item.text} className="h-[78px] w-[92px]" />
              <p className="text-[#2c4143] text-center text-lg font-medium leading-[24px] tracking-tight capitalize">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitSection;

