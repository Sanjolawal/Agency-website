import React from "react";
import Logo from "../images/Logo.svg"
import Navlinks from "./Navlinks";



function Nabvar(){
    return(
   <section
    data-aos="flip-down"
    data-aos-duration="500" >
        <img src={Logo} alt="Company logo" />
         <p>Web Development Agency</p>
         <nav className='navigation'>
         <Navlinks/>
         </nav>
   </section>

    )
    }
export default Nabvar

 
