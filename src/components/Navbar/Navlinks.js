import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = (props) => {
    return (
        <>
        <ul>
             <li> <Link to="/" onClick={() => props.isMobile && props.closemenu()} >Home </Link> </li>
             <li><Link to="/Whyus"     onClick={() => props.isMobile && props.closemenu()}  >Why us </ Link></li>
             <li><Link to="/portfolio" onClick={() => props.isMobile && props.closemenu()} >Portfolio</ Link></li>
             <li><Link to="/pricing"   onClick={() => props.isMobile && props.closemenu()} >Pricing</ Link></li>
             <li className="Qoute"     onClick={() => props.isMobile && props.closemenu()} >Get a Qoute</li>
        </ul> 
        </>
    )
}

export default Navlinks
