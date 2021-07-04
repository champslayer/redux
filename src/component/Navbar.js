import React from 'react'
import { auth,provider } from '../Firebase.js/Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
const Navbar=()=>{

    const SignhimIn =()=>{
        auth.signInWithRedirect(provider);
    }
    const SignhimOut =()=>{
        auth.signOut();
    }

    const [user]=useAuthState(auth);

    return(
         <nav className="blue">
         <div className="container">
             <a className="brand-logo">ToDo</a> 
             <ul className="right">
                {user ? (
                    <>
                    <button onClick={SignhimOut}>SIGN OUT</button>
                    </>
                ) : (<button onClick={SignhimIn}>SIGN IN</button>)}
             </ul>
         </div>
         </nav>
    )
}
export default Navbar;