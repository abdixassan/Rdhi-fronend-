import React from 'react'
import AboutIMage from "../ImagesCompressed/medium-shot-engineers-talking-outdoors.jpg"
import AboutIMage2 from "../ImagesCompressed/details-nnn.jpg"
import { motion } from "framer-motion";
import tous2  from "../ImagesCompressed/3459689.jpg"
import tous3  from "../ImagesCompressed/3d-windmill-project-saving-energy.jpg"
import tous4  from "../ImagesCompressed/3d-render-robot-holding-solar-panel-grassy-glboe.jpg"
import Foter from "../Headers/Foter"




const GreenEnergy = () => {
  return (
    <div>
      <div className=' w-full relative'>
                        <img className='w-full h-96 object-center' src={AboutIMage} alt="" />
                      <div>
                        
                         <div className='absolute top-0 text-white mt-48'>
                           <button className='text-3xl ml-4 font-bold '>What We Do</button>
                            <div className='flex gap-3 mt-4 text-xl '>
                             <h1 className='hover:text-blue-600 ml-5'> <i class="fa-solid fa-house text-[19px] text-blue-500"></i>
                             Home
                              <i class="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                            <h1 className='font-bold'>Green Energy</h1>
                            </div>
                         </div>
                      </div>
                      </div>

                      {/* section dhamaad  */}
                      {/* section 2 bilaaw */}
    <div className='bg-white shadow-lg  opacity-90 mt-9 p-2 '>
                                   <div className=' flex justify-center gap-3 flex-wrap'>
                                    
                                    <div>
                                      <button className='bg-gray-200 text-blue-500 rounded-lg py-1 px-3 '>Green  Energy</button>
                                      <h1 className='text-4xl font-bold text-green-900'>Green Energy Solar </h1>
                                      <h1 className='mt-8'>
                                        Solar companies can provide solar panels, inverters, batteries, <br /> and other related services to assist individuals and businesses <br />  in transitioning to sustainable energy sources. </h1>
                                        
                                         <div className='flex  mt-10'>
                                          <div className='bg-green-400 w-1 h-24'></div>
                                          <div className='bg-blue-100 p-4 rounded-lg'>
                                            <h1 className='sm:w-[39rem]  p-4 flex-1 leading-relaxed  '>
                                            At RDHI, we provide innovative solar solutions, including high-quality panels, efficient inverters, and reliable batteries. We empower individuals and businesses to transition to sustainable energy, reduce carbon footprints, and build a greener future. Our client-focused approach ensures tailored solutions for every need, harnessing the power of renewable energy to transform lives. Join us in creating a sustainable tomorrow.
                                            </h1>
                                          </div>
                                         </div>
                                           
                                           
                                           
                                    </div>
                                    <div>
                                       <img className='w-[27rem] rounded-lg h-96 object-fill mt-16' src={AboutIMage2} alt="" />
                                    </div>
                                   </div>
                             </div>
                      {/* sectio 2 dhamaad */}
                      {/* section 3  */}
      <div className='flex justify-center text-3xl font-semibold text-blue-500 mt-10'>
      <h1 >Core values</h1>
      <div className='border border-blue-500 ml-2 '></div>
      <div className='border border-blue-500 ml-2 '></div>
     </div>
      


          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-10 mt-3 p-6">
      {/* Card A */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1}}
        viewport={{ once: true }}
        className="bg-slate-100 shadow-2xl w-80 rounded-2xl   p-4 mt-6 hover:scale-105 hover:shadow-blue-400 transition-transform duration-300"
      >
        <img
         className=" h-72  rounded-lg w-80"
          src={tous2}
          alt="Efficiency"
        />
        <div className="hover:bg-blue-500 rounded-xl hover:text-white p-2 transition-colors duration-300 mt-7">
            <h1 className="text-2xl font-bold text-center">
            Commitment to Sustainable Energy
            </h1>
            <p className="text-center leading-relaxed">
            We promote renewable energy solutions to reduce carbon footprints for individuals and businesses.
            </p>
        </div>
      </motion.div>
{/* Card B */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="bg-slate-100 shadow-2xl rounded-2xl w-72 p-4 mt-6 hover:scale-105 hover:shadow-blue-400 transition-transform duration-300"
      >
        <img
          className="rounded-lg h-72 w-80"
          src={tous3}
          alt="Sustainability"
        />
        <div className="hover:bg-blue-500 rounded-xl hover:text-white p-2 transition-colors duration-300 mt-5">
          <h1 className="text-2xl font-bold text-center">Quality and Innovation</h1>
          <p className="text-center leading-relaxed">
           Our products utilize cutting-edge technology for reliability and efficiency in solar energy.
          </p>
        </div>
</motion.div>
 {/* Card C */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="bg-slate-100 shadow-2xl rounded-2xl w-72 p-4 mt-6 hover:scale-105 hover:shadow-blue-400 transition-transform duration-300"
      >
        <img
          className=" h-72 w-80 rounded-lg"
          src={tous4}
          alt=""
        />
        <div className="hover:bg-blue-500 rounded-xl hover:text-white p-2 transition-colors duration-300 mt-4">
          <h1 className="text-2xl font-bold text-center">
             Customer-Centric Service
          </h1>
          <p className="text-center leading-relaxed">
            We provide tailored solutions and support to ensure a smooth transition to sustainable energy.
          </p>
        </div>
</motion.div>
</div>

                      {/* section 3 dhamaad */},

                <Foter/>      
    </div>
  )
}

export default GreenEnergy
