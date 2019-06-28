import React, { Component } from 'react';
import history from './Apphistory';

class About extends Component {

    goToContact() {
        history.push('./contact');
    }

    render() {
        return (
            <div>
                <h1>Welcome to About</h1>
                <button onClick={this.goToContact.bind(this)}>Contact</button>
            </div>
        )
    }

}

export default About;