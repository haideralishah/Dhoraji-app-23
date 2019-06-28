import React, { Component } from 'react';
import Greetuser from './Greetuser';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
                <Greetuser username="Haider" />
                <Greetuser />

            </div>
        )
    }
}

export default Home;