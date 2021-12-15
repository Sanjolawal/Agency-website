import React from "react"
import Navbar from "./Navbar/Navbar.js"
import "./Navbar/Navbar.css"
import "./Header/header.css"
import "./Whyus/Whyus.css"
import "./Portfolio/portfolio.css"
import "./Pricing/pricing.css"
import Header from "./Header/header.js"
import Whyus from "./Whyus/whyus.js"
import Portfolio from "./Portfolio/Portfolio.js"
import Pricing from "./Pricing/pricing.js"
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Busportfolio from "./Routes in pricing page/busportfolio"
import Restaurantpage from "./Routes in pricing page/Restaurantpage"
import Ecom from "./Routes in pricing page/Ecom.js"
import Webrevamp from "./Routes in pricing page/Webrevamp.js"
import Ads from "./Routes in pricing page/Ads.js"
import  Animation  from "./Routes in pricing page/Animation.js"
import Logo from "./Routes in pricing page/Logo.js"
import Hamburger from "./Navbar/Hamburger.js"


function Apps(){

  return(
    <BrowserRouter>
      <div>
         <Navbar /> 
         <Hamburger/>
      </div>
      <Routes>
           <Route path="/" element={<Header/>}/>
           <Route path="/whyus" element={<Whyus/>}/>
           <Route path="/portfolio" element={<Portfolio/>}/>
           <Route path="/pricing" element={<Pricing/>}/>
           <Route path="/Ads" element={<Ads/>}/>     
           <Route path="/Animation" element={<Animation/>}/>     
           <Route path="/Logo" element={<Logo/>}/>     
           <Route path="/busportfolio" element={<Busportfolio/>}/> 
           <Route path="/Restaurantpage" element={<Restaurantpage/>}/> 
           <Route path="/Webrevamp" element={<Webrevamp/>}/> 
           <Route path="/Ecom" element={<Ecom/>}/>     
          
           
           
      </Routes>
    </BrowserRouter>
  )
}
export default Apps
