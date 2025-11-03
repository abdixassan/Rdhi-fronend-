
import { Link, NavLink } from 'react-router-dom'

const Dashpot = () => {
     const HandlelogOut = () =>{
      localStorage.removeItem("Admin")
     }
  return (
    <div> 
       <div className=' '>
        <div className={'sm:w-72 w-full bg-gray-400 bg-opacity-60 shadow-lg p-4 overflow-hidden sm:h-screen transition-all duration-300'}>
              
          <div className='ml-1'>
                 <Link to="/products/dashpot"><h1 className='font-bold text-xl '>Dashbort</h1></Link>
          <div className='mt-2 text-2xl'>
          <Link to="/products/dashpot">
           <button className='bg-blue-600 p-1 rounded-xl text-white px-[4.5rem]'> Product</button>
          </Link>
           </div>
           <div className='mt-5 text-xl '>
          <Link to="/Addprodudt/dashpot">
           <button className='bg-blue-600 p-1 rounded-xl text-white px-14'> Add Product</button>
         </Link>
           </div>
         <div className='mt-5 text-xl '>
              <Link to="/Costomer/dashpot">
              <button className='bg-blue-600 p-1 rounded-xl text-white px-[4.5rem]'>Customer</button>
              </Link>
         </div>
          
          <div className='mt-5 text-xl '>
              <Link to="/ViewOngoingproject">
              <button className='bg-blue-600 p-1 rounded-xl text-white px-11'>Ongoing project</button>
              </Link>
         </div>

         <div className='mt-5 text-xl '>
              <Link to="/AddOngoingproject">
              <button className='bg-blue-600 p-1 rounded-xl text-white px-6'>Add Ongoing project</button>
              </Link>
         </div>
           <div className='mt-5 text-xl '>
              <Link to="/Viewcompleteproject">
              <button className='bg-blue-600 p-1 rounded-xl text-white px-9'>completed project</button>
              </Link>
         </div>

          <div className='mt-5 text-xl '>
              <Link to="/Addcompleteproject">
              <button className='bg-blue-600 p-1 rounded-xl text-white px-5'>Add completed project</button>
              </Link>
         </div>
          <div>
           <button onClick={HandlelogOut} className='bg-blue-600 p-1 rounded-xl text-white px-[5.6rem] mt-5'> Log out</button>

          </div>
           </div>
        </div>

       </div>
    </div>
  )
}

export default Dashpot
