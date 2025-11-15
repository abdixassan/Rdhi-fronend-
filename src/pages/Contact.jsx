import React from 'react'
import cont1 from "../ImagesCompressed/10.png"
import cont2 from "../ImagesCompressed/11.png"
import cont3 from "../ImagesCompressed/12.png"
import Foter from '../Headers/Foter'

const Contact = () => {

  
    
  return (
    <div>
         <div className='pt-56 w-full  bg-gray-50 shadow-lg h-72 relative'>
                  
               <div>
                   <div className='absolute top-0  mt-20'>
                    <button className='text-3xl ml-4 font-bold  '>Contact US</button>
                     <div className='flex gap-3 mt-4 text-xl '>
                      <h1 className='hover:text-blue-600 ml-5'> <i class="fa-solid fa-house text-[19px] text-blue-500"></i>
                      Home
                       <i class="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                     <h1 className='font-bold'>Contact</h1>
                     </div>
                  </div>
               </div>
               </div>

               {/* secton one dhamaad */}

               <div className='flex justify-center gap-6 sm:flex-row  flex-wrap'>
                {/* a */}
                <div className='w-72 p-4 shadow-2xl bg-slate-200 rounded-lg hover:shadow-blue-500 mt-10'>
                   <div className='flex justify-center'>
                        <img src={cont1} alt="" />                 
                     </div>
                    <h1 className='flex justify-center font-bold text-xl mt-4'>Email Address</h1>
                    <h1 className='text-center leading-relaxed max-w-2xl mx-auto mt-3 '>info@rdhi.com  info@doctorate10@gmail.com</h1>
                    
                 </div>




               {/* a dhamaad */}
               {/* b */}
                <div className='w-72 p-4 shadow-2xl bg-slate-200 rounded-lg hover:shadow-blue-500 mt-10'>
                   <div className='flex justify-center'>
                        <img src={cont2} alt="" />                 
                     </div>
                    <h1 className='flex justify-center font-bold text-xl mt-4'>Phone Number</h1>
                    <h1 className='text-center leading-relaxed max-w-2xl mx-auto mt-3 '> 
                      <a className='hover:text-blue-500 hover:scale-110' href="https://wa.me/+4915212392531">+ 49 15212392531</a> <br />
                     <a  className='hover:text-blue-500' href="https://wa.me/+25617223373"> +252 61 7223373</a>
                    </h1>
                    </div>
               {/* b  dhmaad*/}
               {/* c */}
               <div className='w-72 p-4 shadow-2xl bg-slate-200 rounded-lg hover:shadow-blue-500 mt-10'>
                   <div className='flex justify-center'>
                        <img src={cont3} alt="" />                 
                     </div>
                    <h1 className='flex justify-center font-bold text-xl mt-4'>Office Address</h1>
                    <h1 className='text-center leading-relaxed max-w-2xl mx-auto mt-3 '>Address: Farah-ugas Tower
                  Km4 Junction 
                  Mogadishu-Somalia</h1>
                  
                 </div>
               {/* c dhmaad */}
               </div>


               {/* section 3 */}

               <div>
                {/* a */}
                   <div className='w-full p-4 shadow-2xl  bg-blue-500 bg-opacity-10 mt-10'>
                   <div>
                     <h1 className='text-xl font-bold'> Welcome To RDHI</h1>
                      </div>
                    <div>

                   <form>
                     <input className='py-3 px-7 outline-none border border-b-lime-300 mt-9 ml-3' type="name" placeholder=' Enter Your name*' />
                     <input className='py-3 px-7 outline-none border border-b-lime-300 mt-9 ml-4' type="email" placeholder=' Enter Your Email*' />
                     <input className='py-3 px-7 outline-none border border-b-lime-300 mt-9 ml-4' type="Address" placeholder=' Enter Your Address*' />
                      <textarea className="w-full py-5 px-5 outline-none border border-b-lime-300 mt-9 rounded"  placeholder="Write Message *"/>
                     <button className=' py-3 px-10 outline-none border   rounded-lg mt-4'
                       onClick={() => alert("Successful message!")}
                      >Send</button>
                      
                   </form>
                    </div>
                    

                    
                 </div>
                {/* a dhaamad */}
               </div>
               <Foter/>
    </div>
  )
}

export default Contact
