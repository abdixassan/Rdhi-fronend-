import React from 'react'
import logo from "../ImagesCompressed/yu ali-01.png"
import logo1 from "../ImagesCompressed/Screenshot 2025-09-21 114751.png"
import { Link } from 'react-router-dom'
const Foter = () => {
  return (
    <div> 
       <div className='  mt-11'>
        <div  className=' bg-black  w-full sm:mt-10 sm:text-white absolute text-white'>
            {/* a */}
            <div>  
            <div className=' sm:bg-blue-700   rounded-lg p-2  h-20 sm:text-white'>
        <div className='sm:flex sm:justify-center   sm:gap-48'>
            <h1 className='text-3xl font-thin '>Looking for a dream home?</h1>
        <Link to="/ourservice"><button className='bg-white text-blue-500 rounded-xl py-3 px-5 '><i className="fa-solid fa-up-right-from-square "></i> Explore Properts </button> </Link> 
        </div>
    
       </div>
        </div>
            {/* a dhmaad */}
           <div className=' flex justify-center gap-6 p-8 flex-wrap '>
            <div className='mt-10'>
                <img className='w-40 h-40 object-cover' src={logo} alt="" />
                <h1 className='leading-relaxed p-2 w-60 '> Your dream home is now closer than ever! 🏡 </h1>
<h1 className='p-4'><i className="fa-solid fa-location-dot text-xl"></i>Somaliya : Mogadisho :Hodan <br />KM4 ,FAARAH UGAAS </h1>
<h1 className='p-2'><i className="fa-solid fa-phone-volume text-xl"></i> +49 1521 2392531</h1>
<h1 className='p-2'><i className="fa-solid fa-globe text-xl"></i>   www.rdhi.com</h1>
<h1 className='p-2 '><i className="fa-brands fa-facebook hover:text-blue-500"></i> <i className="fa-brands fa-youtube hover:text-blue-500"></i> 
<i className="fa-brands fa-google hover:text-blue-500"></i> <i className="fa-brands fa-linkedin hover:text-blue-500"></i></h1>
         
            </div>
<div className='sm:mt-28'>
      <h1 className='text-2xl font-bold'>Company</h1>
     <div>
      <h1 className='mt-5 hover:text-blue-600'>Home</h1>
      <h1 className='mt-5 hover:text-blue-600'>About</h1>
      <h1 className='mt-5 hover:text-blue-600'>About RDHI</h1>
      <h1 className='mt-5 hover:text-blue-600'>News</h1>
      <h1 className='mt-5 hover:text-blue-600'>Contact us</h1>
      
     </div>
      
</div>
<div className='sm:mt-28'>
      <h1 className='text-2xl font-bold'>Services</h1>
     <div>
      <h1 className='mt-5 hover:text-blue-600'> Our Services</h1>
      <h1 className='mt-5 hover:text-blue-600'>Green Energy</h1>
      <h1 className='mt-5 hover:text-blue-600'>Completed project</h1>
      <h1 className='mt-5 hover:text-blue-600'>Ongoing project</h1>
      <h1 className='mt-5 hover:text-blue-600'>Terms & Conditions</h1>
     </div>

</div>
<div className='sm:mt-28'>
      <h1 className='text-2xl font-bold'>Customer Care</h1>
      <h1 className='hover:text-blue-600 mt-5'>Login</h1>
      <h1 className='hover:text-blue-600 mt-5'>Admin Login</h1>
      <h1 className='hover:text-blue-600 mt-5'>Features Plining</h1>
      <h1 className='hover:text-blue-600 mt-5'>Add listing</h1>
      <h1 className='hover:text-blue-600 mt-5'>Contact us</h1>
    
</div>
<div className='sm:mt-28'>
    <h1 className='text-2xl font-bold'>Newsletter</h1>
    <h1 className='mt-5'>Subscribe to our weekly Newsletter <br /> and receive updates via email.</h1>
    <div className='mt-10'>
        <input className='py-3 px-5 border text-black border-blue-600' type="text"placeholder='Email*' />
        <button className='py-2 px-3 bg-blue-600 text-white rounded-r-lg p-2'>Send</button>
    </div>
     <h1 className='mt-8'>We  Accept</h1>
     <img className='w-64 object-cover mt-4' src={logo1} alt="" />
</div>
           </div>
       </div>
       
       </div>
    </div>
  )
}

export default Foter
