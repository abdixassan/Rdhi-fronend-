import React from 'react'
import ShopIMage from "../Images/house-with-lit-up-window-dark-background.jpg"

const Cart = () => {
  return (
    <div> 
          <div className='pt-20 w-full relative'>
                         <img className='w-full h-96 object-fill' src={ShopIMage} alt="" />
                       <div>
                         
                          <div className='absolute top-0 text-white mt-48'>
                            <button className='text-3xl ml-4 font-bold '>Cart</button>
                             <div className='flex gap-3 mt-4 text-xl '>
                              <h1 className='hover:text-blue-600 ml-5'> <i class="fa-solid fa-house text-[19px] text-blue-500"></i>
                              Home
                               <i class="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                             <h1 className='font-bold'>Cart</h1>
                             </div>
                          </div>
                       </div>
                       </div>
        
                       {/* secton one dhamaad */}
      
    </div>
  )
}

export default Cart
