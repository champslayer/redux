import React from 'react';
import LogedinNavbar from '../component/LogedinNavbar';
import Profile from '../Profile';


const Logedin = () => { 
     
    return(
         <div>
            <LogedinNavbar />
            <Profile />
         </div>
    )
}

export default Logedin;