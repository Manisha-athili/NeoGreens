export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-primary-teal bg-[url(https://neogreens.com/wp-content/themes/neogreen/assets/img/home/ban-vec.svg)] bg-no-repeat bg-right-bottom bg-contain mt-4">
      <div className="container mx-auto px-4 sm:px-18 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-4 items-center">
          {/* Content Column */}
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream"
                style={{ fontFamily: '"Playfair Display", serif' }}>
                Here's to the New You
              </h1>
              <p className="text-lg md:text-xl text-cream py-2 leading-relaxed">
                One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
              </p>
              {/* <button
                disabled
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-teal bg-cream border-2 border-primary-teal rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-not-allowed opacity-75"
              >
                <span>Coming Soon</span>
              </button> */}

              <button
                disabled
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-teal bg-cream border-2 border-primary-teal rounded-full shadow-lg transition-all duration-300 cursor-pointer opacity-75 group"
              >
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2">
            <div className="relative w-full ml-2">
              {/* Desktop Image */}
              <img
                className="hidden lg:block w-full h-auto rounded-lg"
                src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
                alt="NeoGreens Product"
                loading="eager"
                decoding="async"
              />
              {/* Mobile Image */}
              <img
                className="block lg:hidden w-full h-auto rounded-lg"
                src="https://neogreens.com/wp-content/uploads/2025/09/Group-4988.png"
                alt="NeoGreens Product"
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

