import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Signup from './components/signup';
import Signin from './components/signin';
import Todos from './components/todos';

import Apphistory from './History'

class Routers extends Component {
    render() {
        return (
            <Router history={Apphistory}>
                <div>
                    <Route exact path="/" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/todos" component={Todos} />

                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default Routers;