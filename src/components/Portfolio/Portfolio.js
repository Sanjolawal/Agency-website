import React from 'react'
import Portdesign from './Portdesign'
import Footer from '../Footer'
import header2 from "../images/Cap.PNG"

const Portfolio = () => {
    return (
        <>
           <div className="pricing">
             <p className="portfolio-h2" data-aos="zoom-out">PORTFOLIO</p>
             <p className="portfolio-info2" data-aos="slide-left">
                 Our clients are what matters the most to us. We are happy to see clients turning into good friends.
            </p>
         </div> 
            <p className="more-info" data-aos="flip-left">
               Our clients define our business. Over the years we have worked with numerous partners,
                as each of them had their requirements and experience in their respective sectors.
                Our goal has always been to meet and exceed their expectations. 
           </p> 
           <div className="port-comp">
               <Portdesign
                review="Great work, really appreciate😘"
                year="2021"
               >{header2}</Portdesign>
               <Portdesign img={"I'm good"}/>
               <Portdesign img={"I'm good"}/> 
               <Portdesign img={"I'm good"}/>
               <Portdesign img={"I'm good"}/>
               <Portdesign img={"I'm good"}/>
               <Portdesign img={"I'm good"}/>
               <Portdesign img={"I'm good"}/>
               <Portdesign img={"I'm good"}/>
               <Portdesign img={"I'm good"}/>
               <Portdesign img={"I'm good"}/>               
           </div>
           <div className="portfolio-con">
     <p className="con-13" data-aos="fade-up">Still have questions?, get in touch with us.</p>
     <button className="con-21" data-aos="slide-down">GET IN TOUCH</button>
 </div>
   <div className="portfolio-footer"><Footer/></div>
        </>
    )
}

export default Portfolio
