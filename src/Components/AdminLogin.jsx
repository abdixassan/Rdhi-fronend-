import React from 'react'
import Foter from '../Headers/Foter'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    
        const [email  ,setemail] =useState("")
        const [password  ,setpassaword] =useState("")
        const nafigate = useNavigate ()

       const handlepost = (e) =>{
        e.preventDefault()
          axios.post("https://rdhi-backend-2.onrender.com/login/addmin",{
          email: email,
          password:password,
            
          }).then((res) =>{
             alert(' Successfully logged in')
            nafigate("/products/dashpot")
             localStorage.setItem("Admin" ,JSON.stringify(res.data))
             }).catch((error) =>{
              if(error){
                alert("Invalid Email or Password")
              }
             })
        }

  return (
    <div>

    <div className='pt-56 w-full  bg-blue-500 bg-opacity-25 shadow-lg h-96 relative'>
                  
               <div>
                   <div className='absolute top-0  mt-48'>
                    <button className='text-3xl ml-4 font-bold '>Admin Log-in</button>
                     <div className='flex gap-3 mt-4 text-xl '>
                      <h1 className='hover:text-blue-600 ml-5'> <i class="fa-solid fa-house text-[19px] text-blue-500"></i>
                      Home
                       <i className="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                     <h1 className='font-bold'>Admin</h1>
                     </div>
                  </div>
               </div>
    </div>

     <div className='flex justify-center text-2xl font-bold mt-4'>
                <h1>Admin login</h1>
    </div>


    <div className='flex justify-center '>
<form className='  sm:w-96 w-full p-2 rounded-lg flex flex-col'>
 
<input
    className='w-full py-3 px-5 outline-none border border-lime-300 mt-9 rounded'
    type="email"
    value={email} onChange={(t) => setemail (t.target.value)}
    placeholder='Enter Your email*'
  />

   <input
    className='w-full py-3 px-5 outline-none border border-lime-300 mt-9 rounded'
    type="password"
    value={password} onChange={(t) => setpassaword (t.target.value)}
    placeholder='Enter Your password*'
  />




  <button 
  onClick={handlepost}
  className='bg-blue-700 text-white px-5 py-2 p-2 mt-4'>Log in
  </button>
</form>
               </div>

               <div>
                <Foter/>
               </div>
    </div>
  )
}

export default AdminLogin    
