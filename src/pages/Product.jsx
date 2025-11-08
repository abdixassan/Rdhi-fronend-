import React, { useEffect, useState } from 'react'
import cont1 from "../Images/3d-rendering-house-model.jpg"
import Foter from "../Headers/Foter"
import axios from "axios";
import { Link } from 'react-router-dom';
const Product = () => {
const [getpost ,setpost] =useState([])  

const handleread = () =>{
   axios.get("https://rdhi-backend-2.onrender.com/read/realsate").then((res) =>{
    setpost(res.data)
    handleread()
   })
}
useEffect(() =>{
  handleread()
},[])

  return (
    <div>
       <div className='pt-56 w-full  bg-blue-500 bg-opacity-25 shadow-lg h-72 relative'>
                  
               <div>
                   <div className='absolute top-0  mt-20'>
                    <button className='text-3xl ml-4 font-bold  '>properties</button>
                     <div className='flex gap-3 mt-4 text-xl '>
                      <h1 className='hover:text-blue-600 ml-5'> <i className="fa-solid fa-house text-[19px] text-blue-500"></i>
                      Home
                       <i className="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                     <h1 className='font-bold'>Product</h1>
                     </div>
                  </div>
               </div>
               </div>

               {/*  sectioon dhmaad */}

          <div className='mt-10 flex justify-center text-3xl text-blue-600 font-bold'>
          <h1> Last Update  RDHI  Posts</h1>
          </div>


               <div className='flex justify-center gap-7 flex-wrap'>
                {
                  getpost.map((item) =>{

                    return <div className='w-80 p-4 shadow-2xl bg-slate-200 rounded-lg hover:shadow-blue-500 mt-10'>
                <div className='flex justify-center'>
                 <img className='w-52 h-40 rounded-lg' src={`https://rdhi-backend-2.onrender.com/Allimage/${item.prImage}`} alt="" />                
                  </div>
                <h1 className='flex justify-center font-bold text-xl mt-4'>For Sale</h1>
                  <h1 className='text-center leading-relaxed max-w-2xl mx-auto mt-3 font-bold text-blue-500 text-xl'>
                    <i className="fa-solid fa-location-dot text-xl text-black"></i> {item.location}</h1>
                   <div className='flex justify-center'> 
                    <h1 className='flex justify-center font-bold text-xl mt-4'>
                     {item.Announcement}</h1>
                    
                   </div>

                  <div className='flex justify-evenly '>
                   <h1 className='mt-5 font-bold  text-green-400 text-2xl'>${item.price}</h1>
                  <Link to="/Register"><button className='bg-blue-600 ml-16 mt-4 text-white rounded-lg p-1'>Add-Cart</button></Link> 
                  </div>        
                 </div>
                  })
                }

               </div>

               <Foter/>
    </div>
  )
}


export default Product
