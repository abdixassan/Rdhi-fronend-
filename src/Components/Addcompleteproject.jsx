import React, { useState } from 'react'
import Dashpot from '../Components/Dashpot'
import imge from "../Images/3d-rendering-house-model.jpg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addcompleteproject = () => {
    const [Announcement ,setAnnouncement] =useState("")
    const [image  ,setimge] =useState("")

     const usenaavigate = useNavigate()


  const formData =  new FormData ()
  formData.append ("Announcement" , Announcement)
  formData.append("imge" ,image)


    const handlepost =(e) =>{
        e.preventDefault()
        axios.post("https://rdhi-backend-2.onrender.com/completeproject",formData).then(() =>{
          alert("sucessed Add Product")
          usenaavigate("/Viewcompleteproject")
          handlepost()
        })
    }

  return (
    <div>
        <div className=' flex flex-wrap'>
             <div className='sm:fixed w-full z-0 h-screen'>
                <Dashpot/>
            </div> 
            <div className='sm:ml-80 sm:pt-20 z-10 relative flex flex-wrap justify-center gap-10'>
                {/* a */}
              <div>
                  <h1 className='w-full bg-blue-600 p-2 text-white rounded-s-md'>wlecome</h1>

               <form className='  sm:w-96 w-full p-2 rounded-lg flex flex-col'>

  
 
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
  className='bg-blue-700 text-white px-5 py-2 p-2 mt-4'>Add completed  project
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

export default Addcompleteproject
