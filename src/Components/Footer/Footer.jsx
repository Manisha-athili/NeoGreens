// Footer.jsx
import React from "react";

const social = [
  {
    href: "https://www.instagram.com/neogreensofficial",
    alt: "Instagram",
    img: "https://neogreens.com/wp-content/uploads/2025/08/IG.svg",
  },
  {
    href: "https://www.facebook.com/neogreensofficial",
    alt: "Facebook",
    img: "https://neogreens.com/wp-content/uploads/2025/08/FB.svg",
  },
  {
    href: "https://www.threads.com/@neogreensofficial",
    alt: "Threads/X",
    img: "https://neogreens.com/wp-content/uploads/2025/08/X-2.svg",
  },
  {
    href: "https://www.linkedin.com/company/neogreensofficial",
    alt: "LinkedIn",
    img: "https://neogreens.com/wp-content/uploads/2025/08/LN.svg",
  },
];

const links = [
  { href: "https://neogreens.com/about-us/", label: "About Us" },
  { href: "https://neogreens.com/contact-us/", label: "Contact Us" },
];

const policyLinks = [
  { href: "https://neogreens.com/privacy-policy/", label: "Privacy Policy" },
  { href: "https://neogreens.com/terms-conditions/", label: "Terms & Conditions" },
  { href: "https://neogreens.com/return-policy/", label: "Return Policy" },
  { href: "https://neogreens.com/shipping-policy/", label: "Shipping policy" },
];

export default function Footer({ className = "" }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`footer_wrapper ${className}`}
      style={{ background: "#2c4143" }}
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Logo + Main Links */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <a
              href="https://neogreens.com"
              className="flex items-center"
              aria-label="NeoGreens home"
            >
              <img
                src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
                alt="NeoGreens logo"
                className="h-8 md:h-10"
                loading="lazy"
              />
            </a>

            <ul className="footer_list flex flex-wrap gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-200 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social icons */}
          <ul className="social_list flex items-center gap-4">
            {social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-1 rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label={s.alt}
                >
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="h-6 w-6"
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright + policy links */}
        <div className="copy_right_wrap mt-8 border-t border-white/10 pt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="text-sm text-gray-200">
            <span>Copyright {year} © NeoGreen. All rights Reserved</span>
          </div>

          <ul className="copy_right_list flex flex-wrap gap-4">
            {policyLinks.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="text-sm text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
