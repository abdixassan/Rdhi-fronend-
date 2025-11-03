import React, { useEffect, useState } from 'react'
import Dashpot from '../Components/Dashpot'
import axios from 'axios'
import { jsPDF } from "jspdf";

const Products = () => {
   const [getpost ,setpost] =useState([])  

const handleread = () =>{
   axios.get("http://localhost:2009/read/realsate").then((res) =>{
    setpost(res.data)
    handleread()
   })
}

const hanldelde =(id) =>{
  axios.delete(`http://localhost:2009/delate/product/${id}`).then(() =>{
    alert("✅ Deleted successfully! ")
  
  })
}

useEffect(() =>{
  handleread()
},[])

  return (
    <div>
       <div className=''>
          <div className=''>
       <div className='sm:fixed w-full top-10 left-0 z-0 '>
        <Dashpot/>
       </div>
       <div className='sm:ml-80  z-10 relative '>
        <h1 className='text-2xl'>All Products View </h1>
        <div className='flex justify-center gap-7 flex-wrap'>
                {
                  getpost.map((item) =>{

                    return <div className='w-80 p-4 shadow-2xl bg-slate-200 rounded-lg hover:shadow-blue-500 mt-10'>
                <div className='flex justify-center'>
                 <img
                  className='w-52 h-40 rounded-lg' src={`http://localhost:2009/Allimage/${item.prImage}`} alt="" />                
                  </div>
                <h1 className='flex justify-center font-bold text-xl mt-4'>For Sale</h1>
                  <h1 className='text-center leading-relaxed max-w-2xl mx-auto mt-3 '>
                    <i className="fa-solid fa-location-dot"></i> {item.location}</h1>
                   <div className='flex justify-center'>
                    <h1 className='flex justify-center font-bold text-xl mt-4'>
                     {item.Announcement}</h1>
                    
                   </div>

                  <div className='flex justify-evenly '>
                   <h1 className='mt-2 font-bold  text-green-400 text-2xl'>${item.price}</h1>
                    <div className='space-x-3 mt-3 ml-3'>
                  {/* <i  onClick={ () => hanldelde(item._id)}  className="fa-solid fa-trash text-red-500 text-xl"></i> */}
                  <i onClick={() => hanldelde(item._id)} className="fa-solid fa-trash text-red-500 text-2xl ml-3.5"></i>

                  <i className="fa-solid fa-pen-to-square text-green-500 text-xl"></i>
                 
                  </div>
                  </div> 
                   
                        
    <button 
  onClick={async () => {
  const imageUrl = `http://localhost:2009/Allimage/${item.prImage}`;
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = item.prImage; // magaca file-ka la soo dagayo
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // optional — ka saar memory-ga URL-ka
  window.URL.revokeObjectURL(url);
}}

                   
                   className='mt-4 bg-blue-300 p-2 rounded-lg'>Dowload IMage</button>
                 </div>
                  })
                }

               </div>

       </div>
        </div>

       </div>
    </div>
  )
}

export default Products
