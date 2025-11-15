import React from 'react'
import { motion } from "framer-motion";
import Home from "../ImagesCompressed/house-with-lit-up-window-dark-background.jpg"
import Home1 from "../ImagesCompressed/outdoor-summer-brightly-cumulonimbus-scene-climate.jpg"
import Home2 from "../ImagesCompressed/aerial-view-private-houses-with-solar-panels-roofs.jpg"
import Home4 from "../ImagesCompressed/11088894.png"


const Home3 = () => {
  return (
    <div className='mt-11'>
        {/* sectoon 1 */}
        <div className=' flex justify-center items-center text-4xl font-bold  text-blue-500'>
        <h1>Building Aminities</h1>
       </div>
        {/* a */}
        <div className='flex flex-wrap justify-center gap-8 mt-10'>
        <div>
            <div className=' w-72 rounded-lg p-2 shadow-inner bg-slate-200 flex-col flex justify-center items-center h-44 hover:bg-blue-600 hover:text-white'>
                <div className=' bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center'>
                    <i className="fa-solid fa-car text-2xl  text-blue-800"></i>
                </div>
                 <h1>Vehicle shelter</h1>
            </div>
        </div>
         {/* a dhamad */}
         {/* b */}
         <div>
            <div className=' h-44 w-72 rounded-lg p-2 shadow-inner bg-slate-200 flex-col flex justify-center items-center hover:bg-blue-600 hover:text-white'>
                <div className=' bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center'>
                    <i className="fa-solid fa-water-ladder text-blue-800"></i>
                </div>
                 <h1>Swimming pool</h1>
            </div>
        </div>
         {/* b dhamaad */}
         {/* c */}
         <div>
            <div className='h-44 w-72 rounded-lg p-2 shadow-inner bg-slate-200 flex-col flex justify-center items-center hover:bg-blue-600 hover:text-white'>
                <div className=' bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center'>
                    <i className="fa-solid fa-shield-halved text-blue-800"></i>
                </div>                  
                 <h1>Private Security</h1>
            </div>
        </div>
         {/* c dhamd*/}
         {/* d  */}
         <div>
            <div className='h-44 w-72 rounded-lg p-2 shadow-inner bg-slate-200 flex-col flex justify-center items-center hover:bg-blue-600 hover:text-white'>
                <div className=' bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center'>
                    <i className="fa-solid fa-house-medical-flag text-blue-800"></i>
                </div>                  
                 <h1>Medical Center</h1>
            </div>
        </div>
         {/* d dhamad  */}
            </div>
        {/* sectoon 1 dham */}



           {/* section 2  */}
                
        {/* a */}
        < motion.div 
         initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0.7 }}
                transition={{ duration: 3, delay:0.6}}
              viewport={{ once: true }}
         className='flex flex-wrap justify-center gap-8 mt-10'>
        <div>
            <div className='h-44 w-72 rounded-lg p-2 shadow-inner bg-slate-200 flex-col flex justify-center items-center hover:bg-blue-600 hover:text-white'>
                <div className=' bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center'>
                <i className="fa-solid fa-layer-group"></i>
                </div>
                 <h1>Library Area</h1>
            </div>
        </div>
         {/* a dhamad */}
         {/* b */}
         <div>
            <div className='h-44 w-72 rounded-lg p-2 shadow-inner bg-slate-200 flex-col flex justify-center items-center hover:bg-blue-600 hover:text-white'>
                <div className=' bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center'>
                    <i className="fa-solid fa-bed"></i>
                </div>
                 <h1>king size Beds </h1>
            </div>
        </div>
         {/* b dhamaad */}
         {/* c */}
         <div>
            <div className='h-44 w-72 rounded-lg p-2 shadow-inner bg-slate-200 flex-col flex justify-center items-center hover:bg-blue-600 hover:text-white'>
                <div className=' bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center'>
                    <i className="fa-solid fa-house"></i>
                </div>                  
                 <h1>Smart Homes</h1>
            </div>
        </div>
         {/* c dhamd*/}
       
            </motion.div>
           {/* section 2  dhamad*/}




           {/* section 3 */}

<div className=' w-full shadow-lg shadow-inherit mt-24'>
    <div className='flex  justify-center flex-wrap'>
        <div className=' w-[25rem]'>
     <h1 className='font-bold text-blue-700 text-2xl'> RAMAS DREAM HOMES
        INTERNATIONAL  Policies</h1>
    <div className='border border-blue-800 w-36 ml-20'></div>

        <h1 className='text-xl mt-8 leading-loose'>
             At RAMAS DREAM HOMES INTERNATIONAL  L.T.D, strict adherence to policies
       is prioritized. The company places a strong emphasis on following its
    established policies and guidelines. This commitment ensures that all
     operations and services provided by RAMAS DREAM HOMES
     INTERNATIONAL  align with the set standards, regulations, and ethical
     practices. By strictly adhering to policies, RAMAS DREAM HOMES
    INTERNATIONAL  maintains transparency, accountability, and credibility in
   its operations, ultimately benefiting its clients and stakeholders 
        </h1>
   </div>
    
     <div className='flex  gap-10 flex-wrap justify-center'>
        <img className='w-80 h-[40rem] object-cover rounded-lg hover:scale-105 transition-transform duration-300' src={Home} alt="" />
       <div>
         <img className='w-80 h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300' src={Home1} alt="" />
         <img className='w-80 h-96 object-cover mt-4  rounded-lg hover:scale-105 transition-transform duration-300   ' src={Home2} alt="" />
       </div>

     </div>
 </div>
</div>

           {/* section 3 dhaad*/}
           {/* section 4 */}
            <div className='flex justify-center text-3xl font-bold mt-11 text-blue-500'>
                 <h1> RAMAS DREAM HOMES INTERNATIONAL ’s Policies</h1>
            </div>
            <div className='flex justify-center gap-20 flex-wrap'>
                <div className='text-xl mt-3'>
                    <h1> ✅ Quality Assurance Policy</h1>
                    <h1> ✅ Health and Safety Policy</h1>
                    <h1> ✅ Environmental Policy</h1>
                    <h1> ✅ Employee Training and Development Policy</h1>
                    <h1> ✅ Customer Satisfaction Policy</h1>
                    <h1> ✅ Sustainability Policy</h1>
                    <h1> ✅ Compliance and Legal Policy</h1>
                    <h1> ✅ Project Management and Scheduling Policy</h1>
                    <h1> ✅ Supplier and Material Sourcing Policy</h1>
                    <h1> ✅ Risk Management Policy</h1>
                    <h1> ✅ Data Security and Confidentiality Policy</h1>
                    <h1> ✅ Continuous Improvement Policy</h1>
                    <h1> ✅ Equipment Maintenance Policy</h1>
                    <h1> ✅ Ethics and Integrity Policy</h1>
                </div>
                 <div className=' mt-16 hover:scale-105 transition-transform duration-300 '>
                    <img className='w-[30rem] rounded-lg h-80 object-cover ' src={Home4} alt="" />
                    
                 </div>
            </div>
           {/* scttion 4 dhamaad  */}
     </div>
  )
}

export default Home3
