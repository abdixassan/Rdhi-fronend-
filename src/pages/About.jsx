import React from 'react'
import AboutIMage from "../Images/house-with-lit-up-window-dark-background.jpg"
import Aboutimg2 from "../Images/aerial-view-private-houses-with-solar-panels-roofs.jpg"
import Aboutimg3 from "../Images/3d-rendering-house-model.jpg"
import Aboutimg4 from "../Images/house-isolated-field.jpg"
import Foter from '../Headers/Foter'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
       <div className=' w-full relative'>
         <img className='w-full h-96 object-fill' src={AboutIMage} alt="" />
       <div>
         
          <div className='absolute top-0 text-white mt-48'>
            <button className='text-3xl ml-4 font-bold '>About us</button>
             <div className='flex gap-3 mt-4 text-xl '>
              <h1 className='hover:text-blue-600 ml-5'> <i className="fa-solid fa-house text-[19px] text-blue-500"></i>
              Home
               <i className="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
             <h1 className='font-bold'>About US</h1>
             </div>
          </div>
       </div>
       </div>
       {/* secton one dhamaad */}
       <div className='bg-white shadow-lg  opacity-90 mt-9 p-2 '>
             <div className=' flex justify-center gap-3 flex-wrap'>
              <div>
                 <img className='w-[27rem] rounded-lg h-96 object-cover mt-16' src={Aboutimg2} alt="" />
              </div>
              <div>
                <button className='bg-gray-200 text-blue-500 rounded-lg py-1 px-3 '>About US</button>
                <h1 className='text-4xl font-bold text-blue-500'>Find Your Perfect Home with RDHI</h1>
                <h1 className='mt-8'>
                  At RAMAS DREAM HOMES INTERNATIONAL (RDHI) <br /> our mission is simple – to help everyone find   <br />  a place they can truly call home.
                 From modern apartments to family houses,<br /> we connect people with the right spaces in <br />the right locations </h1>
                   <div className='flex gap-9 mt-10 ml-8'>
                    <h1><i className="fa-solid fa-house bg-blue-400 rounded-full py-2 w-10 h-10 pt-3"></i> Smart Home Design</h1>
                    <h1><i className="fa-solid fa-house-tsunami  bg-blue-400 rounded-full py-2 w-10 h-10 pt-3"></i> Beautiful Scene Around</h1>
                   </div>
                   <div className='flex gap-9 mt-5   ml-8'>
                    <h1><i className="fa-regular fa-house bg-blue-400 rounded-full py-2 w-10 h-10 pt-3"></i>Exceptional Lifestyle</h1>
                    <h1><i className="fa-solid fa-house bg-blue-400 rounded-full py-2 w-10 h-10 pt-3"></i> Complete 24/7 Security</h1>
                   </div>
                   <div className='flex ml-8 mt-2'>
                    <div className='bg-blue-600 w-1 h-24'></div>
                    <div className='bg-blue-100 p-2'>
                      <h1>At RDHi, we go beyond limits – delivering trusted real estate solutions that inspire confidence <br /> 
                      and create lasting value. With dedication and expertise, we connect people <br /> 
                      to homes and properties that truly matter</h1>
                    </div>
                   </div>
                     
                      <button className='py-5 px-6 bg-blue-600 text-white ml-8 mt-5 rounded-lg'>TARGET CLIENTS  </button>
                     
              </div>
             </div>
       </div>
         <div className='flex justify-center items-center mt-3'>
               <h1 className='text-2xl text-blue-600'>OUR TARGET  CLIENTS</h1>
        </div>
        <div className='flex justify-center items-center '>
               <h1 className='text-2xl text-blue-600'> Our Clients primerely fall into Six main Categories:</h1>
        </div>
        <div className=' flex  gap-6 justify-center   flex-wrap '>
        <div className='sm:w-[29rem] w-full '>
        <div className='mt-2 p-5'>
          <h1 className='text-2xl font-bold'> 01 :<span className=''>Young Professionals and New Families</span></h1>
          <h1>Many young people and newlyweds seek affordable, fast housing
            solutions, and prefabricated homes offer an economical alternative
           to traditional housing</h1>
        </div>

        <div className='mt-2 p-5'>
          <h1 className='text-2xl font-bold'> 02 :Real Estate Investors</h1>
          <h1>Investors looking to develop rental or sale properties can benefit
              from the cost and time efficiency of prefabricated homes</h1>
        </div>
         
         <div className='mt-2 p-5'>
          <h1 className='text-2xl font-bold'> 03 :Corporations and Organizations</h1>
          <h1>Companies with employees in remote locations, like oil, gas, and
 mining companies, often need temporary housing for their workforce,
 and prefabricated homes provide a portable and efficient solution.</h1>
        </div>
         
         <div className='mt-2 p-5'>
          <h1 className='text-2xl font-bold'> 04 : Environmentally Conscious Individuals</h1>
          <h1>Many prefabricated homes incorporate eco-friendly materials and
 energy-saving technologies, attracting clients who prioritize
 sustainability</h1>
        </div>
   
   <div className='mt-2 p-5'>
          <h1 className='text-2xl font-bold'> 05 : People in Remote or Disaster-Affected Areas</h1>
          <h1>Prefabricated homes offer quick, safe shelter solutions for regions needing fast, durable hausing after natural Disasters natural disasters</h1>
        </div>

        <div className='mt-2 p-5'>
          <h1 className='text-2xl font-bold'> 06 : Clients Seeking Custom and Flexible Designs</h1>
          <h1>Prefab companies offer customizable and modern designs,
           appealing to clients who want a unique or specific look and layout</h1>
        </div>
        </div>
         <div>
            <img className='sm:w-[27rem] w-full h-auto rounded-lg sm:h-96 object-cover mt-16 shadow-md hover:shadow-blue-600 hover:scale-105 transition-transform duration-300' src={Aboutimg3} alt="" />
            <img className='sm:w-[27rem] w-full h-auto rounded-lg sm:h-96 object-cover mt-16 shadow-md hover:shadow-blue-600 hover:scale-105 transition-transform duration-300' src={Aboutimg2} alt="" />
            <div className='flex flex-wrap gap-16 mt-2'>
               <img className='sm:w-36 rounded-lg  object-cover ml-2  shadow-md hover:shadow-blue-600 hover:scale-105 transition-transform duration-300 ' src={Aboutimg2} alt="" />
            <img className='sm:w-36 w-full h-auto rounded-lg  object-cover shadow-md hover:shadow-blue-600 hover:scale-105 transition-transform duration-300 ' src={Aboutimg3} alt="" />
            </div>
          </div>
        </div>

       

   <div>
         <div className='mt-10 flex justify-center text-3xl text-blue-600'>
          <h1> Why Choose Us</h1>
          </div>

          <div className='mt-6 flex justify-center gap-7 flex-wrap'>
            {/* a */}
            <div className=' w-full h-auto sm:w-[34rem]  rounded-ss-lg p-3 sm:h-60  shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 hover:scale-105 transition-transform duration-300'>
             <div className='flex flex-wrap w-full sm:w-[40rem]  gap-4'>
               <img className='rounded-lg w-full sm:w-48 object-fill sm:h-40 ' src={Aboutimg3} alt=""  />
              <div>
                <h1 className='font-bold text-xl text-blue-600'>Choose US </h1>
                 <div className=''>
                <h1 className='font-bold text-xl text-blue-600 mt-6'>01: Speed and efficiency</h1>
                <h1 className='font-bold text-xl text-blue-600'> 02: Quality Conrol</h1>
                <h1 className='font-bold text-xl text-blue-600'> 04: Sustainability </h1>
                <h1 className='font-bold text-xl text-blue-600'></h1>
                <h1 className='text-center leading-relaxed max-w-2xl mx-auto mt-3'>  <br />
                       <br />
                        <br />
                       <br />   
                  </h1>
                
                 </div>
                {/* <Link to="/Ourservice">  <button className='px-7 py-1 text-white bg-blue-600 rounded-lg mt-5 ml-10 '> See more...</button></Link> */}

              </div>
             </div>
            </div>
            {/* a */}
            {/* b */}
            <div className= 'sm:w-[34rem]  w-full h-auto rounded-ss-lg  sm:h-60 p-7 shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 hover:scale-105 transition-transform duration-300'>
             <div className=''>
               <div className='flex gap-3 flex-wrap'>
                <img className='rounded-lg sm:w-48 object-fill sm:h-20 ' src={Aboutimg3} alt="" />
               <img className='rounded-lg sm:w-48 object-fill sm:h-20 ' src={Aboutimg4} alt="" />
               </div>
              <div>
                <h1 className='font-bold text-xl text-blue-600'>05: Customizability and Flexibility</h1>
                <h1 className='font-bold text-xl text-blue-600'>06:  Safety and Rduced Site Disturbance</h1>
                <h1 className='font-bold text-xl text-blue-600'> 07: Experinced Team and Support</h1>
                
                  
                  {/* <button className='px-7 py-1 text-white bg-blue-600 rounded-lg mt-2 ml-10 '> See more...</button> */}

              </div>
             </div>
            </div>
            {/* b */}
          </div>

  

   </div>
            <Foter/>
    </div>
  )
}

export default About
