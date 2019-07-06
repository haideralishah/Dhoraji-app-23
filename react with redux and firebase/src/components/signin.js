import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signinAction} from '../store/action/action';
class Signin extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            email: '',
            password: ''
        }


        this.signin = this.signin.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);

    }

    signin() {
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            email: '',
            password: ''
        })
        this.props.signinWithEmailPassword(user);
    }
    _onChangeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    _onChangePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World Signin</h1>
                <label>Email:<input type='text' name='email' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br />
                <label>Password:<input type='password' name='password' value={this.state.password} onChange={this._onChangePassword}/></label>
                <button onClick={this.signin}>Signin</button>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        // userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        signinWithEmailPassword: (user)=>{
            dispatch(signinAction(user))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signin);

