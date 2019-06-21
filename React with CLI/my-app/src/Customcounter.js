import React, { Component } from 'react';


class Customcounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usercounter: 0,
            counter: 0
        }

        this.updateUserCounter = this.updateUserCounter.bind(this);
        this.addCounter = this.addCounter.bind(this);

    }

    updateUserCounter(event) {
        this.setState({
            usercounter: Number(event.target.value)

        });
    }

    addCounter() {
        this.setState({
            counter: this.state.counter + this.state.usercounter
        })
    }

    subtractCounter() {
        this.setState({
            counter: this.state.counter - this.state.usercounter
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addCounter.bind(this)}>+</button>
                <b>{this.state.counter}</b>
                <button onClick={this.subtractCounter.bind(this)}>-</button>

                <input type="text" name="usercounter" value={this.state.usercounter} onChange={this.updateUserCounter} />


            </div>
        )
    }

}


export default Customcounter;


