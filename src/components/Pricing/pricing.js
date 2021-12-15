import React from "react"
import {Link } from 'react-router-dom'
import Review from "../review"
import Footer from "../Footer"




 

const Pricing = () => { 
  
    return (
        <>
        <div className="pricing">
            <p className="pricing-h1" data-aos="slide-right">SERVICES</p>
           <p className="pricing-info" data-aos="slide-left">Creating a high Quality online website is just the beginning, 
               We will work towards building a business that lasts for good. 
           </p>
        </div>
        <p className="more-info" data-aos="fade-right">Businesses often tend to underestimate the importance of having a high-quality and unique corporate image.
        We will make sure that your business is represented well enough at all times.</p> 
        
          <div className="packages">
            <div className="package-con"><h1 className="package-h1" data-aos="flip-down">BRANDING</h1></div>
            <p className="package-info" data-aos="zoom-out"> We create brand identity with easy, clear and easy to 
            understand message, engaging and attention grabbing.</p>
            <ul>
               <Link to="/Logo"> <li className="link" data-aos="slide-right">Corporate Logo design </li></Link>
               <Link to="/Animation"> <li className="link" data-aos="slide-left"> Animation/Video explainer</li></Link>
               <Link to="/Ads"> <li className="link" data-aos="slide-up"> Online Advertising</li></Link>
            </ul>
        </div>

          <div className="packages2">
            <div className="package-con2"><h1 className="package-h2" data-aos="flip-left">WEB DEVELOPMENT</h1></div>
            <p className="package-info2" data-aos="flip-down"> We approach web development, with precise attention to every 
            detail.</p>
            <ul>
               <Link to="/busportfolio"> <li className="link2"   data-aos="slide-top">Business portfolio website</li></Link>
               <Link to="/Restaurantpage"> <li className="link2" data-aos="slide-right"> Hotel/restaurant website</li></Link>
               <Link to="/Ecom"> <li className="link2"           data-aos="slide-left"> Ecommerce website</li></Link>
               <Link to="/Webrevamp"> <li className="link2"      data-aos="slide-down"> Website maintenance/revamp</li></Link>
            </ul>
          
        </div>
            <Review/>
              <div className="pricing-con">
               <p className="con-1" data-aos="fade">Still have questions?, get in touch with us.</p>
               <button className="con-2" data-aos="zoom-in">GET IN TOUCH</button>
              </div>
            <div className="pricing-footer"><Footer/></div>       
           </>
       )
}

export default Pricing
