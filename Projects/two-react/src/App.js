import './App.css';
import React, { useState } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import axios from 'axios';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Write from './components/Write';
import Home from './components/Home';
import Read from './components/Read';
import Your_letters from './components/Your_letters';

// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from 'react-bootstrap';
import Signin from './components/Signin';

function App() {
  //for the datepicker
  const [selectedDate,setSelectedDate]=useState(null)
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Footer/>
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/Write" component={Write}/>
          <Route path="/Read" component={Read}/>
          <Route path="/Signin" component={Signin}/> 
          <Route path="/Your_letters" component={Your_letters}/>
        </Switch>
      </div> 
     </Router> 
  );
}

export default App;
