import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Home2 from "./Home2";
import Home3 from "./Home3";
import home5 from "../Images/urban-city-architecture.jpg"
import home6 from "../Images/view-udaipur-city-from-city-palace-rajasthan-india.jpg"
import home7 from "../Images/outdoor-summer-brightly-cumulonimbus-scene-climate.jpg"
import {Link } from "react-router-dom"
import Foter from "../Headers/Foter";

const Home = () => {

    const images = [home5, home6 ,home7];
    const [current, setCurrent] = useState(0);
    
      useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000); // 3000ms = 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="">
        <div className="relative">
          {/* Background Image */}
          <img
            className="sm:h-[30rem] md:h-screen lg:h-screen  w-full  object-cover sm:object-center"
            src={images[current]}
            alt="City View"
          />

          {/* Overlay / Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:absolute sm:ml-[50%] sm:bottom-0 sm:flex sm:justify-center
               md:absolute md:ml-[50%] md:bottom-0 md:flex md:justify-center
               lg:absolute lg:ml-[60%] lg:bottom-0 lg:flex lg:justify-center "
          >
            <div className="flex flex-wrap justify-center bg-gray-300 shadow-xl w-full sm:max-w-[60rem] p-4 rounded-lg gap-4 mb-6">
              <motion.select
                // whileHover={{ scale: 1.05 }}
                className="bg-blue-500 rounded-lg p-3 outline-none text-white flex-1 min-w-[10rem]"
              >
                <option value="">Choose Area</option>
                <option value="">Outside City</option>
                <option value="">Inside City</option>
              
              </motion.select>

              <motion.select
                // whileHover={{ scale: 1.05 }}
                className="bg-blue-500 rounded-lg p-3 outline-none text-white flex-1 min-w-[10rem]"
              >
                <option value="">Property Type</option>
                <option value="">Apartment</option>
                <option value="">Family Home</option>
              </motion.select>

              <motion.select
                // whileHover={{ scale: 1.05 }}
                className="bg-blue-500 rounded-lg p-3 outline-none text-white flex-1 min-w-[10rem]"
              >
                <option value="">Property House</option>
                <option value="">Rent</option>
                <option value="">Sale</option>
              </motion.select>

              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex-1 min-w-[10rem]"
              >
              <Link to="/Shop">Find Now <i className="fa-solid fa-up-right-from-square "></i></Link>
               </button>
            </div>
          </motion.div>
        </div>
      </div>
       <Home2/>
       <Home3/>
       <Foter/>
    </div>
  );
};

export default Home;
