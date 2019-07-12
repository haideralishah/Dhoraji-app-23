import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../store/actions/authaction'
import { Link } from "react-router-dom";

const errorStyle = {
    color: 'red',
    border: '1px solid red'
}

class Signup extends Component {
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
        this.props.signupAction(this.state.email, this.state.password);
    }
    render() {
        return (
            <div>
                <h1>Hello Signup</h1>
                Email: <input type="text" name='email' value={this.state.email} onChange={this.emailFormHandler.bind(this)} /><br />
                Password: <input type="password" name='password' value={this.state.password} onChange={this.passwordFormHandler.bind(this)} />
                <button onClick={this.signup.bind(this)}>Signup</button><br />
                {
                    (this.props.loader === true) ? (
                        <h1>Loading...</h1>
                    ) : null


                }
                {
                    (this.props.showError === true) ? (
                        <div style={errorStyle}>{this.props.errorMessage}</div>
                    ) : null

                }
                <br /><br />
                <Link to="/signin">Already have an account? Signin</Link>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        loader: state.basicInfo.loader,
        showError: state.basicInfo.showError,
        errorMessage: state.basicInfo.errorMessage,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        signupAction: (email, password) => {
            dispatch(signup(email, password))
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);













































