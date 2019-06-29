import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import List from './List';
import Olxadlist from './Olxadlist';
import Addetails from './Addetails';



import Contact from './Contact';
import { Router, Route } from "react-router-dom";
import Navbar from './Navbar';
import history from './Apphistory';



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/list' component={List} />
        <Route path='/olxadlist' component={Olxadlist} />
        <Route path='/adDetails/:adId' component={Addetails} />

      </Router>
    )
  }
}
export default App;
