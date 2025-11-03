import React, { useEffect, useState } from 'react'
import images from "../Images/sawir 1-01.jpg"
import Foter from '../Headers/Foter'
import axios from 'axios'

const Completeproject = () => {
const [getDate , SetDate ] =useState([])


  const handleget = () =>{
     axios.get("https://rdhi-backend-2.onrender.com/read/completeproject").then((res) =>{
       SetDate(res.data)
       handleget()
    })
  }

 useEffect(() =>{
  handleget()
 },[])

  return (
    <div>
        {/* section one  */}
         <div className=' w-full  bg-gray-50 shadow-lg h-72 relative'>
                  
               <div>
                   <div className='absolute top-0  mt-20'>
                    <button className='text-3xl ml-4 font-bold  '>Completed </button>
                     <div className='flex gap-3 mt-4 text-xl '>
                      <h1 className='hover:text-blue-600 ml-5'> <i className="fa-solid fa-house text-[19px] text-blue-500"></i>
                      Home
                       <i class="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                     <h1 className='font-bold'>Completed project</h1>
                     </div>
                  </div>
               </div>
               </div>
        {/* section dhamaad */}

 <div className='mt-10 flex justify-center text-3xl text-blue-600'>
          <h1> Last Update Completed Projects Post</h1>
          </div>



      <div className=' flex justify-center flex-wrap gap-4'>
        {/* a */}
         {
          getDate.map((item) =>{
            
            return <div className="p-7">
                <img
                  className="rounded-xl shadow-lg w-full h-64 object-cover   transition-transform duration-300"
                  src={`https://rdhi-backend-2.onrender.com/Allimage/${item.prImage}`}
                  alt="Ramaas Overview 1"
                />
                <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
                  Completed project

                </h1>
                <p className="text-gray-700 leading-relaxed w-96 text-justify">
                 {item.Announcement}
                </p>
              </div>

          })
         }
              {/* a dhaamd  */}
             
      </div>

       <Foter/>
    </div>
  )
}

export default Completeproject
