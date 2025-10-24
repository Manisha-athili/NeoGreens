import PropTypes from "prop-types";

export default function HeroSection() {
  return (

    <section
  className="w-full h-[85vh] bg-primary-teal bg-[url(https://neogreens.com/wp-content/themes/neogreen/assets/img/home/ban-vec.svg)] bg-no-repeat bg-right-bottom bg-contain mt-8 flex items-center"
  aria-label="Hero — NeoGreens product and benefits"
>
  <div className="max-w-[1140px] mx-auto px-4 lg:px-0 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
      {/* Content Column */}
      <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Here's to the New You
        </h1>
        <p className="text-lg md:text-xl text-cream py-2 leading-relaxed">
          One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday
          support you can feel.
        </p>

        <button
          disabled
          aria-disabled="true"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-teal bg-cream border-2 border-primary-teal rounded-full shadow-lg transition-all duration-300 cursor-pointer opacity-75 group"
        >
          <span className="relative z-10 transition-transform duration-300">
            Coming Soon
          </span>
        </button>
      </div>

      {/* Image Column */}
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-lg ml-2">
          <img
            className="hidden lg:block w-full h-auto rounded-lg"
            src="https://neogreens.com/wp-content/uploads/2025/09/Group-4987.png"
            alt="NeoGreens product tubs and scoop"
            loading="eager"
            decoding="async"
          />
          <img
            className="block lg:hidden w-full h-auto rounded-lg"
            src="https://neogreens.com/wp-content/uploads/2025/09/Group-4988.png"
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

HeroSection.propTypes = {};
