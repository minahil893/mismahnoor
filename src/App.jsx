import React from "react";
import Shop from './components/Shop'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import HomeDetail from "./components/HomeDetail";
import Contact from "./components/Contact";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Newarrival from "./components/Newarrival";
import Footer from "./components/Footer";
import Face from "./data/pages/Face";
import FaceDetail from "./components/FaceDetail";
import NewDetail from "./components/NewDetail";
import ShopDetail from "./components/ShopDetail";
import Lip from "./components/Lip";
import LipDetail from "./components/LipDetail";
import Cheek from "./components/Cheek";
import CheekDetail from "./components/CheekDetail";
import Login from "./data/pages/Login";
import Carazole from "./components/Carazole";
import Nail from "./components/Nail";
import NailDetail from "./components/NailDetail";
import Mist from "./components/Mist";
import MistDetail from "./components/MistDetail";
import Eye from "./components/Eye";
import EyeDetail from "./components/EyeDetail";


const App = () => {
  return (
    <div className=''>
      <Navbar/>
   <Routes>
   <Route path='/Log' element={<Login/>}></Route>


   <Route path='/Face' element={<Face />}></Route> 
   <Route path='/Lip' element={<Lip/>}></Route> 
   <Route path='/eye'  element={<Eye/>}></Route>
   <Route path='/byproduct1/:id' element={<EyeDetail />}></Route> 
   <Route path='/nail' element={<Nail/>}></Route> 
   <Route path='/product5/:id' element={<NailDetail />}></Route> 
   <Route path='/body-shimmer' element={<Mist/>}></Route> 
   <Route path='/product6/:id' element={<MistDetail />}></Route> 
   <Route path='/product3/:id' element={<LipDetail />}></Route> 
   <Route path='/Cheek' element={<Cheek/>}></Route> 
   <Route path='/product4/:id' element={<CheekDetail />}></Route> 
   <Route path='/products/:id' element={<FaceDetail />}></Route> 
  <Route path='/Home' element={<Home />}></Route> 
  <Route path='/Product/:id' element={<HomeDetail/>}></Route> 
  <Route path='/Shop' element={<Shop />} ></Route>
  <Route path='/product2/:id' element={<ShopDetail />}></Route> 
  <Route path='/Newarrivals' element={<Newarrival/>}> </Route>
  <Route path='/product1/:id' element={<NewDetail />}></Route> 
  <Route path='/About-us'  element={<About/>}></Route>
  <Route path='/Contact-us'  element={<Contact />}></Route>
  <Route path='/FAQs'  element={<Faqs />}></Route>
  {/* <Route path='/carz'  element={<Carazole />}></Route> */}


  
</Routes>
<Footer/>

    </div>
  )
}

export default App
