import React from 'react'
import Foter from '../Headers/Foter'
import Dashpot from '../Components/Dashpot'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Viewcompleteproject = () => {
  // const navigate  = useNavigate()

  const[getDate , setDate] =useState([])
  

  const handleget = () =>{
     axios.get("https://rdhi-backend-2.onrender.com/read/completeproject").then((res) =>{
       setDate(res.data)
        // handleget()
     }) 
  }

  const hanldelde =(id) =>{
  axios.delete(`https://rdhi-backend-2.onrender.com/delate/completeproject/${id}`).then(() =>{
    alert("✅ Deleted successfully! ")
        handleget()
  })
}


  useEffect(() =>{
    handleget()
  },[])

  return (
    <div className=''>
       <div className=''>
        {/* all flex */}
        <div className='fixed top-16 left-0 '>
             <Dashpot/>
        </div>
        <div className='sm:ml-80  z-10 relative'>
          
        <div className='flex justify-center gap-7 flex-wrap z-30'>
             {/* a */}
     {
         getDate.map((item) =>{
            return  <div className=' mt-7   rounded-lg  h-auto  p-7 shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 transition-transform duration-300'>
           <div className='flex flex-wrap sm:flex-row flex-col  gap-4'>
            <img className='w-52 h-40 rounded-lg' src={`https://rdhi-backend-2.onrender.com/Allimage/${item.prImage}`} alt="" />                
        <div>
<h1 className='font-bold text-xl text-blue-600'>Complete projected</h1>
<div className=''>
<h1 className='sm:w-60 w-full'>
     {item.Announcement}
        <div className='flex'>
           <i className="fa-solid fa-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full"></i>
          <i className="fa-solid fa-cart-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center ml-2 rounded-full"></i>
          <i className="fa-solid fa-heart bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full ml-2"></i>
         </div>
             <div className='space-x-3 mt-3 ml-3'>
                  <i onClick={ () => hanldelde(item._id)}  className="fa-solid fa-trash text-red-500 text-xl"></i>
                  <i className="fa-solid fa-pen-to-square text-green-500 text-xl"></i>
           </div>
             
         </h1>
         </div> 
        </div>
     </div>
     </div>
         })
     }
             {/* a dhamad*/}
          
       </div> 
       </div>
        {/* all flex  dhmaad*/}
         
       </div>
    </div>
  )
}

export default Viewcompleteproject

