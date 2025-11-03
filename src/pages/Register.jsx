import React from 'react'
import Foter from '../Headers/Foter'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

        const [name , setname] =useState("")
        const [email  ,setemail] =useState("")
        const [phone ,setphone] =useState("")
        const [Address ,setadres] =useState("")
        const [password  ,setpassaword] =useState("")
        const [image  ,setimage] =useState("")
    
         const navigate = useNavigate ()

       const handlepost = (e) =>{
        e.preventDefault()
          axios.post("https://rdhi-backend-2.onrender.com/create/Costomer",{
             name :name,
             email: email,
             phone :phone,
             Address :Address,
             password:password,
             imagess:image
          }).then(() =>{
            alert('succes regestired')
            navigate("/CostomrtLogin")
             }).catch((error) =>{
              if(error){
                alert("All ready have axiest")
              }
             })
        }

  return (
    <div>

    <div className='pt-20 w-full  bg-blue-500 bg-opacity-25 shadow-lg h-56 relative'>
                  
               <div>
                   <div className='absolute top-0  mt-20'>
                    <button className='text-3xl ml-4 font-bold  '>Account</button>
                     <div className='flex gap-3 mt-4 text-xl '>
                      <h1 className='hover:text-blue-600 ml-5'> <i class="fa-solid fa-house text-[19px] text-blue-500"></i>
                      Home
                       <i class="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                     <h1 className='font-bold'>Register</h1>
                     </div>
                  </div>
               </div>
    </div>

     <div className='flex justify-center text-2xl font-bold mt-4'>
                <h1>Register Your Account</h1>
    </div>


    <div className='flex justify-center '>
<form className='  sm:w-96 w-full p-2 rounded-lg flex flex-col'>
  <input
    className='w-full py-3 px-5 outline-none border border-lime-300 mt-9 rounded'
    type="name"
    value={name} onChange={(t) => setname (t.target.value)}
    placeholder='Enter Your full name *'
  />
  
  <input
    className='w-full py-3 px-5 outline-none border border-lime-300 mt-9 rounded'
    type="text"
    value={phone} onChange={(t) => setphone (t.target.value)}
    placeholder='Enter Your phone*'
  />
  
    <input
    className='w-full py-3 px-5 outline-none border border-lime-300 mt-9 rounded'
    type="text"
    value={Address} onChange={(t) => setadres (t.target.value)}
    placeholder='Enter Your Address*'
  />
  
  
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
  className='bg-blue-700 text-white px-5 py-2 p-2 mt-4'>Create Acount
  </button>
</form>
               </div>

               <div>
                <Foter/>
               </div>
    </div>
  )
}

export default Register
