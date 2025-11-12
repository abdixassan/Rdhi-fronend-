import React, { useEffect, useState } from 'react'
import Dashpot from '../Components/Dashpot'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Costomer = () => {

  const navigate  = useNavigate()

  const [getDate , setDate] =useState([])

  const Handleget = () =>{
    axios.get("https://rdhi-backend-2.onrender.com/get/Costomer") .then((res) =>{
     setDate(res.data)
    })
  }

    const hanldelde =(id) =>{
  axios.delete(`https://rdhi-backend-2.onrender.com/delate/cosmers/${id}`).then(() =>{
    alert("✅ Deleted successfully! ")
    navigate("/products/dashpot")
  })
}

  useEffect(() =>{
    Handleget()
  },[])
  




  return (
    <div>
        <div className=''>
        <div className='sm:fixed w-full top-[5.5rem] left-0 z-0  '>
        <Dashpot/>
       </div>
     <div className='sm:ml-80 sm:pt-9 z-10 relative'>
         <h1 className='text-blue-500 font-bold text-2xl'>All Costomesr</h1>
         <div className=''>
            <table className='border border-collapse border-gray-500 w-full '>
            <thead className='bg-orange-100'>
                <tr>
                    <th className='border  p-2 '> Name</th>
                    <th className='border  p-2 '> Location </th>
                    <th className='border  p-2 '> Phone </th>
                    <th className='border  p-2 '> Email </th>
                    <th className='border  p-2 '> Delate </th>
                    
                </tr>
                </thead> 
                {
                getDate.map((item) =>{

                   return <tbody className=''>
                   <tr>
                    <td className=' hover:bg-gray-400 border  p-2 '> {item.name}</td>
                    <td className=' hover:bg-gray-400 border  p-2 '> {item.Address}</td>
                    <td className=' hover:bg-gray-400 border  p-2 '> {item.phone} </td>
                    <td className=' hover:bg-gray-400 border  p-2 '> {item.email}</td>
                    <td><i onClick={() => hanldelde(item._id)} className="fa-solid fa-trash text-red-500 text-xl hover:bg-gray-400 border  p-2 w-full "></i></td>              
                  </tr>

                  

                </tbody>    

                    })
                }   
                  
             </table>
              
            
             </div>
     </div>
         </div>
    </div>
  )
}

export default Costomer
