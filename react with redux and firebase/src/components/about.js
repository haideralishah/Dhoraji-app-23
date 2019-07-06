import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello About {this.props.userName}</h1>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        userName: state.root.userName
    })
}


export default connect(mapStateToProp,null)(About);
