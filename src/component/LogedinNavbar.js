import React from 'react'
import { Link } from 'react-router-dom';

const LogedinNavbar=()=>{
    
    return(
         <nav className="blue">
         <div className="container">
             <a className="brand-logo">ToDo</a> 
             <ul className="right">
                  <li><Link to ='/'>LOGOUT</Link></li>
             </ul>
         </div>
         </nav>
    )
}
export default LogedinNavbar;