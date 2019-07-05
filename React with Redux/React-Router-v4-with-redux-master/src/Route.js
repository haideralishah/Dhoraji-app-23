import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Apphistory from './History'

class Routers extends Component {
    render() {
        return (
            <Router history={Apphistory}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default Routers;