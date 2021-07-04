import React from 'react';
import Logedin from './Logedin';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../Firebase.js/Firebase';
const Logedout = () => {
    const [user]=useAuthState(auth);
    console.log(auth.currentUser)
    return(
         <div>
         {
            auth.currentUser ? (<Logedin />) : (
            <p> Here comes all the shit about the app !!!!!!!!!!!!!!!!!!!!!!!!! </p>)
         }
         </div>
    )
}
export default Logedout;