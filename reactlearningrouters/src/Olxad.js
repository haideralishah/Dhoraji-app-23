import React, {Component} from 'react';
import history from './Apphistory'

const adStyles = {
    width: '29%',
    border: '1px solid blue',
    float: 'left',
    margin: '1%',
    padding: '1%'
}

export default class Olxad extends Component {
    goToAdDetails() {
        history.push(`/adDetails/${this.props.adDetails.id}`)
    }
    render() {
        return (
            <div style={adStyles} >
                <h1>{this.props.adDetails.title.toUpperCase()}</h1>
                <p>{this.props.adDetails.des}</p>
                <p>Rs. <b>{this.props.adDetails.price} /-</b></p>
                <button onClick={this.goToAdDetails.bind(this)}>Show Details</button>
            </div>
        )
    }
}

