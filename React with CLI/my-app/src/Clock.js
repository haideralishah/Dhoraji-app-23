import React, { Component } from 'react';


class Clock extends Component {

    constructor(props) {
        super(props);
        this.updateTime();
    }

    state = {
        currentDateandTime: new Date().toLocaleString(),
        count: 0
    }

    updateTime() {
        setInterval(() => {
            this.setState({
                currentDateandTime: new Date().toLocaleString(),
                count: this.state.count + 1
            });
            
        }, 1000);
    }

    render() {
        return (
            <h1>{this.state.currentDateandTime}</h1>
        )
    }

}


export default Clock;


