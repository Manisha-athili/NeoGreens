import React from "react";

/**
 * ReadySection.jsx
 *
 * Simple responsive section:
 * - Left: heading, paragraph, disabled CTA
 * - Right: image
 *
 * Props:
 *  - ctaHref (string) optional: href for CTA (defaults to '#')
 *  - ctaEnabled (bool) optional: if true CTA is clickable (default false)
 *  - imgSrc (string) optional: image url (default = provided URL)
 *  - className (string) optional: extra classes for root section
 *
 * Requires Tailwind CSS.
 */

export default function ReadySection({
  ctaHref = "https://neogreens.com/product-page/",
  ctaEnabled = false,
  imgSrc = "https://neogreens.com/wp-content/uploads/2025/09/Frame-1-4.png",
  className = "",
}) {
  return (
    <section
      className={`ready_section py-10 md:py-14 ${className}`}
      style={{ background: "#efecd6" }}
      aria-label="When you are ready section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <div className="ready_content_wrap max-w-xl">
              <h2 className="text-2xl md:text-3xl font-serif text-emerald-900 mb-3">
                When You’re Ready, NeoGreens is Here.
              </h2>

              <p className="text-gray-700 mb-5">
                One clean, simple habit to help you feel better every day.
              </p>

              <a
                href={ctaEnabled ? ctaHref : "#"}
                onClick={(e) => {
                  if (!ctaEnabled) e.preventDefault();
                }}
                className={`inline-block rounded-full px-6 py-3 font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-emerald-700
                  ${
                    ctaEnabled
                      ? "bg-white text-emerald-900 shadow hover:shadow-lg"
                      : "bg-white/60 text-emerald-700 cursor-not-allowed opacity-80"
                  }`}
                aria-disabled={!ctaEnabled}
              >
                <span>Coming Soon</span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end bg-[url(https://neogreens.com/wp-content/themes/neogreen/assets/img/home/ready-vec.svg)] bg-no-repeat bg-left-bottom bg-contain">
            <div className="ready_img_wrap max-w-sm w-full">
              <img
                src={imgSrc}
                alt="NeoGreens product"
                loading="lazy"
                className="w-full h-auto rounded-md shadow-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
