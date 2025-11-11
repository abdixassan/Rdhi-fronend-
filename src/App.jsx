// import { Route,  Routes, useNavigate } from "react-router-dom"
// import Header from "./Headers/Header"
// import "./Headers/Animatebg.css"

// import Home from "./pages/Home"
// import About from "./pages/About"
// import Shop from "./pages/Shop"
// import Product from "./pages/Product"
// import Ourservice from "./pages/Ourservice"
// import Futures from "./pages/Futures"
// import Contact from "./pages/Contact"
// import Dashpot from "./Components/Dashpot"
// import Products from "./Components/Products"
// import Addproduct from "./Components/Addproduct"
// import Register from "./pages/Register"
// import Costomer from "./Components/Costomer"
// import CostomrtLogin from "./pages/CostomrtLogin"
// import AdminLogin from "./Components/AdminLogin"
// import ProtactRouter from "./pages/ProtactRouter"
// import Ongoingproject from "./pages/Ongoingproject"
// import ViewOngoingproject from "./Components/ViewOngoingproject"
// import AddOngoingproject from "./Components/AddOngoingproject"
// import Completeproject from "./pages/Completeproject"
// import Viewcompleteproject from "./Components/Viewcompleteproject"
// import Addcompleteproject from "./Components/Addcompleteproject"
// import Header1 from "./Headers/Header1"
// import GreenEnergy from "./pages/GreenEnergy"
// import { useEffect } from "react"
// import Foter from "./Headers/Foter"




// function App() {

//   const navigate = useNavigate()
//   const hanldeRefersh = () => {
//     const getCcustmoer = localStorage.getItem("customer")
//     const getAdmin = localStorage.getItem("Admin")
//     if(getCcustmoer || getAdmin){
//       navigate()
//     }
//   }

//   useEffect(() => {
//     hanldeRefersh()
//   },[])


// //  conconka masuulka ka eh animationka 
//   useEffect(() => {
//     const container = document.querySelector(".animated-bg")
//     container.innerHTML = ""

//     const numParticles = 30
//     for (let i = 0; i < numParticles; i++) {
//       const particle = document.createElement("div")
//       particle.classList.add("particle")
//       const size = Math.random() * 8 + 4
//       particle.style.width = `${size}px`
//       particle.style.height = `${size}px`
//       particle.style.top = `${Math.random() * 100}%`
//       particle.style.left = `${Math.random() * 100}%`
//       particle.style.setProperty("--delay", Math.random() * 8)
//       particle.style.animationDuration = `${6 + Math.random() * 6}s`
//       container.appendChild(particle)
//     }
//   }, [])

//   return (
//     <>
//    <div className="animated-bg -z-10 top-0 left-0 w-full h-full">
//                 <Header1/>
//                  <div className="sticky top-0 z-20 backdrop-blur-sm  bg-white bg-opacity-50">
//               <Header/>
//              </div>
//               <div className="z-30">

             
//               <div>
//              <Routes>
//               <Route path="/" element={<Home/>}/>
//               <Route path="/about" element={<About/>}/>
//               <Route path="/shop" element={<Shop/>}/>
//               <Route path="/product" element={ <Product/> }/>
//               <Route path="/ourservice" element={<Ourservice/>}/>
//               <Route path="/futures" element={<Futures/>}/>
//               <Route path="/GreenEnergy" element={<GreenEnergy/>}/>
//              <Route path="/contact" element={<Contact/>}/>
//               <Route path="/Dashpot" element={<ProtactRouter><Dashpot/></ProtactRouter>}/>
//               <Route path="/products/dashpot" element={ <ProtactRouter><Products/> </ProtactRouter>}/>
//               <Route path="/Addprodudt/dashpot" element={ <ProtactRouter><Addproduct/></ProtactRouter>}/>
//               <Route path="/Register" element={<Register/>}/>
//               <Route path="/Costomer/dashpot" element={ <ProtactRouter><Costomer/></ProtactRouter>}/>
//               <Route path="/CostomrtLogin" element={<CostomrtLogin/>}/>
//               <Route path="/AdminLogin" element={<AdminLogin/>}/>
//               <Route path="/Ongoingproject" element={<Ongoingproject/>}/>
//               <Route path="/ViewOngoingproject" element={<ProtactRouter><ViewOngoingproject/></ProtactRouter>}/>
//               <Route path="/AddOngoingproject" element={<ProtactRouter><AddOngoingproject/></ProtactRouter>}/>
//               <Route path="/completeproject" element={<Completeproject/>}/>
//               <Route path="/Viewcompleteproject" element={<ProtactRouter><Viewcompleteproject/></ProtactRouter> }/>
//               <Route path="/Addcompleteproject" element={<ProtactRouter><Addcompleteproject/></ProtactRouter>}/>
//               {/* <Route path="/Foter" element={<Foter/>}/> */}

              
//              </Routes>

