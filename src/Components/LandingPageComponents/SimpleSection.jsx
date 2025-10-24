import React from "react";

export default function SimpleSection() {
  return (
    <section className="relative py-12 bg-[light-cream] h-full w-full min-h-[700px] mt-20">
      <div className="container mx-auto w-full px-4 h-full flex justify-center items-center">
        <div className="relative w-5/6 h-[90vh] flex flex-col lg:block justify-center items-center ">
          {/* LEFT: Text content - Absolute positioned for desktop, static for mobile */}
          <div className="w-full  h-[85vh]  lg:w-1/2 lg:absolute lg:top-0 lg:left-25 lg:transform bg-primary-teal text-cream p-10 lg:pl-6 lg:py-14 lg:rounded-l-xl lg:rounded-r-none rounded 
            bg-[url(https://neogreens.com/wp-content/themes/neogreen/assets/img/home/ban-vec.svg)] bg-no-repeat bg-left-bottom bg-contain bg-opacity-10
            z-10">
            <div className="lg:p-10 flex flex-col justify-center ">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif mb-6 font-medium ">
                The Simple Solution to Modern Lifestyle Health Issues
              </h2>
              <p className="text-base sm:text-lg lg:text-lg mb-8 lg:mr-18">
                From long hours to missed meals, we understand how wellness gets pushed aside. NeoGreens is our answer to that. Backed by science, grounded in nature, and made to meet you where you are.
              </p>
              <a
                href="https://neogreens.com/about-us/"
                target="_self"
                rel="noreferrer"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 lg:px-8 lg:py-4 rounded-full bg-cream text-primary-teal font-medium shadow-lg hover:bg-cream/90 transition-all duration-300 w-fit"
                aria-label="Our Story"
              >
                <span className="text-base sm:text-lg lg:text-lg font-semibold">Our Story</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Images - Absolute positioned for desktop, static for mobile */}
          <div className="w-full  h-[85vh]  lg:w-1/2 lg:absolute lg:top-0 lg:right-25 lg:transform z-10 mt-8 lg:mt-0">

                {/* Desktop image: visible on md+ */}
                <img
                  src="https://neogreens.com/wp-content/uploads/2025/06/simple.png"
                  alt="NeoGreens product and lifestyle"
                  className="hidden md:block w-full h-full object-cover lg:rounded-r-xl lg:rounded-l-none "
                  loading="lazy"
                />
                {/* Mobile image: visible below md */}
                <img
                  src="https://neogreens.com/wp-content/uploads/2025/06/simple-mob.png"
                  alt="NeoGreens mobile view"
                  className="block md:hidden w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
             
            </div>
          
        </div>
      </div>
    </section>
  );
}