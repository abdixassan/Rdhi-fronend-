import images from "../Images/munaaaa .png"
import image2 from "../Images/munaa 2.jpg"
import Foter from '../Headers/Foter'


const Completeproject = () => {
return (
    <div>
        {/* section one  */}
         <div className=' w-full  bg-gray-50 shadow-lg h-72 relative'>
                  
               <div>
                   <div className='absolute top-0  mt-20'>
                    <button className='text-3xl ml-4 font-bold  '>Completed </button>
                     <div className='flex gap-3 mt-4 text-xl '>
                      <h1 className='hover:text-blue-600 ml-5'> <i className="fa-solid fa-house text-[19px] text-blue-500"></i>
                      Home
                       <i class="fa-solid fa-chevron-right text-[19px] text-blue-500"></i></h1>  
                     <h1 className='font-bold'>Completed project</h1>
                     </div>
                  </div>
               </div>
               </div>
        {/* section dhamaad */}

 <div className='mt-10 flex justify-center text-3xl text-blue-600'>
          <h1> Last Update Completed Projects Post</h1>
          </div>



      <div className=' flex justify-center flex-wrap gap-4'>
        {/* a */}
          <div className="p-4">
                <img
                  className="rounded-xl shadow-lg sm:w-[80vh] h-64  object-cover  transition-transform duration-300"
                  src={images}
                  alt="Ramaas Overview 1"
                />
                <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
                  Completed project

                </h1>
                <p className="text-gray-700 leading-relaxed sm:w-96 text-justify">
                 Case studies or examples of notable completed projects
                Images of projects (with permission)
                 Brief description of each project, including project type, location, and key
                  features
                </p>
              </div>

              {/* a dhaamd  */}
               {/* b */}
          <div className="p-4">
                <img
                  className="rounded-xl shadow-lg sm:w-[80vh] h-64  object-cover  transition-transform duration-300"
                  src={image2}
                  alt="Ramaas Overview 1"
                />
                <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
                  Completed project

                </h1>
                <p className="text-gray-700 leading-relaxed sm:w-96 text-justify">
                Showcasing Our Excellence in Real Estate Development

            Explore some of our successfully completed projects that highlight RADHI’s commitment to innovation, sustainability, and quality craftsmanship. Each project reflects our dedication to creating modern, livable spaces designed for comfort, functionality, and long-term value.
                </p>
              </div>

              {/* b dhaamd  */}
             
      </div>

       <Foter/>
    </div>
  )
}

export default Completeproject
