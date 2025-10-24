export default function HeroSection() {
  return (
    <section
      className="w-full h-[90vh] bg-[#2C4143] bg-[url(https://neogreens.com/wp-content/themes/neogreen/assets/img/home/ban-vec.svg)] bg-no-repeat bg-right-bottom bg-contain flex flex-col justify-between md:items-center py-6 md:py-0 mt-4"
      aria-label="Hero — NeoGreens product and benefits"
    >
      <div className="max-w-[1140px] mx-auto px-6 lg:px-0 w-full h-full flex flex-col md:flex-row md:items-center">
        {/* Mobile Layout */}
        <div className="flex flex-col h-full md:hidden">
          {/* Content - Top */}
          <div className="flex-shrink-0 pt-4 space-y-5 text-center">
            <h1
              className="text-[2.75rem] leading-[1.1] font-bold text-[#efecd6]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Here's to the New You
            </h1>
            <p className="text-base text-[#efecd6] leading-relaxed px-2">
              One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday
              support you can feel.
            </p>

            <div className="pt-2">
              <button
                disabled
                aria-disabled="true"
                className="inline-flex items-center justify-center px-12 py-3.5 text-base font-semibold text-[#2C4143] bg-[#efecd6] rounded-full shadow-lg opacity-75"
              >
                Coming Soon
              </button>
            </div>
          </div>

          {/* Image - Bottom Right */}
          <div className="flex-grow flex items-end justify-end mt-8 pb-4">
            <div className="relative w-[280px]">
              <img
                className="w-full h-auto"
                src="https://neogreens.com/wp-content/uploads/2025/09/Group-4988.png"
                alt="NeoGreens product tubs and scoop"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
          {/* Content Column */}
          <div className="space-y-5 text-left">
            <h1
              className="text-5xl lg:text-6xl font-bold text-[#efecd6]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Here's to the New You
            </h1>
            <p className="text-xl text-[#efecd6] leading-relaxed">
              One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday
              support you can feel.
            </p>

            <div className="pt-2">
              <button
                disabled
                aria-disabled="true"
                className="inline-flex items-center justify-center px-12 py-3.5 text-base font-semibold text-[#2C4143] bg-[#efecd6] rounded-full shadow-lg opacity-75"
              >
                Coming Soon
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <img
                className="w-full h-auto"
                src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
                alt="NeoGreens product tubs and scoop"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

