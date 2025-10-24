// import React from "react";

// /**
//  * NutrientsSection.jsx
//  *
//  * Usage:
//  *  - Place this file in your components folder and import: import NutrientsSection from './NutrientsSection';
//  *  - Requires Tailwind CSS configured in your project.
//  *
//  * Notes:
//  *  - Images are loaded from the URLs you provided.
//  *  - On small screens the content stacks vertically with heading/text/button ABOVE the table.
//  *  - On larger screens everything displays in a full-width table format.
//  */

// const infoRows = [
//   "Probiotic content",
//   "Organic nutrients",
//   "Scientific backing transparency",
//   "Taste profile",
//   "Ingredient sourcing transparency",
//   "Cognitive-enhancing ingredients",
//   "Gut–Brain Axis support",
//   "Avoids questionable fillers (e.g., gums, stevia)",
//   "Sustainability",
//   "Protein quality",
//   "Allergen-free",
//   "Digestibility",
// ];

// // icons for "present" and "absent" states (you provided two different svg URLs)
// const presentIcon =
//   "https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg";
// const absentIcon = "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg";

// // example columns configuration - middle column shows logo rather than text
// const columns = [
//   {
//     key: "brand",
//     title: "Information",
//     type: "labels", // renders the text labels (left-most)
//   },
//   {
//     key: "neogreens",
//     title: "",
//     type: "logo",
//     logo:
//       "https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg",
//     // for demo, set which rows are "present" (true) or "absent" (false)
//     presentRows: Array(infoRows.length).fill(true),
//   },
//   {
//     key: "plant",
//     title: "Plant-based",
//     type: "checks",
//     // a sample pattern of present/absent for demo; you can modify per real data
//     presentRows: [
//       true,
//       false,
//       true,
//       true,
//       true,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//     ],
//   },
//   {
//     key: "animal",
//     title: "Animal-based",
//     type: "checks",
//     presentRows: [
//       true,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//     ],
//   },
//   {
//     key: "whey",
//     title: "Whey",
//     type: "checks",
//     presentRows: [
//       false,
//       false,
//       false,
//       true,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//     ],
//   },
// ];

// export default function NutrientsSection() {
//   return (
//     <section className="py-12 bg-white w-full">
//       <div className="container mx-auto px-4">
//         {/* TOP: content section - always appears above table */}
//         <div className="text-center mb-10">
//           <div className="nutrients_wrap max-w-3xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-serif text-emerald-900 mb-4">
//               One Scoop. 60+ Nutrients. It's That Easy.
//             </h2>

//             <p className="text-gray-600 mb-6">
//               NeoGreens is built to take the confusion out of wellness. you
//               get the essentials – no synthetic ingredients, harsh formulas,
//               or hidden additives. just smart, science-backed nutrition that
//               respects your time and your trust.
//             </p>

//             <a
//               href="https://neogreens.com/product-page/"
//               target="_self"
//               rel="noreferrer"
//               className="inline-block px-6 py-3 rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50/40 disabled:opacity-60"
//               aria-disabled="true"
//               onClick={(e) => e.preventDefault()}
//             >
//               <span>Coming Soon</span>
//             </a>
//           </div>
//         </div>

//         {/* BOTTOM: nutrients comparison table */}
//         <div className="w-full">
//           {/* Container to allow horizontal scroll on small widths and keep rows aligned */}
//           <div className="nutrients_table_flex overflow-x-auto">
//             <div className="min-w-full lg:min-w-0 bg-transparent">
//               {/* Use CSS grid to align rows: first column labels + repeating columns */}
//               <div className="grid grid-cols-1 lg:grid-cols-[minmax(12rem,24rem)_repeat(4,1fr)] gap-4">
//                 {/* Header row (titles) */}
//                 <div className="hidden lg:block" />
//                 {columns.slice(1).map((col) => (
//                   <div
//                     key={col.key}
//                     className="title_table flex items-center justify-center py-2"
//                   >
//                     {col.type === "logo" ? (
//                       <img
//                         src={col.logo}
//                         alt="brand logo"
//                         className="h-8 object-contain"
//                         loading="lazy"
//                       />
//                     ) : (
//                       <h4 className="text-lg font-semibold text-gray-800">
//                         {col.title}
//                       </h4>
//                     )}
//                   </div>
//                 ))}

//                 {/* Left column header (information title) for mobile */}
//                 <div className="lg:hidden mb-2">
//                   <h4 className="text-lg font-semibold text-gray-800">
//                     Information
//                   </h4>
//                 </div>

//                 {/* For each column (excluding label col), render top cell on mobile too */}
//                 <div className="lg:hidden" />

//                 {/* Now render each row as a set of cells across the grid */}
//                 {infoRows.map((info, rowIndex) => (
//                   <React.Fragment key={info}>
//                     {/* label cell */}
//                     <div className="table_list p-3 border-b lg:border-b-0 lg:border-r border-gray-100">
//                       <p className="text-sm text-gray-700">{info}</p>
//                     </div>

//                     {/* for each column after labels, render an icon cell */}
//                     {columns.slice(1).map((col) => {
//                       const isPresent =
//                         col.presentRows && col.presentRows[rowIndex];
//                       const imgSrc = isPresent ? presentIcon : absentIcon;

