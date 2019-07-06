
import ActionTypes from '../constant/constant';
import history from '../../History';
// import createBrowserHistory from 'history/createBrowserHistory'
import firebase from 'firebase';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()

// const hsitory = createBrowserHistory()



var config = {
    apiKey: "AIzaSyBj71WyfocMv6c2tw019W9rg_zl1frgLdM",
    authDomain: "fir-learning-6a8d7.firebaseapp.com",
    databaseURL: "https://fir-learning-6a8d7.firebaseio.com",
    projectId: "fir-learning-6a8d7",
    storageBucket: "fir-learning-6a8d7.appspot.com",
    messagingSenderId: "333978526201"
};
firebase.initializeApp(config);



export function changeUserName() {
    return dispatch => {
        dispatch({ type: ActionTypes.USERNAME, payload: 'Ali' })
    }
}


export function signupAction(user) {

    return dispatch => {
        console.log('user', user);
        // history.push('/signin');

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                    .then(() => {
                        firebase.database().ref('users/').once('value')
                            .then((userData) => {
                                let allUsers = userData.val();
                                let currentUserUid = firebase.auth().currentUser.uid;
                                dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                                dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                                firebase.database().ref('message/').once('value')
                                    .then((messagesData) => {
                                        let messages = messagesData.val();
                                        console.log(messages);
                                        dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                                        history.push('/chat');
                                    })

                            })
                    })


            })



    }
}



export function signinAction(user) {
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let allUsersArr = [];
                        for(var key in allUsers){
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr);
                        dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr })
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                        firebase.database().ref('message/').once('value')
                            .then((messagesData) => {
                                let messages = messagesData.val();
                                console.log(messages);

                                dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                                history.push('/chat');
                            })




                    })
            })
    }
}






export function changeRecipientUID(recpUID) {
    return dispatch => {
        dispatch({type: ActionTypes.CHANGERECPUID, payload:recpUID})
    }
}



export function sendMessage(message) {
    return dispatch => {
        firebase.database().ref('message/').push(message)
            .then(()=>{
                console.log('message sent')
            })

    }
}