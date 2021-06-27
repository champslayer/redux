import React from 'react'
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
         <nav className="blue">
         <div className="container">
             <a className="brand-logo">ToDo</a> 
             <ul className="right">
                  <li><Link to ='/login'>LOGIN</Link></li>
                  <li><Link to ='/signin'>SIGIN</Link></li>

             </ul>
         </div>
         </nav>
    )
}
export default Navbar;