//                       return (
//                         <div
//                           key={`${col.key}-${rowIndex}`}
//                           className="table_list p-3 flex items-center justify-center border-b lg:border-b-0 border-gray-100"
//                         >
//                           {col.type === "logo" ? (
//                             // for logo column we keep the logo centered only on the first row; otherwise empty/placeholder
//                             <div className="h-8 flex items-center justify-center">
//                               <img
//                                 src={col.logo}
//                                 alt=""
//                                 className="h-6 w-auto object-contain"
//                                 loading="lazy"
//                               />
//                             </div>
//                           ) : (
//                             <img
//                               src={imgSrc}
//                               alt={isPresent ? "present" : "absent"}
//                               loading="lazy"
//                               className="w-6 h-6"
//                               width="24"
//                               height="24"
//                             />
//                           )}
//                         </div>
//                       );
//                     })}
//                   </React.Fragment>
//                 ))}

//                 {/* SMALL: when viewport small, show column titles below as stacked headings for clarity */}
//                 <div className="lg:hidden col-span-full mt-4">
//                   <div className="flex gap-4 overflow-x-auto">
//                     {columns.slice(1).map((col) => (
//                       <div
//                         key={`mobile-${col.key}`}
//                         className="flex-shrink-0 w-40 p-2 bg-white/50 rounded-md shadow-sm flex items-center justify-center"
//                       >
//                         {col.type === "logo" ? (
//                           <img
//                             src={col.logo}
//                             alt="brand"
//                             className="h-6 object-contain"
//                             loading="lazy"
//                           />
//                         ) : (
//                           <span className="text-sm font-medium">
//                             {col.title}
//                           </span>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

/**
 * Improved NutrientsSection.jsx
 * Fixed logo rendering and improved accessibility
 */

const infoRows = [
  "Probiotic content",
  "Organic nutrients",
  "Scientific backing transparency",
  "Taste profile",
  "Ingredient sourcing transparency",
  "Cognitive-enhancing ingredients",
  "Gut–Brain Axis support",
  "Avoids questionable fillers (e.g., gums, stevia)",
  "Sustainability",
  "Protein quality",
  "Allergen-free",
  "Digestibility",
];

const presentIcon = "https://neogreens.com/wp-content/uploads/2025/06/User-Images.svg";
const absentIcon = "https://neogreens.com/wp-content/uploads/2025/06/User-gray.svg";

const columns = [
  {
    key: "brand",
    title: "Information",
    type: "labels",
  },
  {
    key: "neogreens",
    title: "NeoGreens",
    type: "logo",
    logo: "https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg",
    presentRows: Array(infoRows.length).fill(true), // All true for NeoGreens
  },
  {
    key: "plant",
    title: "Plant-based",
    type: "checks",
    presentRows: [
      true,   // Probiotic content
      false,  // Organic nutrients
      true,   // Scientific backing
      true,   // Taste profile
      true,   // Ingredient sourcing
      false,  // Cognitive-enhancing
      false,  // Gut-Brain Axis
      false,  // Avoids fillers
      false,  // Sustainability
      false,  // Protein quality
      false,  // Allergen-free
      false,  // Digestibility
    ],
  },
  {
    key: "animal",
    title: "Animal-based",
    type: "checks",
    presentRows: [
      true,   // Probiotic content
      false,  // Organic nutrients
      false,  // Scientific backing
      false,  // Taste profile
      false,  // Ingredient sourcing
      false,  // Cognitive-enhancing
      false,  // Gut-Brain Axis
      false,  // Avoids fillers
      false,  // Sustainability
      false,  // Protein quality
      false,  // Allergen-free
      false,  // Digestibility
    ],
  },
  {
    key: "whey",
    title: "Whey",
    type: "checks",
    presentRows: [
      false,  // Probiotic content
      false,  // Organic nutrients
      false,  // Scientific backing
      true,   // Taste profile
      false,  // Ingredient sourcing
      false,  // Cognitive-enhancing
      false,  // Gut-Brain Axis
      false,  // Avoids fillers
      false,  // Sustainability
      false,  // Protein quality
      false,  // Allergen-free
      false,  // Digestibility
    ],
  },
];

