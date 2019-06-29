import React, { Component } from 'react';
import Greetuser from './Greetuser';

class Home extends Component {
    
    componentWillUnmount(){
        console.log('haider')
    }
    
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