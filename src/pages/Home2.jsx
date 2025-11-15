import React from 'react'
import images from "../ImagesCompressed/sawir 1-01.jpg"
import tech from "../ImagesCompressed/TechnoA2.png"
import imge from "../ImagesCompressed/sawiraka 2ad-01.jpg"
import house  from "../ImagesCompressed/house-isolated-field.jpg"
import house2  from "../ImagesCompressed/4272148.jpg"
import tous1  from "../ImagesCompressed/21.png"
import tous2  from "../ImagesCompressed/22.png"
import tous3 from "../ImagesCompressed/23.png"
import house3  from "../ImagesCompressed/logo_make_11_06_2023_8.jpg"
import house4  from "../ImagesCompressed/3d-rendering-house-model.jpg"
import { motion } from "framer-motion";

const Home2 = () => {
  return (
    <div className='mt-10'>
             <div>
                  {/* sawirka 1aad */}
    <div className="pt-12 px-6 md:px-12 lg:px-20 ">
      <div className="flex flex-col lg:flex-row gap-12">

        {/* First Section */}
        <div className="flex-1 space-y-4">
          <img
            className="rounded-xl shadow-lg w-full h-64 object-cover   hover:scale-105 transition-transform duration-300"
            src={images}
            alt="Ramaas Overview 1"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
            Overview of RAMAS DREAM HOMES INTERNATIONAL
          </h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            RAMAS DREAM HOMES INTERNATIONAL is a leading provider of
            prefabricated construction solutions, established in 2016,
            specializing in designing, manufacturing, and installing
            high-quality modular buildings. We serve a wide range of sectors,
            including residential, commercial, and industrial, with fast,
            cost-effective, and sustainable building options. Our expert team
            utilizes the latest technology to ensure durability and efficiency
            in every project, delivering custom designs and a seamless
            experience from start to finish.
          </p>
        </div>
   {/* midle section */}
      <div>
        <img className='w-14 h-14 mt-24 animate-spin hidden lg:block' src={tech} alt="" />
      </div>
   {/* midle section */}
        {/* Second Section */}
        <div className="flex-1 space-y-4">
          <img
            className="rounded-xl w-full h-64 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            src={imge}
            alt="Ramaas Overview 2"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
            Mission Statement
          </h1>
          <p className="text-gray-700 leading-relaxed text-justify">
           Our mission is to deliver high-quality, efficient, and cost-effective
           prefabricated construction solutions that meet client needs and support
 sustainable development. We aim to enhance living and working spaces
 by providing innovative, precisely engineered structures that adhere to
 the highest standards of safety and sustainability. Leveraging advanced
 technology and a skilled team, we ensure projects are executed with
 efficiency and flexibility, committed to on-time delivery and complete
 customer satisfaction
          </p>
        </div>
      </div>
    </div>
 {/* sawirka 1aad  dhamaad*/}
     
  </div> 
 {/* section 2 */}
  <div className='flex justify-center text-3xl font-semibold text-blue-500'>
      <h1 >Core values</h1>
      <div className='border border-blue-500 ml-2 '></div>
      <div className='border border-blue-500 ml-2 '></div>
  </div>
  {/*  jjjjjj */}
    <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-10 mt-10 px-4 lg:w-full ">
      {/* Card A */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1}}
        viewport={{ once: true }}
        className="bg-slate-100 shadow-2xl rounded-2xl w-72 p-4 mt-6 hover:scale-105 hover:shadow-blue-400 transition-transform duration-300"
      >
        <img
         className="pt-6 pl-10"
          src={tous1}
          alt="Efficiency"
        />
        <div className="hover:bg-blue-500 rounded-xl hover:text-white p-2 transition-colors duration-300">
            <h1 className="text-2xl font-bold text-center">
            Efficiency and Precision
            </h1>
            <p className="text-center leading-relaxed">
            Emphasis on delivering high-quality structures with speed and
            accuracy. Prefabrication allows for controlled production and
            minimizes construction time on-site.
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
          className="pt-6 pl-10"
          src={tous2}
          alt="Sustainability"
        />
        <div className="hover:bg-blue-500 rounded-xl hover:text-white p-2 transition-colors duration-300">
          <h1 className="text-2xl font-bold text-center">Sustainability</h1>
          <p className="text-center leading-relaxed">
            Commitment to eco-friendly practices, such as reducing waste, using
            recyclable materials, and designing energy-efficient buildings.
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
          className="pt-6 pl-10"
          src={tous3}
          alt="Innovation"
        />
        <div className="hover:bg-blue-500 rounded-xl hover:text-white p-2 transition-colors duration-300">
          <h1 className="text-2xl font-bold text-center">
            Innovation and Technology
          </h1>
          <p className="text-center leading-relaxed">
            Constantly seeking new technologies and methods in prefabrication to
            improve design, functionality, and production processes.
          </p>
        </div>
</motion.div>
</div>
{/* section 2 dhamaad  */}
    {/* section 3 */}
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
     whileInView={{ opacity: 1, y: 0.7 }}
    transition={{ duration: 3, delay:0.6}}
    viewport={{ once: true }}
    className='mt-9 flex  flex-wrap justify-center gap-6 ' >
  {/* a */}
  <div
  className='w-72 bg-gray-200 rounded-lg p-2  shadow-lg '>
     <div className='relative'>
      <img  className='transition-transform duration-300  object-cover w-full h-full rounded-lg hover:scale-105 opacity-100' 
      src={house} alt="" />
      <div className='absolute top-0 mt-2'>
      <button className='  py-1 px-5 rounded-lg bg-blue-500 text-white ' >Customer Satisfaction</button>
      <i className="fa-solid fa-heart text-red-400 ml-10 text-xl"></i>
     </div>
    </div>
      <div className='leading-loose'>
         <h1 >  Focusing on understanding and
          meeting client needs through tailored solutions and exceptional customer service</h1>
       </div>
      </div>
      {/* a dhamaad */}
      {/* b */}
     <div
      className='w-72 bg-gray-200 rounded-lg p-2  shadow-lg '>
      <div className='relative'>
      <img  className='transition-transform duration-300  object-cover w-full h-full rounded-lg hover:scale-105 opacity-100' 
      src={house2} alt="" />
      <div className='absolute top-0 mt-2'>
       <button className='  py-1 px-5 rounded-lg bg-blue-500 text-white'>Quality Control</button>
        <i className="fa-solid fa-heart text-red-400 ml-20 text-xl"></i>
        </div>
      </div>
      <div className='leading-loose'>
       <h1 >Maintaining rigorous standards in every aspect of construction, from materials to final assembly, ensuring durability and safety</h1>
     </div>
     </div>
    {/* b dhamad*/}
    {/* c  */}
    <div
     className='w-72 bg-gray-200 rounded-lg p-2  shadow-lg '>
    <div className='relative'>
    <img  className='transition-transform duration-300  object-cover w-80 h-40 rounded-lg hover:scale-105 opacity-100' 
    src={house3} alt="" />
      <div className='absolute top-0 mt-2'>
      <button className='  py-1 px-5 rounded-lg bg-blue-500 text-white ' >Collaboration and Teamwork</button>
    </div>
   </div>
   <div className='leading-loose'>
   <h1 > Encouraging a
 collaborative environment
 among employees,
 contractors, and clients to
 achieve project goals
 efficiently.</h1>
 </div>
  </div>
   {/* c  dhamaad  */}
   {/* d */}
    <div className='w-72 bg-gray-200 rounded-lg p-2  shadow-lg '>
      <div className='relative'>
       <img  className='transition-transform duration-300  object-cover w-80 h-40 rounded-lg hover:scale-105 opacity-100' 
       src={house4} alt="" />
      <div className='absolute top-0 mt-2'>
      <button className='  py-1 px-5 rounded-lg bg-blue-500 text-white ' > Safety</button>
    </div>
    </div>
<div className='leading-loose'>
<h1 > Prioritizing the safety of
 employees and clients,
 both in the production
 facility and on the
 construction site,
 adhering to best safety
 practices and regulations</h1>
 </div>
 </div>
 {/* d dmaad */}
 </motion.div>
 {/* section 3 dhamaad*/}
 </div>
  )
}

export default Home2
