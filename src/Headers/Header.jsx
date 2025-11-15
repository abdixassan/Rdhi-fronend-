import React, { useEffect, useState } from 'react';
import logo from "../ImagesCompressed/yu.png";
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [subOpen1, setSubOpen1] = useState(false);
  const [subOpen2, setSubOpen2] = useState(false);
  const GetCostomer = localStorage.getItem("customer")
   const handleLogout = () =>{
    localStorage.removeItem("customer")
  }

  return (
    <div className="relative">
      {/* Desktop Header */}
      <div className=' shadow-lg  h-20  text-[18px]  flex justify-between items-center px-4'>
        {/* Logo */}
        <Link to="/">
          <img className='w-16 h-16 object-contain' src={logo} alt="logo" />
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-6 items-center font-bold '>
          {/* homes */}
          <div >
            <Link to="/">
            Home 
            </Link>
          </div>
          {/* homes */}

          {/* abut bages  */}
           <div className='group   sm:pl-5  relative cursor-pointer'>
            About <span className=''> +</span>
            <div className='absolute  left-0 top-full hidden group-hover:block bg-slate-50 border mt-1 p-3 w-60'>
              <Link to="/completeproject"><p className='py-1 hover:text-blue-500'>Completed project</p></Link>
              <Link to="/Ongoingproject"><p className='py-1 hover:text-blue-500'>Ongoing project</p></Link>
              <Link to="/about"><p className='py-1 hover:text-blue-500'>About Us RDHI</p></Link>
              <Link to="/AdminLogin"><p className='py-1 hover:text-blue-500'>Admin Login</p></Link>
              </div>
          </div>
          {/* about  */}
          {/* shop */}
            <div className='group relative cursor-pointer  pl-4'>
            Blog +
            <div className='absolute left-0 top-full hidden group-hover:block bg-slate-50 border mt-1 p-3 w-60'>
              <Link to="/shop"><p className='py-1 hover:text-blue-500'>Blog</p></Link>
              <Link to="/futures"><p className=' hover:text-blue-500'>Features Planning</p></Link>
              
              </div>
          </div>
          {/* shop dhamdd */}
          <Link to="/product"><h1>properties</h1></Link>
          <Link to="/contact"> <h1>Contact</h1> </Link>
          {/* service */}
           <div className='group relative cursor-pointer pl-3'>
            Services +
            <div className='absolute left-0 top-full hidden group-hover:block bg-slate-50 border mt-1 p-3 w-48'>
              <Link to="/ourservice"><p className='py-1 hover:text-blue-500'>Our-product</p></Link>
              <Link to="/GreenEnergy"><p className='py-1 hover:text-blue-500'>Green Energy</p></Link>
              </div>
          </div>
          {/* service  */}
          
        </div>

        {/* Desktop Right */}
        <div className='hidden md:flex items-center gap-2'>
          {
            GetCostomer ? <div className='flex gap-4'>
              <div>
                <h1>hi😀</h1>
              </div>
              <Link to="/Register">
              <button onClick={handleLogout} className='border border-blue-500  rounded-lg px-5 py-1'>Log-out</button> 
              </Link>
             </div>
             
             : <div className='flex gap-5'>
              <Link to="/Register"><button className='py-1  bg-blue-500 text-white rounded-lg px-5'>Register</button></Link>
               <div>
                <Link to="/CostomrtLogin"><button className='border border-blue-500  rounded-lg px-5 py-1'>Login</button> </Link>
               </div>
             </div>
          }
         
        
        </div>

        {/* Mobile Hamburger */}
        <div className='block md:hidden text-2xl text-blue-500 cursor-pointer' onClick={() => setOpen(!open)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden fixed top-16 left-0  rounded-b-lg overflow-y-auto bg-slate-50 shadow-lg p-4 z-20 transition-transform duration-300 animate-none'>
           <div >
            <Link to="/">
            Home 
            </Link>
          </div>
          <div>
            <p className='py-2 hover:text-blue-500 cursor-pointer flex justify-between' onClick={() => setSubOpen(!subOpen)}>
              Service <span>{subOpen ? "-" : "+"}</span>
            </p>
            {subOpen && (
              <div className='ml-4 border-l border-blue-300 pl-3'>
               <Link to="/ourservice"><p className='py-1 hover:text-blue-500 cursor-pointer'>Our-product</p> </Link>
               <Link to="/GreenEnergy"><p className='py-1 hover:text-blue-500 cursor-pointer'>Green Energy</p> </Link>
              </div>
            )}
          </div>
          {/* About Us */}
               <div>
            <p className='py-2 hover:text-blue-500 cursor-pointer flex justify-between' onClick={() => setSubOpen1(!subOpen1)}>
              About <span>{subOpen1 ? "-" : "+"}</span>
            </p>
            {subOpen1 && (
              <div className='ml-4 border-l border-blue-300 pl-3'>
               <Link to="/completeproject"><p className='py-1 hover:text-blue-500 cursor-pointer'>complete project</p> </Link>
               <Link to="/Ongoingproject"><p className='py-1 hover:text-blue-500 cursor-pointer'>Ongoing project</p> </Link>
               <Link to="/About"><p className='py-1 hover:text-blue-500 cursor-pointer'>About RDHI</p> </Link>
                <Link to="/AdminLogin"> <p className='py-1 hover:text-blue-500 cursor-pointer'>Admin Login</p> </Link>
          </div>
            )}
          </div>
          {/* Abouu us */}

           {/* news*/}
               <div>
            <p className='py-2 hover:text-blue-500 cursor-pointer flex justify-between' onClick={() => setSubOpen2(!subOpen2)}>
              Blog <span>{subOpen2 ? "-" : "+"}</span>
            </p>
            {subOpen2 && (
              <div className='ml-4 border-l border-blue-300 pl-3'>
              <Link to="/Shop"><p className='py-2 hover:text-blue-500 cursor-pointer'>Blog</p></Link>
              <Link to="/futures"><p className='py-1 hover:text-blue-500'>Features Planning</p></Link>
              
          </div>
            )}
          </div>
          {/* news*/}

          <Link to="/Product"><p className='py-2 hover:text-blue-500 cursor-pointer'>properties</p></Link>
          <Link to="/contact"><p className='py-2 hover:text-blue-500 cursor-pointer'>Contact</p></Link>
          {/* <Link to="/product"><p className='py-2 hover:text-blue-500 cursor-pointer'>Product</p></Link> */}
           <Link to="/Register"><button className='py-1  bg-blue-500 text-white rounded-lg w-full sm:px-5'>Register</button></Link>
            <Link to="/CostomrtLogin"><button className='bg-blue-500 text-white rounded-lg px-5 py-1 mt-3 w-full'>Login</button></Link>  
          
        </div>
      )}
    </div>
  );
}

export default Header;
