import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../store/actions/authaction'
class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    emailFormHandler(event) {
        this.setState({
            email: event.target.value
        })
    }
    passwordFormHandler(event) {
        this.setState({
            password: event.target.value
        })
    }
    signup() {
        this.props.signinAction(this.state.email, this.state.password);
    }
    render() {
        return (
            <div>
                <h1>Hello Signin</h1>
                Email: <input type="text" name='email' value={this.state.email} onChange={this.emailFormHandler.bind(this)} /><br />
                Password: <input type="password" name='password' value={this.state.password} onChange={this.passwordFormHandler.bind(this)} />
                <button onClick={this.signup.bind(this)}>Signin</button>
                {
                    (this.props.loader === true)?(
                        <h1>Loading...</h1>
                    ): null
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        loader: state.basicInfo.loader
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        signinAction: (email, password) => {
            dispatch(signin(email, password))
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);













































