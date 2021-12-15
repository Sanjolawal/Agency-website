import React from 'react'
import logo from "../images/Logo.svg"

const Portdesign = (props) => {
    return (
        <>
         <div className="Portdesign-comp" data-aos="fade">
             <img src={logo} alt="logo" className="port-logo" data-aos="slide-left"/> 
             <img src={props.children} alt="" className="first-image"/>  
             <p className="pagah">{props.review}</p>
             <p className="pagah1">{props.year}</p>
        </div>   
        </>
    )
}

export default Portdesign
