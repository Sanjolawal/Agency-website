import React from 'react'
import {FaBars} from "react-icons/fa"
import Navlinks from './Navlinks'
import { useState } from 'react'
import {CgCloseO} from "react-icons/cg"

const Hamburger = () => {
   
     const [open, setOpen] = useState(false);
   
            const Hamburgericon = <FaBars size='30px' onClick={function auto(){
             setOpen(!open)
             }} className="button" /> 

            const closedicon  = <CgCloseO size='30px'  onClick={function auto(){
             setOpen(!open)
             }} className="button" /> 

            const close = () => setOpen(open)


    return (
       <>
         <nav className='mobilenavigation'>
        {open ? closedicon : Hamburgericon}
        {open && < Navlinks isMobile={true} closeMenu ={close}/>}
         </nav>
       
        </>
    )
}

export default Hamburger
