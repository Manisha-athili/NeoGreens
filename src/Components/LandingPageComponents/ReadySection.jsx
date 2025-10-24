import React from "react";

export default function ReadySection({
  ctaHref = "https://neogreens.com/product-page/",
  ctaEnabled = false,
  imgSrc = "https://neogreens.com/wp-content/uploads/2025/09/Frame-1-4.png",

}) {
  return (
    <section
      className={`relative w-full bg-[#efecd6] pt-8 md:pt-9 lg:pt-10`}
      aria-label="When you are ready section"
    >
  <div className="max-w-[1140px] mx-auto px-4 md:px-6 lg:px-0">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 bg-[url('https://neogreens.com/wp-content/themes/neogreen/assets/img/home/ready-vec.svg')] bg-no-repeat  bg-contain bg-bottom-right">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="max-w-md md:max-w-lg text-center lg:text-left">
              <h2
                className="text-[32px] md:text-[40px] lg:text-[42px] font-serif text-[#2c4143] font-semibold leading-tight mb-4"
                style={{ letterSpacing: "-0.8px" }}
              >
                When You’re Ready, NeoGreens is Here.
              </h2>

              <p className="text-[#677071] text-lg leading-relaxed mb-6 font-raleway">
                One clean, simple habit to help you feel better every day.
              </p>

              <a
                href={ctaEnabled ? ctaHref : "#"}
                onClick={(e) => !ctaEnabled && e.preventDefault()}
                className={`inline-flex items-center justify-center px-8 py-4 border border-[#2c4143] rounded-full font-semibold text-gray-700 transition-all duration-300
                  ${
                    ctaEnabled
                      ? "bg-[#fdfcf9] hover:bg-white hover:shadow-md"
                      : "bg-[#fdfcf9]/80 opacity-60 cursor-pointer mb-10"
                  }`}
                aria-disabled={!ctaEnabled}
              >
                Coming Soon
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className=" relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-xs md:max-w-sm w-full h-full  ">
              <img
                src={imgSrc}
                alt="NeoGreens product"
                loading="lazy"
                className="absolute z-100 bottom-[-100px] h-[45vh] w-full "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
