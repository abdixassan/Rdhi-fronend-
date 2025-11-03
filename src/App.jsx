import { Route,  Routes, useNavigate } from "react-router-dom"
import Header from "./Headers/Header"

import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Ourservice from "./pages/Ourservice"
import Futures from "./pages/Futures"
import Cart from "./pages/Cart"
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
import Header1 from "./Headers/Header1"
import GreenEnergy from "./pages/GreenEnergy"
import { useEffect } from "react"
import Foter from "./Headers/Foter"




function App() {

  const navigate = useNavigate()
  const hanldeRefersh = () => {
    const getCcustmoer = localStorage.getItem("customer")
    const getAdmin = localStorage.getItem("Admin")
    if(getCcustmoer || getAdmin){
      navigate()
    }
  }

  useEffect(() => {
    hanldeRefersh()
  },[])


 

  return (
    <>
                <div>
                <Header1/>
                 <div className="sticky top-0 z-20 backdrop-blur-sm  bg-white bg-opacity-50">
              <Header/>
             </div>
              <div className="">

             
              <div>
             <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/product" element={ <Product/> }/>
              <Route path="/ourservice" element={<Ourservice/>}/>
              <Route path="/futures" element={<Futures/>}/>
              <Route path="/GreenEnergy" element={<GreenEnergy/>}/>

              <Route path="/cart" element={<Cart/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/Dashpot" element={<ProtactRouter><Dashpot/></ProtactRouter>}/>
              <Route path="/products/dashpot" element={ <ProtactRouter><Products/> </ProtactRouter>}/>
              <Route path="/Addprodudt/dashpot" element={ <ProtactRouter><Addproduct/></ProtactRouter>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Costomer/dashpot" element={ <ProtactRouter><Costomer/></ProtactRouter>}/>
              <Route path="/CostomrtLogin" element={<CostomrtLogin/>}/>
              <Route path="/AdminLogin" element={<AdminLogin/>}/>
              <Route path="/Ongoingproject" element={<Ongoingproject/>}/>
              <Route path="/ViewOngoingproject" element={<ProtactRouter><ViewOngoingproject/></ProtactRouter>}/>
              <Route path="/AddOngoingproject" element={<ProtactRouter><AddOngoingproject/></ProtactRouter>}/>
              <Route path="/completeproject" element={<Completeproject/>}/>
              <Route path="/Viewcompleteproject" element={<ProtactRouter><Viewcompleteproject/></ProtactRouter> }/>
              <Route path="/Addcompleteproject" element={<ProtactRouter><Addcompleteproject/></ProtactRouter>}/>
              {/* <Route path="/Foter" element={<Foter/>}/> */}

              
             </Routes>

          </div>
                 </div>

          </div>
    </>
    
  )
}

export default App