//           </div>
//                  </div>

//           </div>
//     </>
    
//   )
// }

// export default App
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Header from "./Headers/Header"
import Header1 from "./Headers/Header1"
import Foter from "./Headers/Foter"
import "./Headers/Animatebg.css"

import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Ourservice from "./pages/Ourservice"
import Futures from "./pages/Futures"
import Contact from "./pages/Contact"
import Dashpot from "./Components/Dashpot"
import Products from "./Components/Products"
import Addproduct from "./Components/Addproduct"
import Register from "./pages/Register"
import Costomer from "./Components/Costomer"
import CostomrtLogin from "./pages/CostomrtLogin"
import AdminLogin from "./Components/AdminLogin"
import ProtactRouter from "./pages/ProtactRouter"
import Ongoingproject from "./pages/Ongoingproject"
import ViewOngoingproject from "./Components/ViewOngoingproject"
import AddOngoingproject from "./Components/AddOngoingproject"
import Completeproject from "./pages/Completeproject"
import Viewcompleteproject from "./Components/Viewcompleteproject"
import Addcompleteproject from "./Components/Addcompleteproject"
import GreenEnergy from "./pages/GreenEnergy"

function App() {

  const navigate = useNavigate()

  const hanldeRefersh = () => {
    const getCustomer = localStorage.getItem("customer")
    const getAdmin = localStorage.getItem("Admin")
    if(getCustomer || getAdmin){
      navigate("/")
    }
  }

  useEffect(() => {
    hanldeRefersh()
  }, [])

  // Animation particles
  useEffect(() => {
    const container = document.querySelector(".animated-bg")
    container.innerHTML = ""  // nadiifi particles-ka hore

    const numParticles = 30
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div")
      particle.classList.add("particle")

      const size = Math.random() * 8 + 4
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      particle.style.top = `${Math.random() * 100}%`
      particle.style.setProperty("--x", Math.random() * 100 + "%")

      particle.style.setProperty("--delay", Math.random() * 8)
      particle.style.animationDuration = `${6 + Math.random() * 6}s`

      container.appendChild(particle)
    }
  }, [])

  return (
    <>
      {/* Background animated */}
      <div className="animated-bg fixed top-0 left-0 w-full h-full -z-10"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header1 />
        <div className="sticky top-0 z-20 backdrop-blur-sm bg-white bg-opacity-50">
          <Header />
        </div>

        <div className="z-30">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<Product />} />
            <Route path="/ourservice" element={<Ourservice />} />
            <Route path="/futures" element={<Futures />} />
            <Route path="/GreenEnergy" element={<GreenEnergy />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/Dashpot" element={<ProtactRouter><Dashpot /></ProtactRouter>} />
            <Route path="/products/dashpot" element={<ProtactRouter><Products /></ProtactRouter>} />
            <Route path="/Addprodudt/dashpot" element={<ProtactRouter><Addproduct /></ProtactRouter>} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Costomer/dashpot" element={<ProtactRouter><Costomer /></ProtactRouter>} />
            <Route path="/CostomrtLogin" element={<CostomrtLogin />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />

            <Route path="/Ongoingproject" element={<Ongoingproject />} />
            <Route path="/ViewOngoingproject" element={<ProtactRouter><ViewOngoingproject /></ProtactRouter>} />
            <Route path="/AddOngoingproject" element={<ProtactRouter><AddOngoingproject /></ProtactRouter>} />
            <Route path="/completeproject" element={<Completeproject />} />
            <Route path="/Viewcompleteproject" element={<ProtactRouter><Viewcompleteproject /></ProtactRouter>} />
            <Route path="/Addcompleteproject" element={<ProtactRouter><Addcompleteproject /></ProtactRouter>} />
          </Routes>
        </div>

        <Foter />
      </div>
    </>
  )
}

export default App