export default function NutrientsSection() {
  return (
    <section className="relative py-12 bg-[light-cream] w-full bg-[url(https://neogreens.com/wp-content/themes/neogreen/assets/img/home/ban-vec.svg)] bg-no-repeat bg-right-bottom bg-contain" 
    aria-labelledby="nutrients-heading">
      <div className="container mx-auto px-4">
        {/* Content Section */}
        <div className="text-center mb-10 mx-auto">
          <div className=" max-w-3xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-serif text-primary-teal font-semibold mb-4 font-stretch-ultra-condensed"
            >
              One Scoop. 60+ Nutrients. It's That Easy.
            </h2>

            <p className="text-gray-600 mb-6 ">
              NeoGreens is built to take the confusion out of wellness. You get the essentials – no synthetic ingredients, harsh formulas, or hidden additives. Just smart, science-backed nutrition that respects your time and your trust.
            </p>

            <button
              className="inline-block px-6 py-3 rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50/40 cursor-not-allowed opacity-60"
              disabled
              aria-label="Product coming soon"
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="w-full" role="region" aria-labelledby="comparison-heading">
          <h3 id="comparison-heading" className="sr-only">
            Nutrient Comparison Table
          </h3>
          
          <div className="overflow-x-auto">
            <div className="min-w-full bg-transparent">
              {/* Desktop Layout */}
              <div className="w-full flex justify-center items-center ">
              <div className="hidden w-1/3 lg:grid grid-cols-[minmax(12rem,1fr)_repeat(4,minmax(8rem,1fr))] gap-0 border border-gray-200 rounded-lg">
                
                {/* Header Row */}
                <div className="p-4 bg-gray-50 border-b border-r border-gray-200">
                  <h4 className="text-2xl font-medium text-gray-800"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {columns[0].title}
                  </h4>
                </div>
                
                {columns.slice(1).map((col) => (
                  <div
                    key={col.key}
                    className={`p-2 border-b border-gray-200 flex items-center justify-center ${col.type === "logo" ?  "bg-primary-teal rounded-t-xl"  :  "bg-gray-50" }`}
                  >
                    {col.type === "logo" ? (
                      <img
                        src={col.logo}
                        alt="NeoGreens"
                        className="h-6 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <h4 className="text-2xl font-medium text-gray-800 text-center" 
                      style={{ fontFamily: '"Playfair Display", serif' }}
                      >
                        {col.title}
                      </h4>
                    )}
                  </div>
                ))}

                {/* Data Rows */}
                {infoRows.map((info, rowIndex) => (
                  <React.Fragment key={info}>
                    {/* Feature Label */}
                    <div className="p-4 border-b border-r border-gray-200 bg-[#ffffff]">
                      <p className="text-lg text-gray-700 font-medium"
                       style={{ fontFamily: '"Raleway", serif' }}
                      >{info}</p>
                    </div>

                    {/* Check Columns */}
                    {columns.slice(1).map((col) => {
                      const isPresent = col.presentRows[rowIndex];
                      const imgSrc = isPresent ? presentIcon : absentIcon;
                      
                      return (
                        <div
                          key={`${col.key}-${rowIndex}`}
                          className={`p-4 border-b border-gray-200  flex items-center justify-center ${col.presentRows[1] ? 'bg-[#f9f4e8]' : 'bg-white'}`}
                          aria-label={`${info} ${isPresent ? 'available' : 'not available'} in ${col.title}`}
                        >
                          {col.type === "logo" ? (
                            // Only show checkmark for logo column, not the logo itself
                            <img
                              src={imgSrc}
                              alt={isPresent ? "Available" : "Not available"}
                              className="w-6 h-6"
                              loading="lazy"
                            />
                          ) : (
                            <img
                              src={imgSrc}
                              alt={isPresent ? "Available" : "Not available"}
                              className="w-6 h-6"
                              loading="lazy"
                            />
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
              </div>
              

       
              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  {/* Fixed Information Column */}
                  <div className="flex-shrink-0 bg-white w-48 border-r border-gray-200">
                    {/* Header */}
                    <div className="p-4 bg-gray-50 border-b border-gray-200 h-20 flex items-center ">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Information
                      </h4>
                    </div>
                    
                    {/* Info Rows */}
                    {infoRows.map((info) => (
                      <div
                        key={`label-${info}`}
                        className="p-4 border-b border-gray-200 h-14 flex items-center"
                      >
                        <span className="text-sm text-gray-700 font-medium">
                          {info}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Scrollable Columns */}
                  <div className="overflow-x-auto flex-1">
                    <div className="flex">
                      {columns.slice(1).map((col) => (
                        <div
                          key={`mobile-${col.key}`}
                          className="flex-shrink-0 w-32 border-l border-gray-200"
                        >
                          {/* Header */}
                          <div className={`p-3 border-b border-gray-200 h-20 flex items-center justify-center ${col.type === "logo" ? "bg-primary-teal" : "bg-gray-50"}`}>
                            {col.type === "logo" ? (
                              <img
                                src={col.logo}
                                alt="NeoGreens"
                                className="h-6 object-contain"
                                loading="lazy"
                              />
                            ) : (
                              <h4 className="text-sm font-semibold text-gray-800 text-center">
                                {col.title}
                              </h4>
                            )}
                          </div>
                          
                          {/* Data Rows */}
                          {infoRows.map((info, rowIndex) => {
                            const isPresent = col.presentRows[rowIndex];
                            const imgSrc = isPresent ? presentIcon : absentIcon;
                            
                            return (
                              <div
                                key={`mobile-${col.key}-${rowIndex}`}
                                className={`p-4 border-b border-gray-200 h-14 flex items-center justify-center ${col.type === "logo" ? 'bg-[#f9f4e8]' : 'bg-white'}`}
                              >
                                <img
                                  src={imgSrc}
                                  alt={isPresent ? "Available" : "Not available"}
                                  className="w-5 h-5"
                                  loading="lazy"
                                />
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}