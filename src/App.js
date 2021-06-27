import React,{ Component } from 'react';
import Logedout from './Checklogin/Logedout';
import Logedin from './Checklogin/Logedin';
import {BrowserRouter, Route , Switch } from 'react-router-dom';
import firebase from 'firebase';

class  App extends Component {
  render (){

    const onSubmit = ()=>{var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch((error) => {
        console.log(error);
      });
    }
    return(
      <BrowserRouter>
        <div className ="App">
          <Switch>
            <Route exact path='/' component={Logedout} />
            <Route exact path='/login' component={Logedin} />
            <Route exact path='/signin' component={onSubmit} />
          </Switch>
        </div>    
      </BrowserRouter>   
    )
  };
}

export default App;
