import React, { useState } from 'react'
import Dashpot from '../Components/Dashpot'
import imge from "../Images/3d-rendering-house-model.jpg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {

 const [location ,setlocation] =useState("")
 const [Announcement ,setAnnouncement] =useState("")
 const [price ,setprice] =useState("")
 const [image  ,setimge] =useState("")

const usenaavigate = useNavigate()


  const formData =  new FormData ()
  formData.append ("location" ,location )
  formData.append ("Announcement" , Announcement)
  formData.append("price" , price)
  formData.append("imge" ,image)


    const handlepost =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:2009/realsate",formData).then(() =>{
            alert("sucessed Add Product")
            usenaavigate("/products/dashpot")
            handlepost()
        })
    }

  return (
    <div>
        <div className='flex  flex-wrap'>
             <div className='sm:fixed w-full z-0'>
                <Dashpot/>
            </div> 
            <div className='sm:ml-80 sm:pt-5 z-10 relative flex flex-wrap justify-center gap-10'>
                {/* a */}
              <div>
                  <h1 className='w-full bg-blue-600 p-2 text-white rounded-s-md'>wlecome</h1>

               <form className='  sm:w-96 w-full p-2 rounded-lg flex flex-col'>
  <input
    className='w-full py-3 px-5 outline-none border border-lime-300 mt-9 rounded'
    type="text"
    value={location} onChange={(t) => setlocation (t.target.value)}
    placeholder='Enter Your location*'
  />
  
  <input
    className='w-full py-3 px-5 outline-none border border-lime-300 mt-9 rounded'
    type="text"
    value={price} onChange={(t) => setprice (t.target.value)}
    placeholder='Enter Your price*'
  />
  
  <textarea
    className="w-full py-5 px-5 outline-none border border-lime-300 mt-9 rounded"
    value={Announcement} onChange={(t) => setAnnouncement (t.target.value)}
    placeholder=" write Announcement *"
  />

  <input type="file" 
   onChange={(t) => setimge (t.target.files[0])}
   className='mt-4'
  />

  <button 
  onClick={handlepost}
  className='bg-blue-700 text-white px-5 py-2 p-2 mt-4'>Add Products
  </button>
</form>
              </div>
              <div>
                <img className='w-96  rounded-lg ' src={imge} alt="" />
              </div>
                   {/* a dhmaad */}
            </div>
        </div>
    </div>
  )
}

export default Addproduct
