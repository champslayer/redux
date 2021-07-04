import React from 'react';
import Logedout from './Checklogin/Logedout';
import Logedin from './Checklogin/Logedin';
import {BrowserRouter, Route , Switch } from 'react-router-dom';
import Navbar from './component/Navbar';

function  App() {

    return(
      <BrowserRouter>
        <div className ="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Logedout} />
            <Route exact path='/login' component={Logedin} />
          </Switch>
        </div>    
      </BrowserRouter>   
    )
}

export default App;
