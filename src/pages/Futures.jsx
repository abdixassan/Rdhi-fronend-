import React from 'react'
// import ShopIMage from "../Images/house-with-lit-up-window-dark-background.jpg"
import Aboutimg3 from "../Images/3d-rendering-house-model.jpg"
import Foter from '../Headers/Foter'



const Futures = () => {
  return (
    <div>
        <div className=' w-full relative'>
                         <img className='w-full h-96 object-cover' src={Aboutimg3} alt="" />
                       <div>
                         
                          <div className='absolute top-0 text-white mt-48'>
                            <button className='text-3xl ml-4 font-bold '>Features plining</button>
                             <div className='flex gap-3 mt-4 text-xl '>
                              <h1 className='hover:text-blue-600 ml-5'> <i class="fa-solid fa-house text-[19px] text-blue-500"></i>
                              Home
                               <i class="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                             <h1 className='font-bold'>Features</h1>
                             </div>
                          </div>
                       </div>
                       </div>
        
                       {/* secton one dhamaad */}

                       <div className=' flex justify-center flex-wrap gap-6 '>
                        {/* a */}
                        <div className='sm:mt-20'>
                           
                            <h1 className=' leading-relaxed max-w-2xl mx-auto mt-3'>
                                 <h1 className='text-xl font-bold text-blue-400'>Future Plans</h1> <br />
                                 At RAMAS DREAM HOMES INTERNATIONAL  International L.T.D, strict
 adherence to policies is prioritized. The company places a strong
 emphasis on following its established policies and guidelines. This
 commitment ensures that all operations and services provided by
 RAMAS DREAM HOMES INTERNATIONAL  align with the set standards,
 regulations, and ethical practices. By strictly adhering to policies, RAMAS
 DREAM HOMES INTERNATIONAL  maintains transparency, accountability,
 and credibility in its operations, ultimately benefiting its clients and
 stakeholders
                            </h1>
                        </div>
                        {/* a dhmaad */}
                        {/* b */}
                        <div>
                     <img className='sm:w-[22rem] w-full rounded-lg sm:h-96  h-auto object-cover mt-16 shadow-md hover:shadow-blue-600  transition-transform duration-300' src={Aboutimg3} alt="" />
                            
                        </div>
                        {/* b dhmaad*/}
                       </div>

                       <Foter/>
    </div>
  )
}

export default Futures
