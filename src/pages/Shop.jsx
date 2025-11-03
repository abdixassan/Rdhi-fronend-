import React from 'react'
import ShopIMage from "../Images/house-with-lit-up-window-dark-background.jpg"
import outserver1 from "../Images/Screenshot 2025-09-24 104141.jpg"
import outserver3 from "../Images/buildings-edge-river.jpg"
import outserver4 from "../Images/sawiraka 2ad-01.jpg"
 
import Aboutimg3 from "../Images/3d-rendering-house-model.jpg"

import Foter from "../Headers/Foter";
import { Link } from 'react-router-dom'
const Shop = () => {
  return (
    <div>

        <div className='w-full relative'>
                 <img className='w-full h-96 object-fill' src={ShopIMage} alt="" />
 <div>
  <div className='absolute top-0 text-white mt-48'>
                    <button className='text-3xl ml-4 font-bold '>News Feeds</button>
                     <div className='flex gap-3 mt-4 text-xl '>
                      <h1 className='hover:text-blue-600 ml-5'> <i className="fa-solid fa-house text-[19px] text-blue-500"></i>
                      Home
                       <i className="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                     <h1 className='font-bold'>Blog</h1>
                     </div>
                  </div>
               </div>
               </div>

               {/* secton one dhamaad */}

               {/* flex right and left */}
               <div className=' flex gap-8  sm:flex-row flex-col  justify-center mt-10 flex-wrap '>
               {/* left */}

               <div className=' mt-3'>
                <div className='  '>
                <div className='flex sm:flex-row flex-col  gap-2  flex-wrap'>
                  <i className="fa-solid fa-bars-staggered text-4xl"></i> 
                  <div className=''>
                     <select className='bg-blue-500 rounded-lg p-3 outline-none text-white  w-full sm:w-[14rem]'>
                      <option> Default </option>
                      <option> price : low to high </option>
                      <option> price : high to low  </option>
                     </select>
                     
                  </div>
                   <div className=''>
                     <select className='bg-blue-500 rounded-lg p-3 outline-none text-white w-full sm:w-[14rem]'>
                      <option> per Page:00 </option>
                      <option> per Page:01 </option>
                      <option>per Page:02 </option>
                     </select>
                     
                  </div>
                </div>
                
               </div>
                  <input className='mt-6 py-4 w-full outline-none p-1   border border-blue-600  rounded-xl' type="text" placeholder='search waht you went'  />

              
              {/* a */}
            <div className=' mt-7   rounded-lg  h-auto  p-7 shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 transition-transform duration-300'>
             <div className='flex  sm:flex-row flex-col flex-wrap  gap-4'>
               <img className='   rounded-lg w-full sm:w-48 h-40 object-cover ' src={Aboutimg3} alt="" />
              <div>
                <h1 className='font-bold text-xl text-blue-600'>For Sale</h1>
                 <div className='leading-relaxed break-words'>
                  <h1>
                     Discover your dream home <br />
                      with RADHI 
                       a modern property  <br /> built with comfort, style,  <br />
                       and quality in mind. Every <br />
                        detail has been thoughtfully designed  <br />
                     to combine elegance with everyday <br />
                      practicality.
                   
                     <div className='flex'>
                        <i className="fa-solid fa-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full"></i>
                     <Link to="/product"> <i className="fa-solid fa-cart-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center ml-2 rounded-full"></i></Link>
                     <i className="fa-solid fa-heart bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full ml-2"></i>
                      </div>

                  </h1>
                 </div>

              </div>
             </div>
            </div>
              {/* a */}
               {/* b */}
                <div className=' mt-7   rounded-lg  h-auto  p-7 shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 transition-transform duration-300'>
             <div className='flex flex-wrap  sm:flex-row flex-col gap-4'>
               <img className=' rounded-lg w-full sm:w-48 h-40 object-cover ' src={outserver1} alt=""  />
              <div>
                <h1 className='font-bold text-xl text-blue-600'>For Sale</h1>
                 <div className='leading-relaxed mt-'>
                  <h1>
                     Set in a highly desirable neighborhood, <br />
                     this home offers easy access to schools,  <br />
                     shopping centers, healthcare facilities,  <br />
                     and major roads. A safe, peaceful, and  <br />
                     family-friendly environment makes it the <br />
                      perfect place to live and growy.
                   
                     <div className='flex'>
                        <i className="fa-solid fa-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full"></i>
                     <Link to="/product"> <i className="fa-solid fa-cart-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center ml-2 rounded-full"></i></Link>
                    
                     <i className="fa-solid fa-heart bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full ml-2"></i>
                      </div>

                  </h1>
                 </div>

              </div>
             </div>
            </div>
               {/* b */}
               {/* c */}
               <div className=' mt-7   rounded-lg  h-auto  p-7 shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 transition-transform duration-300'>
             <div className='flex sm:flex-row flex-col flex-wrap gap-4'>
               <img className=' rounded-lg w-full sm:w-48 h-40 object-cover  ' src={outserver3} alt="" />
              <div>
                <h1 className='font-bold text-xl text-blue-600'>For Sale</h1>
                 <div className='leading-relaxed mt-'>
                  <h1>
                   Enjoy spacious bedrooms, an open-plan <br />
                    living area, a fully equipped kitchen, <br /> 
                    and stylish bathrooms with premium finishes. <br />
                     Large windows bring in natural light,  <br />
                     creating a warm and inviting atmosphere <br />
                      throughout the home.
                   
                      <div className='flex'>
                        <i className="fa-solid fa-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full"></i>
                     <Link to="/product"> <i className="fa-solid fa-cart-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center ml-2 rounded-full"></i></Link>
                     
                     <i className="fa-solid fa-heart bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full ml-2"></i>
                      </div>


                  </h1>
                 </div>
                 </div>
             </div>
            </div>
               {/* c */}
               {/* d */}
             <div className=' mt-7   rounded-lg  h-auto  p-7 shadow-2xl bg-slate-100 sm:hover:shadow-blue-600 transition-transform duration-300'>
             <div className='flex flex-wrap sm:flex-row flex-col  gap-4'>
               <img className=' rounded-lg w-full sm:w-48 h-40 object-cover  ' src={outserver4} alt="" />
              <div>
                <h1 className='font-bold text-xl text-blue-600'>For Sale</h1>
                 <div className='leading-relaxed mt-'>
                  <h1>
                     With RADH’s proven expertise and <br />
                      commitment to excellence, you’re <br />
                       not just buying a house – you’re <br />
                        investing in a lifestyle of comfort, <br />
                         security, and lasting value. Your <br />
                          dream home is ready to welcome you. 
                   
                     <div className='flex'>
                        <i className="fa-solid fa-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full"></i>
                     <Link to="/product"> <i className="fa-solid fa-cart-plus bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center ml-2 rounded-full"></i></Link>
                    
                     <i className="fa-solid fa-heart bg-gray-300 py-2  px-4 hover:text-blue-500  flex justify-center  rounded-full ml-2"></i>
                      </div>

                  </h1>
                 </div> 

              </div>
             </div>
            </div>
               {/* d */}
               </div> 
               {/* letft dhmaad */}
               {/* right  */}
                      <div className=''> 
                        <h1 className=' text-2xl font-bold text-blue-500 '>  Advance Information</h1>
                      
               <div className=' sm:mt-32 '>
                <div className=' bg-white shadow-lg p-6 w-80 leading-relaxed break-words overflow-hidden '>
                  <h1 className='mt-5 text-xl font-bold '>Propert Type </h1>
                   <h1 className=' mt-6 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                     <label className='ml-1' htmlFor="check1">House</label> 
                     </div>
                    <label className='' htmlFor="check2">3,000 </label> 
                   </h1>
                   <h1  className=' mt-4 flex justify-between'>
                    <div>
                       <input type="checkbox" id="check1" />
                    <label className='ml-1' htmlFor="check1"> Single Family </label> 
                     </div>
                    <label className='' htmlFor="check2">4,000 </label> 

                   </h1>
                    <h1 className=' mt-4 flex justify-between'>
                     <div>
                       <input type="checkbox" id="check1" />
                  <label className='' htmlFor="check1"> Apartment </label> 
                     </div>
                  <label className='' htmlFor="check2">5,000 </label> 

                   </h1>
                   <h1 className=' mt-4 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                  <label className='' htmlFor="check1"> Office Villa </label>  
                     </div>
                  <label className='' htmlFor="check2">4,000 </label> 

                   </h1>

                    <h1 className=' mt-4 flex justify-between'>
                       <div>
                   <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Luxury Home </label>  
                       </div>
                  <label className='' htmlFor="check2">6,000 </label> 

                   </h1 >
                    {/* b */}
                   <h1 className='mt-5 text-xl font-bold '>Amenities</h1>
                      <h1 className=' mt-4 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Farmhouse </label>  
                     </div>
                  <label className='' htmlFor="check2">3,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                      <div>
                        <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Row House </label>  
                      </div>
                  <label className='' htmlFor="check2">2,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                    <div>
                       <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Chalet </label>  
                    </div>
                  <label className='' htmlFor="check2">7,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                     <div className='flex justify-between'>
                      <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Studio Loft </label>  
                     </div>
                  <label className='' htmlFor="check2">1,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                      <div>
                        <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Guest House </label>
                        </div>  
                  <label className='' htmlFor="check2">3,000 </label> 

                   </h1>
                    {/* c */}
                    <h1 className='mt-5 text-xl font-bold '>Amenities</h1>
                      <h1 className=' mt-4  flex justify-between'>
                      <div>
                        <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Studio Condo </label>  
                      </div>
                  <label className='' htmlFor="check2">4,000 </label> 

                   </h1>

                     <h1 className=' mt-4  flex justify-between'>
                     <div>
                    <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> High-rise Apartment </label> 
                      </div> 
                  <label className='' htmlFor="check2">9,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                      <div>
                        <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Town Apartment </label>
                        </div>  
                  <label className='' htmlFor="check2">8,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Garden Home </label></div>  
                  <label className='' htmlFor="check2">2,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                      <div>
                        <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Serviced Apartment </label>  
                      </div>
                  <label className='' htmlFor="check2">6,000 </label> 

                   </h1>
                   {/* d */}
                   <h1 className='mt-5 text-xl font-bold '>Amenities</h1>
                      <h1 className=' mt-4 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Townhouse </label> 
                      </div> 
                  <label className='' htmlFor="check2">7,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Bungalow </label> 
                      </div> 
                  <label className='' htmlFor="check2">9,000 </label> 

                   </h1>

                     <h1 className=' mt-4 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Renting </label>  
                     </div>
                  <label className='' htmlFor="check2">5,000 </label> 

                   </h1>
                    
                     <h1 className=' mt-4 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> selling </label>  
                     </div>
                  <label className='' htmlFor="check2">5,000 </label> 

                   </h1>

                    <h1 className=' mt-4 flex justify-between'>
                     <div>
                      <input type="checkbox" id="check1" />
                  <label className='ml-1' htmlFor="check1"> Buyin</label>  
                     </div>
                  <label className='' htmlFor="check2">5,000 </label> 

                   </h1>
                    </div>
               </div>
               </div>
               {/* right dhmaad */}
               </div>
               {/* flex right and left */}
              <div className=' flex justify-center gap-4 mt-6'>

                   <div className='  w-10 h-10 bg-gray-200 hover:bg-blue-400 rounded-lg text-black flex items-center justify-center'>
                    <i className="fa-solid fa-chevron-left"></i>
                   </div>
                   
                   <div className=' w-10 h-10 bg-gray-200 hover:bg-blue-400 rounded-lg text-black flex items-center justify-center'>
                    <h1>1</h1>
                   </div>
                   
                    <div className=' w-10 h-10 bg-gray-200 hover:bg-blue-400 rounded-lg text-black flex items-center justify-center'>
                    <h1>2</h1>
                   </div>

                   <div className=' w-10 h-10 bg-blue-400 rounded-lg text-white flex items-center justify-center'>
                    <h1>3</h1>
                   </div>

                   
                   <div className='  w-10 h-10 bg-gray-200 hover:bg-blue-400 rounded-lg text-black flex items-center justify-center'>
                    <h1>....</h1>
                   </div>

                   <div className=' w-10 h-10 bg-gray-200 hover:bg-blue-400 rounded-lg text-black flex items-center justify-center'>
                    <h1>10</h1>
                   </div>

                   <div className=' w-10 h-10 bg-gray-200 hover:bg-blue-400 rounded-lg text-black flex items-center justify-center'>
                    <i className="fa-solid fa-chevron-right"></i>
                   </div>
              </div>
               
               <div>

                <Foter/>
               </div>


    </div>
  )
}

export default Shop
