import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {sendMessage} from '../store/action/action'

class ChatBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            textAreaVal: ''
        }
    }
    _textAreaHandler(event){
        this.setState({
            textAreaVal: event.target.value
        })
    }
    sendMessage(){
        console.log(this.state.textAreaVal);
        let messageData = {
            senderID : this.props.currentUser,
            receiverID: this.props.recipientID,
            message: this.state.textAreaVal
        }
        console.log(messageData,'messageDatamessageData');
        this.props.sendMessage(messageData);
    }
    render() {
        console.log(this.props.messages, 'aaaaaaaaaa')
        return (
            <div>
                <textarea value={this.state.textAreaVal} onChange={this._textAreaHandler.bind(this)}></textarea>
                <button onClick={this.sendMessage.bind(this)}>send</button>
                {/* {this.props.messages.map((msg,ind)=>{

                })} */}


            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        currentUser: state.root.currentUser,
        recipientID: state.root.recipientID,
        messages : state.root.messages
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        sendMessage: (msg)=>{
           dispatch(sendMessage(msg));
       }
    })
}
export default connect(mapStateToProp,mapDispatchToProp)(ChatBox);
