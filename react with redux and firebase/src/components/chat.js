import React, { Component } from 'react';
import {changeRecipientUID} from '../store/action/action'
import { connect } from 'react-redux';
import ChatBox from './chatbox';

class Chat extends Component {
    setRecipient(recUid){
        console.log('recipient',recUid);
        this.props.changeRecUID(recUid);
    }
    render(){
        console.log(this.props.currentUser,'////////////////');
        console.log(this.props.allUsers, '******************');
        console.log(this.props.allMessages, 'aaaaaaaaaa');
        return(
            <div>
                <h1>Hello Chat</h1>
                {
                    this.props.allUsers.map((user, index)=>{
                        return(
                            <h2 key={index} onClick={this.setRecipient.bind(this, user.uid)}>{user.username}</h2>
                        )
                    })
                }
               {/*  {
                    (this.props.receiverID)?(  <ChatBox />):(null)
                } */}

<ChatBox />
              
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        currentUser: state.root.currentUser,
        allUsers: state.root.users,
        allMessages: state.root.messages,
        recipientID: state.root.recipientID


    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
       changeRecUID: (recID)=>{
           dispatch(changeRecipientUID(recID));
       }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Chat);