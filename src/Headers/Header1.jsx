import React from 'react';
// import img from '../images/flag-somalia.jpg';

const Header1 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[linear-gradient(135deg,#124170_0%,#F7F7F7_100%)]
      sm:h-7 px-4 sm:px-6 py-2 sm:py-0 text-xs sm:text-sm md:text-base gap-2 sm:gap-0">
      
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3 text-white font-semibold">
        <i className="fa-solid fa-phone-volume text-sm sm:text-base"></i>
        <a href="https://wa.me/4915212392531">+ 49 15212392531</a>
        </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4 text-white">
        <i className="fa-solid fa-mobile text-black text-sm sm:text-base"></i>
        <h1 className="hidden md:block hover:text-blue-600 text-black">Contact</h1>
        {/* <img className="w-7 h-5 sm:w-8 sm:h-6 rounded hover:scale-105 transition-transform duration-200" src={img} alt="Somalia Flag" /> */}
      </div>
    </div>
  );
};

export default Header1;