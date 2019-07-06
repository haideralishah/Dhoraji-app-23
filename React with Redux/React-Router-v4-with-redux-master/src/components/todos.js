import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Todos extends Component {
    state = {
        username: ''
    }
    userInput(event) {
        this.setState({
            username: event.target.value
        })
    }

   
    render() {
        return (
            <div>
                <h1>Hello World {this.props.currentUserName}</h1>
                <h1>{this.props.curretUserEmail}</h1>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentUserName: state.basicInfo.username,
        curretUserEmail: state.basicInfo.email,
        currentUserUid: state.basicInfo.uid
    }
}

function mapDispatchToProps(dispatch) {
    return ({
      
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos);













































