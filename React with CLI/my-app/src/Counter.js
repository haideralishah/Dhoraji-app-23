import React, { Component } from 'react';


class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter() {
        if (this.state.counter < 10) {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }

    subtractCounter() {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.addCounter.bind(this)}>+</button>
                <b>{this.state.counter}</b>
                <button onClick={this.subtractCounter.bind(this)}>-</button>
            </div>
        )
    }

}


export default Counter;


