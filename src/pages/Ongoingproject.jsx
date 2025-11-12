import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Foter from '../Headers/Foter'
import image1 from "../Images/beautiful-landscape-contained-photo-frame.jpg"
import image2 from "../Images/aerial-view-private-houses-with-solar-panels-roofs.jpg"


const Ongoingproject = () => {

  

  return (
    <div>
            <div className=''>



{/* section 1 */}
<div className='w-full  bg-gray-50 shadow-lg h-72 relative'>
                  
               <div>
                   <div className='absolute top-0  mt-20'>
                    <button className='text-3xl ml-4 font-bold  '> Ongoing project</button>
                     <div className='flex gap-3 mt-4 text-xl '>
                      <h1 className='hover:text-blue-600 ml-5'> <i class="fa-solid fa-house text-[19px] text-blue-500"></i>
                      Home
                       <i class="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                     <h1 className='font-bold'>Ongoing project</h1>
                     </div>
                  </div>
               </div>
               </div>


 <div className='mt-10 flex justify-center text-3xl text-blue-600'>
          <h1> Last Update Ongoing Projects Post</h1>
          </div>

{/* section 2 */}




            {/* a */}
              <div className='flex flex-wrap gap-10 justify-center'>
            <div className=' mt-7   rounded-lg  h-auto  p-7 shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 transition-transform duration-300'>
             <div className='flex flex-wrap sm:flex-row flex-col  gap-4'>
            <img className='w-52 h-40 rounded-lg' src={image1} alt="" />                
            <div> 
           <h1 className='font-bold text-xl text-blue-600'>Ongoing project</h1>
           <div className=''>
           <h1 className='sm:w-60 w-full'>
            <h1>Discover RADHI’s ongoing project — where modern design, comfort, and quality unite. Every home is being crafted to offer elegance and practical living for your future lifestyle</h1>
           <div className='flex'>
          <i className="fa-solid fa-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full"></i>
          <i className="fa-solid fa-cart-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center ml-2 rounded-full"></i>
          <i className="fa-solid fa-heart bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full ml-2"></i>
           </div>
            
           </h1>
         </div> 
        </div>
       </div>
           </div>
               {/* b */}
              <div className='flex flex-wrap gap-10 justify-center'>
            <div className=' mt-7   rounded-lg  h-auto  p-7 shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 transition-transform duration-300'>
             <div className='flex flex-wrap sm:flex-row flex-col  gap-4'>
            <img className='w-52 h-40 rounded-lg' src={image2} alt="" />                
            <div> 
           <h1 className='font-bold text-xl text-blue-600'>Ongoing project</h1>
           <div className=''>
           <h1 className='sm:w-60 w-full'>
            <h1>Explore RADHI’s current project — blending 
              contemporary design, comfort, and top quality.
               Each home is thoughtfully developed to combine 
               elegance with everyday practicality for your future</h1>
           <div className='flex'>
          <i className="fa-solid fa-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full"></i>
          <i className="fa-solid fa-cart-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center ml-2 rounded-full"></i>
          <i className="fa-solid fa-heart bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full ml-2"></i>
           </div>
            
           </h1>
         </div> 
        </div>
       </div>
           </div>
            
            </div>
            {/* b dhaamad */}
            </div>
            {/* a dhaamd */}
         
            </div>
            <Foter/>
    </div>
  )
}

export default Ongoingproject
