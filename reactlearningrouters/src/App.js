import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Router>
    )
  }
}
export default App;
