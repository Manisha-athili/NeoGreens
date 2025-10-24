import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-[2000] top-0 border-b border-border-cream bg-[#2C4143] py-3 border-opacity-60">
      <nav className="flex items-center justify-between max-w-[1140px] mx-auto px-4 lg:px-0">
        <Link to="/" className="flex-shrink-0">
          <img 
            src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg" 
            alt="NeoGreens Logo" 
            className="h-8"
          />
        </Link>
        
        <button 
          className="lg:hidden w-6 h-6 mr-3 focus:outline-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="block w-full h-0.5 bg-white mb-1.5"></span>
          <span className="block w-full h-0.5 bg-white mb-1.5"></span>
          <span className="block w-full h-0.5 bg-white"></span>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex items-center absolute lg:relative top-full left-0 w-full lg:w-auto bg-[#2C4143] lg:bg-transparent`}>
          <ul className="flex flex-col lg:flex-row items-center gap-8 p-4 lg:p-0 text-center lg:text-left w-full lg:w-auto">
            <li>
              <Link 
                to="/about" 
                className="text-white text-lg font-medium hover:border-b hover:border-white pb-1 block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-white text-lg font-medium hover:border-b hover:border-white pb-1 block"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="text-border-cream text-lg font-medium border rounded-full border-border-cream px-5 py-4 hover:bg-[rgba(239,236,214,0.1)] border-opacity-20 block opacity-30"
              >
                Coming Soon
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


// import React from 'react';

// function Navbar() {
//   return (
//     <div className="bg-primary-teal text-white font-sans">
//         <header className="bg-primary-teal py-2 px-4 flex justify-between items-center fixed w-full z-10">
//         {/* <div className="text-xl md:text-2xl font-light text-gray-200"></div>
//          */}
//          <img src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg" alt="" />
         
//         <nav className="flex space-x-6 md:space-x-8">
//           <a href="#" className="text-sm md:text-base hover:text-teal-300">About Us</a>
//           <a href="#" className="text-sm md:text-base hover:text-teal-300">Contact Us</a>
//           <a href="#" className="bg-primary-teal text-light-green border border-light-green font-semibold py-4 px-6 md:py-4 md:px-6 rounded-full text-xs md:text-sm">Coming Soon</a>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Navbar;
